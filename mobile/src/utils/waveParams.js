function lerp(a, b, t) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1)
}

/**
 * WiFi通信速度 (Mbps) → 波パラメータ変換
 * Webアプリと同じロジックを共有
 */
export function getWaveParams(downlink) {
  const t = Math.min(downlink, 100) / 100

  const amplitude          = lerp(0.15, 2.8,  t)
  const frequency          = lerp(0.3,  1.8,  t)
  const speed              = lerp(0.4,  3.0,  t)
  const turbulence         = lerp(0.0,  1.0,  t)
  const difficultyMultiplier = lerp(1.0, 5.0, t)

  const label =
    downlink < 5  ? '湖のように穏やか' :
    downlink < 20 ? '穏やか'           :
    downlink < 50 ? '普通'             :
    downlink < 80 ? '荒れ'             :
                    '嵐'

  return { amplitude, frequency, speed, turbulence, difficultyMultiplier, label }
}

/**
 * Android の RSSI (dBm) から通信速度 (Mbps) を推定
 * react-native-wifi-reborn の level フィールドに使用
 */
export function rssiToMbps(rssi) {
  if (rssi >= -50) return 100
  if (rssi >= -60) return 75
  if (rssi >= -70) return 40
  if (rssi >= -80) return 15
  if (rssi >= -90) return 5
  return 1
}
