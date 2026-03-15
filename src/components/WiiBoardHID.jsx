import { useState, useRef, useCallback } from 'react'

// Wii Balance Board / Wii Remote
// Nintendo: vendorId=0x057e, productId=0x0306
const WII_VENDOR_ID = 0x057e
const WII_PRODUCT_ID = 0x0306

// Wii Remote output report: set reporting mode
// 0x12 = Data Reporting Mode, 0x04 = continuous, 0x32 = Core + Extension
const SET_REPORT_MODE = new Uint8Array([0x12, 0x04, 0x32])

// Wii Remote output report: request status
const REQUEST_STATUS = new Uint8Array([0x15, 0x00])

function parseBalanceBoardData(data) {
  // Report 0x32: Core Buttons (2 bytes) + Extension (19 bytes)
  // Balance board extension format (bytes 2-11 of report):
  //   Top-Right    (2 bytes, big-endian) @ offset 0
  //   Bottom-Right (2 bytes, big-endian) @ offset 2
  //   Top-Left     (2 bytes, big-endian) @ offset 4
  //   Bottom-Left  (2 bytes, big-endian) @ offset 6
  //   Temperature  (1 byte)             @ offset 8
  //   Battery      (2 bytes, big-endian) @ offset 9 (unofficial)
  if (data.byteLength < 11) return null
  return {
    topRight: data.getUint16(0, false),
    bottomRight: data.getUint16(2, false),
    topLeft: data.getUint16(4, false),
    bottomLeft: data.getUint16(6, false),
  }
}

export default function WiiBoardHID() {
  const [status, setStatus] = useState('未接続')
  const [log, setLog] = useState([])
  const [sensors, setSensors] = useState(null)
  const [rawReports, setRawReports] = useState([])
  const deviceRef = useRef(null)

  const addLog = useCallback((msg) => {
    setLog((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 50))
  }, [])

  const isSupported = 'hid' in navigator

  async function connect() {
    if (!isSupported) return
    try {
      setStatus('デバイス選択中...')
      addLog('requestDevice() を呼び出し中')

      const devices = await navigator.hid.requestDevice({
        filters: [{ vendorId: WII_VENDOR_ID, productId: WII_PRODUCT_ID }],
      })

      if (devices.length === 0) {
        setStatus('未接続')
        addLog('デバイスが選択されませんでした')
        return
      }

      const device = devices[0]
      deviceRef.current = device
      addLog(`デバイス検出: ${device.productName} (vendor=0x${device.vendorId.toString(16)}, product=0x${device.productId.toString(16)})`)

      if (!device.opened) {
        await device.open()
      }
      addLog('デバイスをオープンしました')
      setStatus(`接続済み: ${device.productName}`)

      device.addEventListener('inputreport', handleInputReport)

      // Wii Remote: ステータスリクエスト送信
      await device.sendReport(0x15, new Uint8Array([0x00]))
      addLog('ステータスリクエストを送信しました (0x15)')

      // レポートモードを Extension データ付きに設定
      await device.sendReport(0x12, new Uint8Array([0x04, 0x32]))
      addLog('レポートモードを 0x32 (Extension) に設定しました')
    } catch (err) {
      setStatus('エラー')
      addLog(`エラー: ${err.message}`)
    }
  }

  async function disconnect() {
    const device = deviceRef.current
    if (!device) return
    device.removeEventListener('inputreport', handleInputReport)
    if (device.opened) {
      await device.close()
    }
    deviceRef.current = null
    setStatus('未接続')
    setSensors(null)
    addLog('切断しました')
  }

  function handleInputReport(event) {
    const { reportId, data } = event

    // 生データを16進数で表示 (最新5件)
    const bytes = Array.from(new Uint8Array(data.buffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join(' ')
    setRawReports((prev) =>
      [`[0x${reportId.toString(16).padStart(2, '0')}] ${bytes}`, ...prev].slice(0, 5)
    )

    // Report 0x32: Extension データを含むレポート
    if (reportId === 0x32) {
      // 最初の2バイトはコアボタン、そのあとが Extension
      const extView = new DataView(data.buffer, 2)
      const parsed = parseBalanceBoardData(extView)
      if (parsed) {
        setSensors(parsed)
      }
    }

    // Report 0x20: ステータスレポート (バッテリー等)
    if (reportId === 0x20) {
      const battery = data.getUint8(5)
      addLog(`ステータスレポート - バッテリー: ${battery} (0x${battery.toString(16)})`)
    }
  }

  return (
    <div style={{ maxWidth: 700, width: '100%' }}>
      <h1 style={{ marginBottom: '0.25rem' }}>Wii Balance Board</h1>
      <p style={{ color: '#aaa', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        WebHID 接続テスト
      </p>

      {!isSupported && (
        <div style={styles.warning}>
          このブラウザは WebHID API に対応していません。<br />
          Chrome / Edge (デスクトップ) をお使いください。
        </div>
      )}

      <div style={styles.card}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ ...styles.dot, background: statusColor(status) }} />
          <span style={{ fontWeight: 600 }}>{status}</span>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            style={styles.btn}
            onClick={connect}
            disabled={!isSupported || status.startsWith('接続済み')}
          >
            接続
          </button>
          <button
            style={{ ...styles.btn, background: '#555' }}
            onClick={disconnect}
            disabled={!status.startsWith('接続済み')}
          >
            切断
          </button>
        </div>
      </div>

      {sensors && (
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>センサー値 (生カウント)</h2>
          <div style={styles.sensorGrid}>
            <SensorBox label="Top Left" value={sensors.topLeft} />
            <SensorBox label="Top Right" value={sensors.topRight} />
            <SensorBox label="Bottom Left" value={sensors.bottomLeft} />
            <SensorBox label="Bottom Right" value={sensors.bottomRight} />
          </div>
          <p style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '0.75rem' }}>
            合計: {sensors.topLeft + sensors.topRight + sensors.bottomLeft + sensors.bottomRight}
          </p>
        </div>
      )}

      {rawReports.length > 0 && (
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>生 HID レポート (最新5件)</h2>
          <div style={styles.mono}>
            {rawReports.map((r, i) => (
              <div key={i} style={{ opacity: 1 - i * 0.15 }}>{r}</div>
            ))}
          </div>
        </div>
      )}

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>ログ</h2>
        <div style={{ ...styles.mono, maxHeight: 200, overflowY: 'auto' }}>
          {log.length === 0 ? <span style={{ color: '#666' }}>— ログなし —</span> : null}
          {log.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>

      <div style={{ ...styles.card, fontSize: '0.82rem', color: '#888' }}>
        <strong style={{ color: '#aaa' }}>接続手順</strong>
        <ol style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li>Wii Balance Board の電源ボタンを押してペアリングモードにする</li>
          <li>Windows の Bluetooth 設定でペアリングする</li>
          <li>上の「接続」ボタンをクリックし、デバイス選択ダイアログで Balance Board を選ぶ</li>
        </ol>
        <p style={{ marginTop: '0.5rem' }}>
          VendorID: 0x{WII_VENDOR_ID.toString(16)} / ProductID: 0x{WII_PRODUCT_ID.toString(16)}
        </p>
      </div>
    </div>
  )
}

function SensorBox({ label, value }) {
  return (
    <div style={styles.sensorBox}>
      <div style={{ color: '#aaa', fontSize: '0.8rem' }}>{label}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </div>
    </div>
  )
}

function statusColor(status) {
  if (status.startsWith('接続済み')) return '#4caf50'
  if (status === '未接続') return '#666'
  if (status === 'エラー') return '#f44336'
  return '#ff9800'
}

const styles = {
  card: {
    background: '#16213e',
    border: '1px solid #2a2a5a',
    borderRadius: 10,
    padding: '1rem 1.25rem',
    marginBottom: '1rem',
  },
  btn: {
    background: '#3f51b5',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '0.5rem 1.25rem',
    cursor: 'pointer',
    fontSize: '0.95rem',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    flexShrink: 0,
  },
  sectionTitle: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#888',
    marginBottom: '0.75rem',
  },
  sensorGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.75rem',
  },
  sensorBox: {
    background: '#0f3460',
    borderRadius: 8,
    padding: '0.75rem 1rem',
  },
  mono: {
    fontFamily: 'monospace',
    fontSize: '0.82rem',
    color: '#ccc',
    lineHeight: 1.7,
  },
  warning: {
    background: '#5c2a00',
    border: '1px solid #ff9800',
    borderRadius: 8,
    padding: '0.75rem 1rem',
    marginBottom: '1rem',
    lineHeight: 1.6,
  },
}
