function lerp(a, b, t) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1);
}

/**
 * WiFi通信速度 (Mbps) → 波パラメータ変換
 * 速度が速いほど波が大きく荒れる (高難易度 → 高スコア倍率)
 */
export function getWaveParams(downlink) {
  const t = Math.min(downlink, 100) / 100;

  const amplitude = lerp(0.15, 1.8, t);
  const frequency = lerp(0.3, 1.8, t);
  const speed = lerp(0.4, 30.0, t);
  const turbulence = lerp(0.0, 1.0, t);
  const difficultyMultiplier = lerp(1.0, 5.0, t);

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
    turbulence,
    difficultyMultiplier,
    label,
    color,
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
export function getWaveHeight(x, z, time, amplitude = 0.5, frequency = 1.0, speed = 1.0) {
  // x方向のみで波高を計算
  return Math.sin(x * frequency + time * speed) * amplitude;
}
