import { ssidToStrokeArraySync } from './strokeCount.js';

function lerp(a, b, t) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1);
}

function clampNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function normalizeDigits(values) {
  // 後方互換で一応残すがもう呼ばれない想定（必要なら適宜削除）
  if (Array.isArray(values)) {
    const digits = values
      .map((value) => Math.abs(Math.floor(clampNumber(value, 1))) % 10)
      .map((value) => (value === 0 ? 1 : value));
    return digits.length > 0 ? digits : [1];
  }
  return [1];
}

export function buildRepeatingPattern(values, length = 12) {
  const source = normalizeDigits(values);
  const size = Math.max(1, Math.floor(clampNumber(length, 12)));

  return Array.from({ length: size }, (_, index) => source[index % source.length]);
}

export function getWaveHeightPattern(ssid, length = 12) {
  // 元の buildRepeatingPattern ではなく、新しい同期版 SSID 画数配列をそのまま波パターンに使う
  // パターンが空の場合は最低限 [1] が返る
  return ssidToStrokeArraySync(ssid);
}

function normalizeWaveInput(input) {
  if (typeof input === 'number') {
    const downlink = clampNumber(input, 0);
    return {
      downlink,
      strength: downlink,
      ssid: '',
      heightPatternLength: 12,
    };
  }

  if (!input || typeof input !== 'object') {
    return {
      downlink: 0,
      strength: 0,
      ssid: '',
      heightPatternLength: 12,
    };
  }

  const downlink = clampNumber(input.downlink ?? input.speed ?? 0, 0);
  const strength = clampNumber(
    input.strength ?? input.signalStrength ?? input.level ?? downlink,
    downlink,
  );

  return {
    downlink,
    strength,
    ssid: input.ssid ?? '',
    heightPatternLength: clampNumber(input.heightPatternLength ?? 12, 12),
  };
}

/**
 * WiFi通信速度 (Mbps) → 波パラメータ変換
 * 速度が速いほど波が大きく荒れる (高難易度 → 高スコア倍率)
 */
export function getWaveParams(input) {
  const { downlink, strength, ssid, heightPatternLength } = normalizeWaveInput(input);

  const speedT = Math.min(Math.max(downlink, 0), 100) / 100;
  const strengthT = Math.min(Math.max(strength, 0), 100) / 100;

  const amplitude = lerp(0.15, 1.8, speedT);
  const frequency = lerp(1.8, 0.3, strengthT);
  const speed = lerp(0.4, 30.0, speedT);
  const waveSpacing = lerp(0.4, 2.2, strengthT);
  const turbulence = lerp(0.0, 1.0, speedT);
  const difficultyMultiplier = lerp(1.0, 5.0, speedT);
  const heightPattern = getWaveHeightPattern(ssid, heightPatternLength);

  const label =
    downlink < 5
      ? "湖のように穏やか"
      : downlink < 20
        ? "穏やか"
        : downlink < 50
          ? "普通"
          : downlink < 80
            ? "荒れ"
            : "嵐";

  const color = {
    deep: downlink < 20 ? "#0d4f8c" : downlink < 50 ? "#0a3d6b" : "#061d3a",
    surface: downlink < 20 ? "#1a9eba" : downlink < 50 ? "#0e7aa0" : "#0a5570",
  };

  return {
    amplitude,
    frequency,
    speed,
    waveSpacing,
    turbulence,
    difficultyMultiplier,
    label,
    color,
    ssid,
    heightPattern,
  };
}

/**
 * 波の傾き(x=0, z=0 地点の勾配)を JS 側で計算
 * シェーダーの波関数の偏微分 ∂y/∂x at (0,0)
 */
export function calcWaveTilt(
  amplitude,
  frequency,
  speed,
  turbulence,
  elapsedTime,
) {
  const t = elapsedTime;
  const f = frequency;
  const s = speed;
  const A = amplitude;

  const slope =
    f * A * Math.cos(s * t) +
    f * 1.7 * A * 0.5 * Math.cos(-s * 0.9 * t + 2.1) +
    f * 2.0 * 0.7 * A * 0.2 * turbulence * Math.cos(s * 1.8 * t);

  // tanh で -1 〜 +1 に正規化
  return Math.tanh(slope * 0.3);
}

/**
 * 任意座標の波の高さを計算して返すユーティリティ
 * x, z: シーン内の座標
 * time: 経過時間
 */
export function getWaveHeight(
  x,
  z,
  time,
  amplitude = 0.5,
  frequency = 1.0,
  speed = 1.0,
  heightPattern = [],
) {
  const pattern = Array.isArray(heightPattern) && heightPattern.length > 0
    ? heightPattern
    : [1];
  const maxDigit = Math.max(...pattern.map((value) => Math.max(1, clampNumber(value, 1))));
  const spacing = Math.max(0.001, 1 / Math.max(frequency, 0.001));
  const patternIndex = Math.abs(Math.floor((x + time * speed) / spacing)) % pattern.length;
  const heightScale = Math.max(1, clampNumber(pattern[patternIndex], 1)) / maxDigit;

  // x方向のみで波高を計算
  return Math.sin(x * frequency + time * speed) * amplitude * heightScale;
}
