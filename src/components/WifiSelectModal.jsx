import { useState, useEffect, useContext } from 'react'
import { getWifiList } from '../firebase.js'
import { getWaveParams } from '../utils/waveParams.js'
import { ssidToStrokeTotal } from '../utils/strokeCount.js'
import { UserContext } from '../contexts/UserContext.js'

const DIFFICULTY_OPTIONS = ['すべて', '湖のように穏やか', '穏やか', '普通', '荒れ', '嵐']

const LABEL_COLOR = {
  '湖のように穏やか': '#4fc3f7',
  '穏やか':           '#81d4fa',
  '普通':             '#a5d6a7',
  '荒れ':             '#ffb74d',
  '嵐':               '#ef5350',
}

export default function WifiSelectModal({ onSelect, onClose }) {
  const user = useContext(UserContext)
  const [wifiList,   setWifiList]   = useState([])
  const [loading,    setLoading]    = useState(true)
  const [filter,     setFilter]     = useState('すべて')
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    const userName = user?.displayName ?? user?.uid ?? 'guest'
    getWifiList(userName).then(list => {
      setWifiList(list)
      setLoading(false)
    })
  }, [])

  const filtered = filter === 'すべて'
    ? wifiList
    : wifiList.filter(w => getWaveParams({ downlink: w.fast, strength: w.fast, ssid: w.ssid }).label === filter)

  return (
    <div style={s.overlay} onClick={onClose}>
      <div style={s.modal} onClick={e => e.stopPropagation()}>

        {/* ヘッダー */}
        <div style={s.header}>
          <span style={s.title}>Wifi選択</span>
          <div style={s.headerRight}>
            {/* 難易度フィルター */}
            <div style={{ position: 'relative' }}>
              <button style={s.filterBtn} onClick={() => setShowFilter(v => !v)}>
                難易度 {filter !== 'すべて' ? `(${filter})` : ''} ▾
              </button>
              {showFilter && (
                <div style={s.dropdown}>
                  {DIFFICULTY_OPTIONS.map(opt => (
                    <div
                      key={opt}
                      style={{ ...s.dropdownItem, ...(filter === opt ? s.dropdownItemActive : {}) }}
                      onClick={() => { setFilter(opt); setShowFilter(false) }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button style={s.closeBtn} onClick={onClose}>✕</button>
          </div>
        </div>

        {/* テーブル */}
        <div style={s.tableWrap}>
          {/* カラム見出し */}
          <div style={s.colRow}>
            <span style={{ ...s.colCell, flex: 2 }}>SSID</span>
            <span style={s.colCell}>難易度</span>
            <span style={s.colCell}>通信速度</span>
            <span style={s.colCell}>得点倍率</span>
            <span style={s.colCell}>波の高さ</span>
          </div>

          {loading && (
            <div style={s.empty}>読み込み中...</div>
          )}
          {!loading && filtered.length === 0 && (
            <div style={s.empty}>
              {wifiList.length === 0
                ? 'Firebase に保存済みWiFiがありません'
                : '該当するWiFiがありません'}
            </div>
          )}
          {!loading && filtered.map(wifi => {
            const params = getWaveParams({ downlink: wifi.fast, strength: wifi.fast, ssid: wifi.ssid })
            return (
              <div
                key={wifi.ssid}
                style={s.row}
                onClick={async () => {
                  const strokeTotal = await ssidToStrokeTotal(wifi.ssid)
                  onSelect({ ...wifi, strokeTotal })
                  onClose()
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#e0e0e0'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{ ...s.cell, flex: 2, fontWeight: 600, color: '#111' }}>
                  {wifi.ssid}
                </span>
                <span style={{ ...s.cell, color: LABEL_COLOR[params.label] ?? '#333', fontWeight: 700 }}>
                  {params.label}
                </span>
                <span style={{ ...s.cell, color: '#333' }}>
                  {wifi.fast} Mbps
                </span>
                <span style={{ ...s.cell, color: '#1a4fc4', fontWeight: 700 }}>
                  x{params.difficultyMultiplier.toFixed(1)}倍
                </span>
                <span style={{ ...s.cell, color: '#555', fontSize: 11 }}>
                  [{params.heightPattern.slice(0, 4).join(', ')}{params.heightPattern.length > 4 ? ', …' : ''}]
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

const s = {
  overlay: {
    position: 'fixed', inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#d0d0d0',
    borderRadius: 8,
    width: '60%', maxWidth: 720, minWidth: 460,
    maxHeight: '80vh',
    display: 'flex', flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
  },
  header: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '16px 20px',
    borderBottom: '1px solid #bbb',
    background: '#c8c8c8',
  },
  title:     { fontSize: 18, fontWeight: 800, color: '#111' },
  headerRight: { display: 'flex', alignItems: 'center', gap: 10 },
  filterBtn: {
    padding: '6px 14px', borderRadius: 6,
    border: '1px solid #999', background: '#eee',
    cursor: 'pointer', fontSize: 12, color: '#333',
  },
  dropdown: {
    position: 'absolute', right: 0, top: 34, zIndex: 10,
    background: '#eee', border: '1px solid #bbb',
    borderRadius: 6, minWidth: 150,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  dropdownItem: {
    padding: '8px 14px', fontSize: 13, color: '#333', cursor: 'pointer',
  },
  dropdownItemActive: { background: '#d0d0d0', fontWeight: 700 },
  closeBtn: {
    padding: '4px 10px', borderRadius: 4,
    border: 'none', background: '#aaa',
    cursor: 'pointer', fontSize: 14, color: '#333',
  },
  tableWrap: {
    flex: 1, overflowY: 'auto',
    padding: '8px 0',
  },
  colRow: {
    display: 'flex', padding: '6px 20px',
    borderBottom: '1px solid #bbb',
    background: '#c0c0c0',
  },
  colCell: {
    flex: 1, fontSize: 12, fontWeight: 700,
    color: '#555', letterSpacing: '0.05em', textTransform: 'uppercase',
  },
  row: {
    display: 'flex', padding: '12px 20px',
    borderBottom: '1px solid #bbb',
    cursor: 'pointer', transition: 'background 0.1s',
    alignItems: 'center',
  },
  cell: { flex: 1, fontSize: 13 },
  empty: { padding: '24px 20px', color: '#666', fontSize: 13, textAlign: 'center' },
}
