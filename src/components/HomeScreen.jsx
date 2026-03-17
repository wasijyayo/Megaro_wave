import { useState, useEffect, useRef, useMemo, useContext } from 'react'
import { useWifiStats } from '../hooks/useWifiStats.js'
import { getWaveParams } from '../utils/waveParams.js'
import { getTopScores, logout } from '../firebase.js'
import WifiSelectModal from './WifiSelectModal.jsx'
import { UserContext } from '../contexts/UserContext.js'

// ── 雨の密度設定 ─────────────────────────────────────────
const RAIN_CONFIG = {
  '穏やか':           { count: 22,  dur: 1.5, h: 14, op: 0.30 },
  '普通':             { count: 60,  dur: 1.1, h: 18, op: 0.42 },
  '荒れ':             { count: 115, dur: 0.8, h: 23, op: 0.55 },
  '嵐':               { count: 190, dur: 0.55, h: 28, op: 0.68 },
}

// ── 雨 ───────────────────────────────────────────────────
function Rain({ label }) {
  const cfg = RAIN_CONFIG[label]
  const drops = useMemo(() => {
    if (!cfg) return []
    return Array.from({ length: cfg.count }, () => ({
      left: Math.random() * 100,
      delay: -(Math.random() * 3).toFixed(2),
      dur:  (cfg.dur * (0.6 + Math.random() * 0.8)).toFixed(2),
    }))
  }, [cfg?.count]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!cfg) return null
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 5 }}>
      {drops.map((d, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${d.left}%`,
          top: 0,
          width: '1.5px',
          height: `${cfg.h}px`,
          background: `rgba(160, 210, 255, ${cfg.op})`,
          borderRadius: '1px',
          animation: `rainFall ${d.dur}s linear ${d.delay}s infinite`,
        }} />
      ))}
    </div>
  )
}

// ── 落雷フック ───────────────────────────────────────────
function useLightning(isStorm) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!isStorm) { setShow(false); return }
    let alive = true
    const loop = async () => {
      while (alive) {
        await new Promise(r => setTimeout(r, 3000 + Math.random() * 7000))
        if (!alive) break
        setShow(true)
        await new Promise(r => setTimeout(r, 220))
        if (!alive) break
        setShow(false)
      }
    }
    loop()
    return () => { alive = false }
  }, [isStorm])
  return show
}

// ── 落雷 SVG ─────────────────────────────────────────────
function Lightning() {
  const left = 30 + Math.random() * 40
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 15 }}>
      {/* 画面フラッシュ */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(255, 255, 180, 0.12)',
        animation: 'lightningFlash 0.22s ease-out forwards',
      }} />
      {/* 雷ボルト */}
      <svg width="70" height="150" style={{
        position: 'absolute',
        left: `${left}%`,
        top: '8%',
        filter: 'drop-shadow(0 0 8px #ffe000) drop-shadow(0 0 16px #ffcc00)',
        animation: 'lightningFlash 0.22s ease-out forwards',
      }}>
        <polygon
          points="42,4 22,72 38,72 18,146 62,58 44,58"
          fill="#ffe830"
          stroke="#fff8a0"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

// ── 画面下部の波（Wii Board傾き連動）────────────────────
function BottomWave({ params, copRef }) {
  const pathRef = useRef(null)
  const phaseRef = useRef(0)

  useEffect(() => {
    const speed = params.speed
    const amplitude = params.amplitude
    let raf
    const draw = () => {
      phaseRef.current += speed * 0.012
      const tilt = (copRef.current?.x ?? 0) * 1.8
      const W = 1000, H = 80
      const amp = Math.max(5, Math.min(amplitude * 11, 32))

      let d = ''
      for (let i = 0; i <= 80; i++) {
        const x = (i / 80) * W
        const y = H * 0.48 + amp * Math.sin((i / 80) * 2.5 * Math.PI * 2 + phaseRef.current + tilt)
        d += i === 0
          ? `M${x.toFixed(1)},${y.toFixed(1)}`
          : ` L${x.toFixed(1)},${y.toFixed(1)}`
      }
      d += ` L${W},${H} L0,${H} Z`

      if (pathRef.current) pathRef.current.setAttribute('d', d)
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [params.speed, params.amplitude, copRef])

  const color = params.color?.surface ?? '#1a9eba'
  return (
    <div style={{ width: '100%', height: 72, flexShrink: 0 }}>
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <path ref={pathRef} fill={color} opacity="0.88" />
      </svg>
    </div>
  )
}

// ── Wii Board 補正ポップアップ ───────────────────────────
function CalibPopup({
  sensors,
  cop,
  onCalibrate,
  sensitivity,
  onSensitivity,
  sensorScale,
  onSensorScale,
  sensorRate,
  onSensorRate,
  onAutoStart,
  onAutoApply,
  onClose,
}) {
  const [calibrated, setCalibrated] = useState(false)

  // 自動補正（中央→左→右）のステップ状態
  const [autoStep, setAutoStep] = useState('idle') // idle | center | left | right | done
  const [autoCenter, setAutoCenter] = useState(null)
  const [autoLeft,   setAutoLeft]   = useState(null)
  const [autoRight,  setAutoRight]  = useState(null)

  const handleCalib = () => {
    onCalibrate()
    setCalibrated(true)
    setTimeout(() => setCalibrated(false), 1500)
  }

  // 自動補正用のボタンハンドラ（1つのボタンでステップを進めていく）
  const handleAutoButton = () => {
    if (autoStep === 'idle' || autoStep === 'done') {
      // 新しく自動補正を開始：内部スケールをリセットし、中央から測定開始
      onAutoStart?.()
      setAutoCenter(null)
      setAutoLeft(null)
      setAutoRight(null)
      setAutoStep('center')
      return
    }

    if (autoStep === 'center') {
      setAutoCenter(cop.x)
      setAutoStep('left')
      return
    }

    if (autoStep === 'left') {
      setAutoLeft(cop.x)
      setAutoStep('right')
      return
    }

    if (autoStep === 'right') {
      const centerX = autoCenter ?? cop.x
      const leftX   = autoLeft   ?? cop.x
      const rightX  = cop.x
      onAutoApply?.(centerX, leftX, rightX)
      setAutoRight(rightX)
      setAutoStep('done')
    }
  }

  const autoLabel =
    autoStep === 'idle' ? '自動補正開始（中央→左→右）' :
    autoStep === 'center' ? 'ステップ1: 中央で「今の位置を記録」' :
    autoStep === 'left' ? 'ステップ2: 左いっぱいで「今の位置を記録」' :
    autoStep === 'right' ? 'ステップ3: 右いっぱいで「今の位置を記録」' :
    'もう一度自動補正をやり直す'

  const total = sensors.topLeft + sensors.topRight + sensors.bottomLeft + sensors.bottomRight

  return (
    <div style={cp.overlay} onClick={onClose}>
      <div style={cp.modal} onClick={e => e.stopPropagation()}>

        <div style={cp.header}>
          <span style={cp.title}>wii bord 補正</span>
          <button style={cp.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* センサー値 + 個別倍率（ボード形状に配置） */}
        <div style={cp.boardWrap}>
          <div style={cp.boardLabel}>センサー値 / 個別倍率（生カウント）</div>
          <div style={cp.boardGrid}>
            {[
              { key: 'topLeft',     label: 'Top Left'     },
              { key: 'topRight',    label: 'Top Right'    },
              { key: 'bottomLeft',  label: 'Bottom Left'  },
              { key: 'bottomRight', label: 'Bottom Right' },
            ].map(({ key, label }) => (
              <div key={key} style={cp.sensorCell}>
                <div style={cp.sensorLabel}>{label}</div>
                <div style={cp.sensorVal}>{Math.round(sensors[key])}</div>
                {/* 倍率スライダー（黄） */}
                <div style={cp.sensorScaleRow}>
                  <input
                    type="range" min="0.5" max="3.0" step="0.05"
                    value={sensorScale[key]}
                    onChange={e => onSensorScale(key, parseFloat(e.target.value))}
                    style={cp.sliderSmall}
                  />
                  <span style={cp.sensorScaleVal}>x{sensorScale[key].toFixed(2)}</span>
                </div>
                {/* 増加率スライダー（青）: delta × rate で増幅 */}
                <div style={cp.sensorScaleRow}>
                  <input
                    type="range" min="0.1" max="5.0" step="0.05"
                    value={sensorRate[key]}
                    onChange={e => onSensorRate(key, parseFloat(e.target.value))}
                    style={cp.sliderRate}
                  />
                  <span style={cp.sensorRateVal}>×{sensorRate[key].toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={cp.totalRow}>
            合計: <span style={cp.totalVal}>{Math.round(total)}</span>
          </div>
        </div>

        {/* 重心 (CoP) */}
        <div style={cp.copWrap}>
          <div style={cp.boardLabel}>重心 (CoP)</div>
          <div style={cp.copGrid}>
            <div style={cp.copItem}>
              <span style={cp.copLabel}>X（左右）</span>
              <span style={{ ...cp.copVal, color: Math.abs(cop.x) > 0.3 ? '#ffb74d' : '#4fc3f7' }}>
                {cop.x.toFixed(3)}
              </span>
            </div>
            <div style={cp.copItem}>
              <span style={cp.copLabel}>Y（前後）</span>
              <span style={{ ...cp.copVal, color: Math.abs(cop.y) > 0.3 ? '#ffb74d' : '#4fc3f7' }}>
                {cop.y.toFixed(3)}
              </span>
            </div>
          </div>
          {/* 重心インジケーター */}
          <div style={cp.indicator}>
            <div style={cp.indicatorInner}>
              <div style={cp.crossH} />
              <div style={cp.crossV} />
              <div style={{
                ...cp.dot,
                left: `calc(50% + ${cop.x * 40}%)`,
                top:  `calc(50% - ${cop.y * 40}%)`,
              }} />
            </div>
          </div>
        </div>

        {/* グローバル感度スライダー */}
        <div style={cp.sensWrap}>
          <div style={cp.boardLabel}>グローバル感度倍率</div>
          <div style={cp.sensRow}>
            <span style={cp.sensMin}>x1.0</span>
            <input
              type="range" min="1.0" max="5.0" step="0.1"
              value={sensitivity}
              onChange={e => onSensitivity(parseFloat(e.target.value))}
              style={cp.slider}
            />
            <span style={cp.sensMax}>x5.0</span>
          </div>
          <div style={cp.sensVal}>
            現在の感度:&ensp;
            <span style={{ color: '#4fc3f7', fontWeight: 700 }}>x{sensitivity.toFixed(1)}</span>
          </div>
        </div>

        <button
          style={{ ...cp.calibBtn, background: calibrated ? '#1565c0' : '#1a4fc4' }}
          onClick={handleCalib}
        >
          {calibrated ? '補正完了 ✓' : '現在の位置を原点に補正'}
        </button>

        <div style={cp.autoWrap}>
          <div style={cp.boardLabel}>自動左右補正（中央 → 左 → 右）</div>
          <div style={cp.autoStatus}>{autoLabel}</div>
          <button
            style={{ ...cp.calibBtn, background: '#388e3c' }}
            onClick={handleAutoButton}
            disabled={total === 0}
          >
            {autoStep === 'idle' || autoStep === 'done' ? '自動補正を開始' : '今の位置を記録'}
          </button>
        </div>

      </div>
    </div>
  )
}

const cp = {
  overlay: {
    position: 'fixed', inset: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 200,
  },
  modal: {
    background: '#0e1f3d', border: '1px solid #1e3a6a',
    borderRadius: 12, width: 420,
    display: 'flex', flexDirection: 'column', gap: 16,
    padding: '20px 24px',
    boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  title:    { fontSize: 16, fontWeight: 800, color: '#fff' },
  closeBtn: {
    background: 'none', border: 'none', color: '#666',
    fontSize: 16, cursor: 'pointer', padding: '2px 6px',
  },

  boardWrap:  { display: 'flex', flexDirection: 'column', gap: 8 },
  boardLabel: { fontSize: 10, color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em' },
  boardGrid:  { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 },
  sensorCell: {
    background: '#071428', border: '1px solid #1e3a6a',
    borderRadius: 8, padding: '10px 14px',
    display: 'flex', flexDirection: 'column', gap: 4,
  },
  sensorLabel: { fontSize: 10, color: '#555' },
  sensorVal:   { fontSize: 22, fontWeight: 700, color: '#fff', fontVariantNumeric: 'tabular-nums' },
  totalRow:    { fontSize: 12, color: '#555', textAlign: 'right' },
  totalVal:    { color: '#aaa', fontWeight: 700 },

  copWrap: { display: 'flex', flexDirection: 'column', gap: 8 },
  copGrid: { display: 'flex', gap: 12 },
  copItem: {
    flex: 1, background: '#071428', border: '1px solid #1e3a6a',
    borderRadius: 8, padding: '8px 12px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  copLabel: { fontSize: 11, color: '#555' },
  copVal:   { fontSize: 18, fontWeight: 700, fontVariantNumeric: 'tabular-nums' },

  indicator: {
    background: '#071428', border: '1px solid #1e3a6a',
    borderRadius: 8, padding: 8,
    display: 'flex', justifyContent: 'center',
  },
  indicatorInner: {
    position: 'relative', width: 120, height: 80,
    background: '#0a1828', borderRadius: 6,
  },
  crossH: {
    position: 'absolute', left: 0, right: 0, top: '50%',
    height: 1, background: '#1e3a6a',
  },
  crossV: {
    position: 'absolute', top: 0, bottom: 0, left: '50%',
    width: 1, background: '#1e3a6a',
  },
  dot: {
    position: 'absolute',
    width: 10, height: 10, borderRadius: '50%',
    background: '#4fc3f7',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 6px #4fc3f7',
    transition: 'left 0.05s, top 0.05s',
  },

  sensorScaleRow: { display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 },
  sliderSmall:    { flex: 1, accentColor: '#f5c518', cursor: 'pointer', height: 14 },
  sensorScaleVal: { fontSize: 10, color: '#f5c518', fontWeight: 700, flexShrink: 0, minWidth: 34, textAlign: 'right' },
  sliderRate:     { flex: 1, accentColor: '#4fc3f7', cursor: 'pointer', height: 14 },
  sensorRateVal:  { fontSize: 10, color: '#4fc3f7', fontWeight: 700, flexShrink: 0, minWidth: 34, textAlign: 'right' },

  sensWrap: { display: 'flex', flexDirection: 'column', gap: 8 },
  sensRow:  { display: 'flex', alignItems: 'center', gap: 10 },
  sensMin:  { fontSize: 11, color: '#555', flexShrink: 0 },
  sensMax:  { fontSize: 11, color: '#555', flexShrink: 0 },
  slider:   { flex: 1, accentColor: '#4fc3f7', cursor: 'pointer' },
  sensVal:  { fontSize: 12, color: '#888', textAlign: 'center' },

  calibBtn: {
    padding: '11px 0', borderRadius: 8, border: 'none',
    color: '#fff', fontSize: 14, fontWeight: 700,
    cursor: 'pointer', width: '100%',
  },
  autoWrap: {
    marginTop: 4,
    display: 'flex', flexDirection: 'column', gap: 4,
  },
  autoStatus: {
    fontSize: 11,
    color: '#888',
  },
}

// ── 難易度カラー ─────────────────────────────────────────
const LABEL_COLOR = {
  '湖のように穏やか': '#4fc3f7',
  '穏やか':           '#81d4fa',
  '普通':             '#a5d6a7',
  '荒れ':             '#ffb74d',
  '嵐':               '#ef5350',
}

// ── HomeScreen ───────────────────────────────────────────
export default function HomeScreen({ onStart, wiiBoard }) {
  const user = useContext(UserContext)
  const { downlink, supported } = useWifiStats()
  const {
    connected,
    sensors,
    cop,
    copRef,
    connect,
    disconnect,
    calibrate,
    sensitivity,
    setSensitivity,
    sensorScale,
    setSensorScale,
    sensorRate,
    setSensorRate,
    resetHorizontalCalibration,
    applyHorizontalCalibration,
  } = wiiBoard

  const [playerName,    setPlayerName]    = useState('')
  const [selectedWifi,  setSelectedWifi]  = useState(null)
  const [rankings,      setRankings]      = useState([])
  const [showWifiModal, setShowWifiModal] = useState(false)
  const [showCalibPopup, setShowCalibPopup] = useState(false)

  useEffect(() => {
    getTopScores(10).then(setRankings)
  }, [])

  const effectiveDownlink = selectedWifi ? selectedWifi.fast : downlink
  const params = getWaveParams(effectiveDownlink)
  const isStorm = params.label === '嵐'
  const lightningShow = useLightning(isStorm)

  const handleConnect = async () => {
    if (connected) {
      await disconnect()
    } else {
      await connect()
    }
  }

  const handleCalibrate = () => setShowCalibPopup(true)

  return (
    <div style={s.root}>

      {/* ── エフェクト層 ── */}
      <Rain label={params.label} />
      {lightningShow && <Lightning />}

      {/* ── ヘッダー ── */}
      <div style={s.header}>
        <span style={s.gameName}>ゲーム名</span>
        <div style={s.wiiStatus}>
          <span style={{ ...s.wiiDot, background: connected ? '#4caf50' : '#555' }} />
          <span style={{ color: connected ? '#4caf50' : '#666' }}>
            wii bord {connected ? '接続済み' : '未接続'}
          </span>
          {connected && (
            <span style={s.copDisplay}>
              tilt: {cop.x.toFixed(2)}
            </span>
          )}
        </div>
        <div style={s.userArea}>
          <span style={s.userName}>
            {user?.displayName ?? (user?.isAnonymous ? 'ゲスト' : user?.email ?? '')}
          </span>
          <button style={s.logoutBtn} onClick={logout}>ログアウト</button>
        </div>
      </div>

      {/* ── メインコンテンツ ── */}
      <div style={s.main}>

        {/* 遊び方 */}
        <div style={s.leftPanel}>
          <div style={s.panelLabel}>遊び方</div>
          <div style={s.howToBox}>
            <div style={s.howToRow}><b style={s.howToKey}>Wii Balance Board</b><br />波の傾きに合わせて体重移動でバランスを保つ</div>
            <div style={s.howToRow}><b style={s.howToKey}>ジャンプ</b><br />体を使ってジャンプ → ポイント獲得</div>
            <div style={s.howToRow}><b style={s.howToKey}>腕を上げる</b><br />ジャンプ中に両手を挙げるとトリック判定</div>
            <div style={s.howToRow}><b style={s.howToKey}>しゃがむ</b><br />低い波の下を潜る</div>
            <div style={{ marginTop: 8, color: '#555', fontSize: 11 }}>
              バランスを2秒以上崩すとライフ -1（3ライフ制）
            </div>
          </div>
        </div>

        {/* ステージカード */}
        <div style={s.centerPanel}>
          <div style={s.stageCard}>
            <div style={s.cardLabel}>ステージ難易度</div>
            <div style={{ ...s.stageName, color: LABEL_COLOR[params.label] ?? '#fff' }}>
              {params.label}
            </div>
            <div style={s.wifiInfoGrid}>
              <span style={s.infoKey}>wifi ssid</span>
              <span style={s.infoVal}>
                {selectedWifi ? selectedWifi.ssid : (supported ? '(現在の接続)' : '---')}
              </span>
              <span style={s.infoKey}>通信速度</span>
              <span style={s.infoVal}>{effectiveDownlink} Mbps</span>
              <span style={s.infoKey}>スコア倍率</span>
              <span style={{ ...s.infoVal, color: '#00aaff' }}>
                x{params.difficultyMultiplier.toFixed(1)}
              </span>
            </div>
          </div>

          <input
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && onStart(playerName.trim() || 'Player')}
            placeholder="ユーザー名を入力"
            style={s.input}
          />
          <button style={s.startBtn} onClick={() => onStart(playerName.trim() || 'Player')}>
            Game Start
          </button>
        </div>


        {/* ランキング */}
        <div style={s.rankPanel}>
          <div style={s.panelLabel}>ランキング</div>
          <div style={s.rankTable}>
            <div style={s.rankHeaderRow}>
              <span style={{ ...s.rankCell, flex: 0.6 }}>順位</span>
              <span style={{ ...s.rankCell, flex: 2 }}>name</span>
              <span style={s.rankCell}>score</span>
            </div>
            {rankings.length === 0 ? (
              <div style={s.rankEmpty}>データなし</div>
            ) : (
              rankings.map((r, i) => {
                const c = i === 0 ? '#ffd700' : i === 1 ? '#c0c0c0' : i === 2 ? '#cd7f32' : '#aaa'
                return (
                  <div key={r.id} style={s.rankRow}>
                    <span style={{ ...s.rankCell, flex: 0.6, color: c, fontWeight: 700 }}>{i + 1}位</span>
                    <span style={{ ...s.rankCell, flex: 2, color: '#ccc' }} title={r.id}>
                      {r.id.length > 10 ? r.id.slice(0, 10) + '…' : r.id}
                    </span>
                    <span style={{ ...s.rankCell, color: '#fff', fontWeight: 700 }}>{r.score}</span>
                  </div>
                )
              })
            )}
          </div>
        </div>

      </div>

      {/* ── 下部波（Wii Board傾き連動） ── */}
      <BottomWave params={params} copRef={copRef} />

      {/* ── ボトムナビ ── */}
      <div style={s.bottomNav}>
        <button style={s.navBtn} onClick={() => {}}>
          wifi取得
        </button>
        <button style={s.navBtn} onClick={() => setShowWifiModal(true)}>
          wifi選択
        </button>
        <button
          style={{ ...s.navBtn, background: connected ? '#2e7d32' : '#5b40c9' }}
          onClick={handleConnect}
        >
          wii bord {connected ? '切断' : '接続'}
        </button>
        <button
          style={{ ...s.navBtn, background: '#5b40c9' }}
          onClick={handleCalibrate}
          disabled={!connected}
        >
          wii bord補正
        </button>
      </div>

      {/* WiFi選択モーダル */}
      {showWifiModal && (
        <WifiSelectModal
          onSelect={setSelectedWifi}
          onClose={() => setShowWifiModal(false)}
        />
      )}

      {/* wii bord補正ポップアップ */}
      {showCalibPopup && (
        <CalibPopup
          sensors={sensors}
          cop={cop}
          onCalibrate={calibrate}
          sensitivity={sensitivity}
          onSensitivity={setSensitivity}
          sensorScale={sensorScale}
          onSensorScale={setSensorScale}
          sensorRate={sensorRate}
          onSensorRate={setSensorRate}
          onAutoStart={resetHorizontalCalibration}
          onAutoApply={applyHorizontalCalibration}
          onClose={() => setShowCalibPopup(false)}
        />
      )}

    </div>
  )
}

const s = {
  root: {
    width: '100vw', height: '100vh',
    display: 'flex', flexDirection: 'column',
    background: 'linear-gradient(180deg, #071428 0%, #040c1a 100%)',
    color: '#fff', fontFamily: 'system-ui, sans-serif',
    overflow: 'hidden', position: 'relative',
  },

  // ヘッダー
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '8px 24px',
    borderBottom: '1px solid #1e3a6a',
    flexShrink: 0,
  },
  gameName:   { fontSize: 22, fontWeight: 900, letterSpacing: '0.05em' },
  wiiStatus:  { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 },
  wiiDot:     { width: 8, height: 8, borderRadius: '50%', display: 'inline-block', flexShrink: 0 },
  copDisplay: { fontSize: 11, color: '#4fc3f7', fontFamily: 'monospace', marginLeft: 4 },
  userArea:   { display: 'flex', alignItems: 'center', gap: 10 },
  userName:   { fontSize: 12, color: '#888' },
  logoutBtn:  {
    background: 'none', border: '1px solid #334',
    borderRadius: 6, padding: '4px 10px',
    color: '#666', fontSize: 12, cursor: 'pointer',
  },

  // メイン
  main: {
    flex: 1, display: 'flex', flexDirection: 'row',
    padding: '12px 16px', gap: '14px',
    overflow: 'hidden', minHeight: 0,
  },

  // 遊び方
  leftPanel: {
    width: 175, flexShrink: 0,
    display: 'flex', flexDirection: 'column', gap: 6,
  },
  panelLabel: {
    fontSize: 10, color: '#555', letterSpacing: '0.12em',
    textTransform: 'uppercase', marginBottom: 4,
  },
  howToBox: {
    flex: 1,
    border: '1px solid #1e3a6a', borderRadius: 8,
    padding: '10px 12px', fontSize: 11, color: '#888',
    lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 8,
    overflow: 'auto',
  },
  howToRow: {},
  howToKey: { color: '#7aadff', fontWeight: 700 },

  // ステージカード
  centerPanel: {
    flex: 1,
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    gap: 14,
  },
  stageCard: {
    background: '#0e1f3d', border: '1px solid #1e3a6a',
    borderRadius: 12, padding: '18px 28px',
    width: '100%', maxWidth: 320, textAlign: 'center',
  },
  cardLabel: {
    fontSize: 10, color: '#555', letterSpacing: '0.1em',
    textTransform: 'uppercase', marginBottom: 6,
  },
  stageName:     { fontSize: 22, fontWeight: 800, marginBottom: 14 },
  wifiInfoGrid:  { display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 14px', textAlign: 'left' },
  infoKey:       { fontSize: 12, color: '#555' },
  infoVal:       { fontSize: 12, color: '#fff', fontWeight: 600 },
  input: {
    width: '100%', maxWidth: 280,
    padding: '9px 13px', borderRadius: 8,
    border: '1px solid #334', background: '#0e1f3d',
    color: '#fff', fontSize: 14, outline: 'none',
  },
  startBtn: {
    padding: '11px 0', borderRadius: 8, border: 'none',
    background: '#1a4fc4', color: '#fff', fontSize: 15, fontWeight: 700,
    cursor: 'pointer', boxShadow: '0 0 18px rgba(26,79,196,0.5)',
    width: '100%', maxWidth: 280,
  },

  // ランキング
  rankPanel: {
    width: 215, flexShrink: 0,
    display: 'flex', flexDirection: 'column', gap: 6,
  },
  rankTable: {
    flex: 1, border: '1px solid #1e3a6a',
    borderRadius: 8, overflow: 'hidden', background: '#080f1e',
  },
  rankHeaderRow: {
    display: 'flex', padding: '5px 10px',
    borderBottom: '1px solid #1e3a6a', background: '#0e1f3d',
  },
  rankRow:  { display: 'flex', padding: '5px 10px', borderBottom: '1px solid #0e1f3d' },
  rankCell: { flex: 1, fontSize: 11, color: '#444', fontWeight: 600 },
  rankEmpty:{ padding: 14, textAlign: 'center', color: '#444', fontSize: 11 },

  // ボトムナビ
  bottomNav: {
    display: 'flex', flexShrink: 0,
    borderTop: '1px solid #1e3a6a', background: '#040c1a',
  },
  navBtn: {
    flex: 1, padding: '11px 0',
    background: '#5b40c9', border: 'none',
    color: '#fff', fontSize: 11, fontWeight: 600,
    cursor: 'pointer', margin: '3px 2px', borderRadius: 4,
  },
}
