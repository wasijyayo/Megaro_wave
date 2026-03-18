function lerp(a, b, t) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1)
}

function clampNumber(value, fallback = 0) {
  const n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

function normalizeDigits(values) {
  if (Array.isArray(values)) {
    const digits = values
      .map((value) => Math.abs(Math.floor(clampNumber(value, 1))) % 10)
      .map((value) => (value === 0 ? 1 : value))
    return digits.length > 0 ? digits : [1]
  }

  const raw = String(values ?? '')
    .match(/\d/g)
    ?.map((digit) => (digit === '0' ? 1 : Number(digit)))
    .filter((digit) => Number.isFinite(digit) && digit > 0) ?? []

  return raw.length > 0 ? raw : [1]
}

export function buildRepeatingPattern(values, length = 12) {
  const source = normalizeDigits(values)
  const size = Math.max(1, Math.floor(clampNumber(length, 12)))

  return Array.from({ length: size }, (_, index) => source[index % source.length])
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

  const amplitude           = lerp(0.15, 2.8, speedT)
  const frequency           = lerp(1.8, 0.3, strengthT)
  const speed               = lerp(0.4, 3.0, speedT)
  const waveSpacing         = lerp(0.4, 2.2, strengthT)
  const turbulence          = lerp(0.0, 1.0, speedT)
  const difficultyMultiplier = lerp(1.0, 5.0, speedT)
  const heightPattern = getWaveHeightPattern(ssid, heightPatternLength)

  const label =
    downlink < 5  ? '湖のように穏やか' :
    downlink < 20 ? '穏やか'           :
    downlink < 50 ? '普通'             :
    downlink < 80 ? '荒れ'             :
                    '嵐'

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
