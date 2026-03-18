import { useState, useEffect, useContext } from 'react'
import { getWifiList } from '../firebase.js'
import { getWaveParams } from '../utils/waveParams.js'
import { ssidToStrokeTotal } from '../utils/strokeCount.js'
import { UserContext } from '../contexts/UserContext.js'

const DIFFICULTY_OPTIONS = ['すべて', '湖のように穏やか', '穏やか', '普通', '荒れ', '嵐']

const LABEL_COLOR = {
  '湖のように穏やか': '#00e5ff',
  '穏やか':           '#40c4ff',
  '普通':             '#69f0ae',
  '荒れ':             '#ffab40',
  '嵐':               '#ff5252',
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
          <span style={s.title}>WIFI NETWORKS DETECTED</span>
          <div style={s.headerRight}>
            {/* 難易度フィルター */}
            <div style={{ position: 'relative' }}>
              <button 
                style={s.filterBtn} 
                onClick={() => setShowFilter(v => !v)}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0, 255, 255, 0.2)'
                  e.currentTarget.style.boxShadow = '0 0 8px rgba(0, 255, 255, 0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0, 255, 255, 0.05)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                LEVEL {filter !== 'すべて' ? `(${filter})` : ''} ▾
              </button>
              {showFilter && (
                <div style={s.dropdown}>
                  {DIFFICULTY_OPTIONS.map(opt => (
                    <div
                      key={opt}
                      style={{ ...s.dropdownItem, ...(filter === opt ? s.dropdownItemActive : {}) }}
                      onClick={() => { setFilter(opt); setShowFilter(false) }}
                      onMouseEnter={e => {
                        if (filter !== opt) e.currentTarget.style.background = 'rgba(0, 255, 255, 0.15)'
                      }}
                      onMouseLeave={e => {
                        if (filter !== opt) e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button 
              style={s.closeBtn} 
              onClick={onClose}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255, 0, 43, 0.2)'
                e.currentTarget.style.color = '#ff1744'
                e.currentTarget.style.borderColor = '#ff1744'
                e.currentTarget.style.boxShadow = '0 0 8px rgba(255, 0, 43, 0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(0, 255, 255, 0.05)'
                e.currentTarget.style.color = '#00ffff'
                e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.4)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >✕</button>
          </div>
        </div>

        {/* テーブル */}
        <div style={s.tableWrap}>
          {/* カラム見出し */}
          <div style={s.colRow}>
            <span style={{ ...s.colCell, flex: 2 }}>SSID</span>
            <span style={s.colCell}>DIFFICULTY</span>
            <span style={s.colCell}>SPEED</span>
            <span style={s.colCell}>MULTIPLIER</span>
            <span style={s.colCell}>WAVE PATTERN</span>
          </div>

          {loading && (
            <div style={s.empty}>SCANNING NETWORKS...</div>
          )}
          {!loading && filtered.length === 0 && (
            <div style={s.empty}>
              {wifiList.length === 0
                ? 'NO SAVED NETWORKS FOUND IN FIREBASE'
                : 'NO NETWORKS MATCH THE CURRENT FILTER'}
            </div>
          )}
          {!loading && filtered.map(wifi => {
            const params = getWaveParams({ downlink: wifi.fast, strength: wifi.fast, ssid: wifi.ssid })
            const labelColor = LABEL_COLOR[params.label] ?? '#00ffff'
            return (
              <div
                key={wifi.ssid}
                style={s.row}
                onClick={async () => {
                  const strokeTotal = await ssidToStrokeTotal(wifi.ssid)
                  onSelect({ ...wifi, strokeTotal })
                  onClose()
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0, 255, 255, 0.15)'
                  e.currentTarget.style.boxShadow = 'inset 0 0 15px rgba(0, 255, 255, 0.2)'
                  e.currentTarget.style.borderColor = '#00ffff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.2)'
                }}
              >
                <span style={{ ...s.cell, flex: 2, fontWeight: 700, color: '#fff', textShadow: '0 0 4px rgba(255,255,255,0.5)' }}>
                  {wifi.ssid}
                </span>
                <span style={{ ...s.cell, color: labelColor, fontWeight: 700, textShadow: `0 0 8px ${labelColor}` }}>
                  {params.label}
                </span>
                <span style={{ ...s.cellNum, color: '#e0e0e0' }}>
                  {wifi.fast} Mbps
                </span>
                <span style={{ ...s.cellNum, color: '#00ffff', fontWeight: 700, textShadow: '0 0 5px rgba(0, 255, 255, 0.8)' }}>
                  x{params.difficultyMultiplier.toFixed(1)}倍
                </span>
                <span style={{ ...s.cellNum, color: '#888' }}>
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
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: 'rgba(6, 17, 33, 0.85)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(0, 255, 255, 0.4)',
    borderRadius: 4,
    width: '70%', maxWidth: 860, minWidth: 500,
    maxHeight: '80vh',
    display: 'flex', flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 0 30px rgba(0, 255, 255, 0.15), inset 0 0 20px rgba(0, 255, 255, 0.05)',
    color: '#fff',
  },
  header: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '16px 20px',
    borderBottom: '1px solid rgba(0, 255, 255, 0.5)',
    background: 'linear-gradient(90deg, rgba(0, 255, 255, 0.1) 0%, rgba(6, 17, 33, 0) 100%)',
  },
  title: { 
    fontSize: 20, fontWeight: 900, color: '#00ffff',
    letterSpacing: '0.1em',
    textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4)'
  },
  headerRight: { display: 'flex', alignItems: 'center', gap: 12 },
  filterBtn: {
    padding: '6px 14px', borderRadius: 4,
    border: '1px solid rgba(0, 255, 255, 0.4)', background: 'rgba(0, 255, 255, 0.05)',
    cursor: 'pointer', fontSize: 12, color: '#00ffff', fontWeight: 600,
    letterSpacing: '0.05em', transition: 'all 0.2s',
  },
  dropdown: {
    position: 'absolute', right: 0, top: 40, zIndex: 10,
    background: 'rgba(6, 17, 33, 0.95)', border: '1px solid #00ffff',
    borderRadius: 4, minWidth: 160,
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
    backdropFilter: 'blur(4px)',
  },
  dropdownItem: {
    padding: '10px 14px', fontSize: 13, color: '#00ffff', cursor: 'pointer',
    transition: 'background 0.2s', borderBottom: '1px solid rgba(0, 255, 255, 0.1)'
  },
  dropdownItemActive: { 
    background: 'rgba(0, 255, 255, 0.25)', 
    fontWeight: 700,
    textShadow: '0 0 8px rgba(0, 255, 255, 0.8)',
  },
  closeBtn: {
    padding: '4px 10px', borderRadius: 4,
    border: '1px solid rgba(0, 255, 255, 0.4)', background: 'rgba(0, 255, 255, 0.05)',
    cursor: 'pointer', fontSize: 14, color: '#00ffff', transition: 'all 0.2s',
  },
  tableWrap: {
    flex: 1, overflowY: 'auto',
    padding: '0 0 10px 0',
  },
  colRow: {
    display: 'flex', padding: '10px 20px',
    borderBottom: '1px solid rgba(0, 255, 255, 0.4)',
    background: 'rgba(0, 255, 255, 0.08)',
  },
  colCell: {
    flex: 1, fontSize: 11, fontWeight: 800,
    color: '#00ffff', letterSpacing: '0.1em', textTransform: 'uppercase',
    textShadow: '0 0 5px rgba(0, 255, 255, 0.5)'
  },
  row: {
    display: 'flex', padding: '14px 20px',
    borderBottom: '1px solid rgba(0, 255, 255, 0.2)',
    cursor: 'pointer', transition: 'all 0.15s ease',
    alignItems: 'center',
  },
  cell: { 
    flex: 1, fontSize: 14, letterSpacing: '0.03em'
  },
  cellNum: {
    flex: 1, fontSize: 14, 
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    fontVariantNumeric: 'tabular-nums', letterSpacing: '0.05em'
  },
  empty: { 
    padding: '40px 20px', color: '#00ffff', fontSize: 14, 
    textAlign: 'center', letterSpacing: '0.1em',
    textShadow: '0 0 8px rgba(0, 255, 255, 0.5)'
  },
}