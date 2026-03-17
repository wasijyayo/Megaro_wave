import { useState, useRef, useCallback } from 'react'

const WII_VENDOR_ID  = 0x057e
const WII_PRODUCT_ID = 0x0306

const DEFAULT_SCALE   = { topLeft: 1.0, topRight: 1.0, bottomLeft: 1.0, bottomRight: 1.0 }
const DEFAULT_RATE    = { topLeft: 1.0, topRight: 1.0, bottomLeft: 1.0, bottomRight: 1.0 }
const ZERO_SENSORS    = { topLeft: 0,   topRight: 0,   bottomLeft: 0,   bottomRight: 0   }

function computeCoP(s) {
  const total = s.topLeft + s.topRight + s.bottomLeft + s.bottomRight
  if (total === 0) return { x: 0, y: 0, total: 0 }
  return {
    x:     (s.topRight + s.bottomRight - s.topLeft  - s.bottomLeft) / total,
    y:     (s.topLeft  + s.topRight    - s.bottomLeft - s.bottomRight) / total,
    total,
  }
}

export function useWiiBoard() {
  const [connected,   setConnected]        = useState(false)
  const [sensors,     setSensors]          = useState(ZERO_SENSORS)
  const [cop,         setCoP]              = useState({ x: 0, y: 0, total: 0 })
  const [sensitivity, setSensState]        = useState(1.0)
  const [sensorScale, setSensorScaleState] = useState(DEFAULT_SCALE)
  const [sensorRate,  setSensorRateState]  = useState(DEFAULT_RATE)

  const copRef            = useRef({ x: 0, y: 0, total: 0 })
  const copOffsetRef      = useRef({ x: 0, y: 0 })        // キャリブレーション時のCoP原点
  const rawSensorsRef     = useRef({ ...ZERO_SENSORS })   // 最新の生センサー値
  const sensorBaselineRef = useRef({ ...ZERO_SENSORS })   // キャリブレーション時の生センサー値
  const sensitivityRef    = useRef(1.0)
  const sensorScaleRef    = useRef({ ...DEFAULT_SCALE })
  const sensorRateRef     = useRef({ ...DEFAULT_RATE })
  const horizontalCalibRef = useRef({ center: 0, scale: 1 }) // 左右方向用の自動補正パラメータ
  const deviceRef         = useRef(null)

  const connect = useCallback(async () => {
    if (!('hid' in navigator)) return false
    try {
      const devices = await navigator.hid.requestDevice({
        filters: [{ vendorId: WII_VENDOR_ID, productId: WII_PRODUCT_ID }],
      })
      if (!devices.length) return false

      const device = devices[0]
      deviceRef.current = device
      if (!device.opened) await device.open()

      // デバイスが開けた時点で「接続中」とみなす
      // （一部環境で sendReport が失敗しても入力レポートが届くケースを考慮）
      setConnected(true)

      device.addEventListener('inputreport', ({ reportId, data }) => {
        if (reportId !== 0x32) return
        if (data.byteLength < 10) return

        const ext = new DataView(data.buffer, 2)
        const raw = {
          topRight:    ext.getUint16(0, false),
          bottomRight: ext.getUint16(2, false),
          topLeft:     ext.getUint16(4, false),
          bottomLeft:  ext.getUint16(6, false),
        }
        rawSensorsRef.current = raw

        const bl = sensorBaselineRef.current
        const sr = sensorRateRef.current
        const sc = sensorScaleRef.current

        // baseline + delta × rate を scale 倍
        // 例: baseline=1000, raw=1010, rate=2 → 1000 + 10×2 = 1020
        const s = {
          topLeft:     (bl.topLeft     + (raw.topLeft     - bl.topLeft)     * sr.topLeft)     * sc.topLeft,
          topRight:    (bl.topRight    + (raw.topRight    - bl.topRight)    * sr.topRight)    * sc.topRight,
          bottomLeft:  (bl.bottomLeft  + (raw.bottomLeft  - bl.bottomLeft)  * sr.bottomLeft)  * sc.bottomLeft,
          bottomRight: (bl.bottomRight + (raw.bottomRight - bl.bottomRight) * sr.bottomRight) * sc.bottomRight,
        }
        const rawCoP = computeCoP(s)

        const sens = sensitivityRef.current
        const base = {
          x:     (rawCoP.x - copOffsetRef.current.x) * sens,
          y:     (rawCoP.y - copOffsetRef.current.y) * sens,
          total: rawCoP.total,
        }

        // 左右方向の3点自動補正（center / scale）を適用
        const { center, scale } = horizontalCalibRef.current
        const calibrated = {
          x:     (base.x - center) * scale,
          y:     base.y,
          total: base.total,
        }
        copRef.current = calibrated
        setSensors(raw)
        setCoP(calibrated)
      })

      await device.sendReport(0x15, new Uint8Array([0x00]))
      await device.sendReport(0x12, new Uint8Array([0x04, 0x32]))

      return true
    } catch (e) {
      console.error('WiiBoard:', e)
      return false
    }
  }, [])

  const disconnect = useCallback(async () => {
    const device = deviceRef.current
    if (!device) return
    if (device.opened) await device.close()
    deviceRef.current = null
    setConnected(false)
  }, [])

  /** 現在の立ち位置を原点に補正する */
  const calibrate = useCallback(() => {
    const raw = rawSensorsRef.current
    const sc  = sensorScaleRef.current

    // 新しいベースラインを設定（delta=0となるため s[key] = baseline * scale）
    sensorBaselineRef.current = { ...raw }

    // 新ベースライン時のCoPをオフセットとして保存
    const s = {
      topLeft:     raw.topLeft     * sc.topLeft,
      topRight:    raw.topRight    * sc.topRight,
      bottomLeft:  raw.bottomLeft  * sc.bottomLeft,
      bottomRight: raw.bottomRight * sc.bottomRight,
    }
    copOffsetRef.current = computeCoP(s)

    const zeroCop = { x: 0, y: 0, total: copRef.current.total }
    copRef.current = zeroCop
    setCoP(zeroCop)
  }, [])

  /** グローバル感度倍率を変更する */
  const setSensitivity = useCallback((v) => {
    sensitivityRef.current = v
    setSensState(v)
  }, [])

  /** センサー個別倍率を変更する */
  const setSensorScale = useCallback((key, v) => {
    sensorScaleRef.current = { ...sensorScaleRef.current, [key]: v }
    setSensorScaleState(prev => ({ ...prev, [key]: v }))
  }, [])

  /** センサー個別増加率を変更する（deltaをこの倍率で増幅） */
  const setSensorRate = useCallback((key, v) => {
    sensorRateRef.current = { ...sensorRateRef.current, [key]: v }
    setSensorRateState(prev => ({ ...prev, [key]: v }))
  }, [])

  /** 左右方向の自動補正をリセット（単位スケール・オフセット0に戻す） */
  const resetHorizontalCalibration = useCallback(() => {
    horizontalCalibRef.current = { center: 0, scale: 1 }
  }, [])

  /**
   * 左右方向の3点（中央・最左・最右）から線形変換を決定する
   * centerX: 中央に立ったときの現在の cop.x
   * leftX:   左にめいっぱい寄ったときの cop.x
   * rightX:  右にめいっぱい寄ったときの cop.x
   * これらは resetHorizontalCalibration() 呼び出し後の値を使う想定
   */
  const applyHorizontalCalibration = useCallback((centerX, leftX, rightX) => {
    if (!Number.isFinite(centerX) || !Number.isFinite(leftX) || !Number.isFinite(rightX)) {
      return
    }

    const dl = Math.abs(centerX - leftX)
    const dr = Math.abs(rightX - centerX)
    const span = Math.max(dl, dr)
    if (span <= 1e-6) {
      // ほとんど動いていない場合は無視
      horizontalCalibRef.current = { center: 0, scale: 1 }
      return
    }

    // 中央を 0、左右の大きい方がおおよそ ±1 になるようにスケール
    const scale = 1 / span
    horizontalCalibRef.current = { center: centerX, scale }
  }, [])

  return {
    connected, sensors, cop, copRef, connect, disconnect,
    calibrate, sensitivity, setSensitivity,
    sensorScale, setSensorScale,
    sensorRate,  setSensorRate,
    resetHorizontalCalibration,
    applyHorizontalCalibration,
  }
}
