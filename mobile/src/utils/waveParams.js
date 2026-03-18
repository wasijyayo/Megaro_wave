function lerp(a, b, t) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1)
}

function clampNumber(value, fallback = 0) {
  const n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

// React Native側で strokeCount が共通インポートできる前提がなかったため、
// モバイル側は簡易的に文字列から数値を抽出する元のロジックをベースに、
// 「SSIDの各文字のコードポイントなどを元にした配列」か「空なら[1]」を返す形に変更。
export function getWaveHeightPattern(ssid, length = 12) {
  if (!ssid) return [1]
  const arr = [...String(ssid)].map(char => {
    // 簡易的な文字→画数的な数値のフォールバック (英数は元の数字や簡易なハッシュ)
    const code = char.charCodeAt(0)
    return Math.max(1, code % 10) // 1〜9の変動値
  })
  return arr.length > 0 ? arr : [1]
}

function normalizeWaveInput(input) {
  if (typeof input === 'number') {
    const downlink = clampNumber(input, 0)
    return { downlink, strength: downlink, ssid: '', heightPatternLength: 12 }
  }

  if (!input || typeof input !== 'object') {
    return { downlink: 0, strength: 0, ssid: '', heightPatternLength: 12 }
  }

  const downlink = clampNumber(input.downlink ?? input.speed ?? 0, 0)
  const strength = clampNumber(input.strength ?? input.signalStrength ?? input.level ?? downlink, downlink)

  return {
    downlink,
    strength,
    ssid: input.ssid ?? '',
    heightPatternLength: clampNumber(input.heightPatternLength ?? 12, 12),
  }
}

/**
 * WiFi通信速度 (Mbps) → 波パラメータ変換
 * Webアプリと同じロジックを共有
 */
export function getWaveParams(input) {
  const { downlink, strength, ssid, heightPatternLength } = normalizeWaveInput(input)

  const speedT = Math.min(Math.max(downlink, 0), 100) / 100
  const strengthT = Math.min(Math.max(strength, 0), 100) / 100

  const amplitude           = lerp(0.15, 0.5, speedT) * 0.15
  const frequency           = lerp(0.1, 0.3, strengthT) * 0.3
  const speed               = lerp(0.4, 0.5, speedT) * 0.2
  const waveSpacing         = lerp(0.5, 1.2, strengthT)
  const turbulence          = lerp(0.0, 1.0, speedT)
  const difficultyMultiplier = lerp(1.0, 5.0, speedT)
  const heightPattern = getWaveHeightPattern(ssid, heightPatternLength)

  let label = '嵐'
  if (downlink < 5) {
    label = '湖のように穏やか'
  } else if (downlink < 20) {
    label = '穏やか'
  } else if (downlink < 50) {
    label = '普通'
  } else if (downlink < 80) {
    label = '荒れ'
  }

  return { amplitude, frequency, speed, waveSpacing, turbulence, difficultyMultiplier, label, ssid, heightPattern }
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
