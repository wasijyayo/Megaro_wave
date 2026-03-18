import { ssidToStrokeArraySync } from './strokeCount.js';

function lerp(a, b, t) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1);
}

function clampNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export function getWaveHeightPattern(ssid, length = 12) {
  // 新しい同期版 SSID 画数配列をそのまま波パターンに使う
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

  // 全体的に波が高くなりすぎるのを抑えるため、ベースの amplitude スケーリング
  const amplitude = lerp(0.15, 1.8, speedT) * 0.5;
  // エイリアシングを防ぐため最低波長を0.5からに修正
  const waveSpacing = lerp(0.5, 2.2, strengthT) * 4;
  // waveSpacing をそのまま「波の間隔（谷-谷）として扱うため」、
  // 周期は 2π なので frequency = 2π / waveSpacing にしています。
  const frequency = (2.0 * Math.PI) / Math.max(0.001, waveSpacing);
  const speed = lerp(0.4, 10.0, speedT);
  const turbulence = lerp(0.0, 1.0, speedT);
  const difficultyMultiplier = lerp(1.0, 5.0, speedT);
  const heightPattern = getWaveHeightPattern(ssid, heightPatternLength);

  let label = "嵐";
  let color = { deep: "#061d3a", surface: "#0a5570" };

  if (downlink < 5) {
    label = "湖のように穏やか";
    color = { deep: "#0d4f8c", surface: "#1a9eba" };
  } else if (downlink < 20) {
    label = "穏やか";
    color = { deep: "#0d4f8c", surface: "#1a9eba" };
  } else if (downlink < 50) {
    label = "普通";
    color = { deep: "#0a3d6b", surface: "#0e7aa0" };
  } else if (downlink < 80) {
    label = "荒れ";
    color = { deep: "#061d3a", surface: "#0a5570" };
  }

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
  
  // シェーダーのロジックと完全に一致させるための位相計算
  const arg = x * frequency - time * speed;
  const cycleIndex = arg / (2.0 * Math.PI);

  const getPatternAt = (index) => {
    let pIdx = Math.floor(index) % pattern.length;
    if (pIdx < 0) pIdx += pattern.length; // 負の剰余対応
    return Math.max(1, clampNumber(pattern[pIdx], 1));
  };

  const fIdx0 = Math.floor(cycleIndex);
  const h0 = getPatternAt(fIdx0);
  const h1 = getPatternAt(fIdx0 + 1);

  // 小数部分を使って smoothstep (スプライン曲線近似) 補間
  const fractPart = cycleIndex - fIdx0;
  const t = fractPart * fractPart * (3.0 - 2.0 * fractPart);
  const heightScale = h0 + (h1 - h0) * t;

  // x方向のみで波高を計算
  return Math.sin(arg) * amplitude * heightScale;
}
