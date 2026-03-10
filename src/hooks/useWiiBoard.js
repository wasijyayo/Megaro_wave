import { useState, useRef, useCallback } from 'react'

const WII_VENDOR_ID  = 0x057e
const WII_PRODUCT_ID = 0x0306

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
  const [connected, setConnected] = useState(false)
  const [sensors,   setSensors]   = useState({ topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 })
  const [cop,       setCoP]       = useState({ x: 0, y: 0, total: 0 })

  // ゲームループで直接読む用のref (state更新によるeffect再起動を避ける)
  const copRef    = useRef({ x: 0, y: 0, total: 0 })
  const deviceRef = useRef(null)

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

      device.addEventListener('inputreport', ({ reportId, data }) => {
        if (reportId !== 0x32) return
        if (data.byteLength < 10) return

        const ext = new DataView(data.buffer, 2)
        const s = {
          topRight:    ext.getUint16(0, false),
          bottomRight: ext.getUint16(2, false),
          topLeft:     ext.getUint16(4, false),
          bottomLeft:  ext.getUint16(6, false),
        }
        const newCop = computeCoP(s)
        copRef.current = newCop
        setSensors(s)
        setCoP(newCop)
      })

      // ステータス確認 → レポートモード 0x32 (Core + Extension) に設定
      await device.sendReport(0x15, new Uint8Array([0x00]))
      await device.sendReport(0x12, new Uint8Array([0x04, 0x32]))

      setConnected(true)
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

  return { connected, sensors, cop, copRef, connect, disconnect }
}
