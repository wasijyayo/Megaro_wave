import { useState, useEffect, useRef, useMemo, useContext } from 'react'
import { useWifiStats } from '../hooks/useWifiStats.js'
import { getWaveParams } from '../utils/waveParams.js'
import { getTopScores, logout } from '../firebase.js'
import WifiSelectModal from './WifiSelectModal.jsx'
import { UserContext } from '../contexts/UserContext.js'
import titleImg from '../assets/image/title.png'

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
          background: `rgba(0, 255, 255, ${cfg.op * 0.8})`, // サイバーなシアンに変更
          borderRadius: '1px',
          boxShadow: `0 0 8px rgba(0, 255, 255, 0.8)`,
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
        background: 'rgba(0, 255, 255, 0.1)',
        backdropFilter: 'brightness(1.5)',
        animation: 'lightningFlash 0.22s ease-out forwards',
      }} />
      {/* 雷ボルト */}
      <svg width="70" height="150" style={{
        position: 'absolute',
        left: `${left}%`,
        top: '8%',
        filter: 'drop-shadow(0 0 12px #00ffff) drop-shadow(0 0 24px #00ffff)',
        animation: 'lightningFlash 0.22s ease-out forwards',
      }}>
        <polygon
          points="42,4 22,72 38,72 18,146 62,58 44,58"
          fill="#d0ffff"
          stroke="#00ffff"
          strokeWidth="2"
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

  const color = params.color?.surface ?? 'rgba(0, 200, 255, 0.6)'
  return (
    <div style={{ width: '100%', height: 90, flexShrink: 0, position: 'relative' }}>
        <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 150, 255, 0.4) 100%)',
            pointerEvents: 'none'
        }} />
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 -5px 10px rgba(0,255,255,0.4))' }}>
        <path ref={pathRef} fill={color} opacity="0.8" stroke="#00ffff" strokeWidth="1" />
      </svg>
    </div>
  )
}

/* --- (中略) Wii Board 補正ポップアップはデザインのみ調整 --- */
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

  // 自動補正ステップ状態
  const [autoStep, setAutoStep] = useState('idle')
  const [autoCenter, setAutoCenter] = useState(null)
  const [autoLeft,   setAutoLeft]   = useState(null)
  const [autoRight,  setAutoRight]  = useState(null)

  const handleCalib = () => {
    onCalibrate()
    setCalibrated(true)
    setTimeout(() => setCalibrated(false), 1500)
  }

  const handleAutoButton = () => {
    if (autoStep === 'idle' || autoStep === 'done') {
      onAutoStart?.()
      setAutoCenter(null); setAutoLeft(null); setAutoRight(null)
      setAutoStep('center')
      return
    }
    if (autoStep === 'center') { setAutoCenter(cop.x); setAutoStep('left'); return }
    if (autoStep === 'left') { setAutoLeft(cop.x); setAutoStep('right'); return }
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
    autoStep === 'center' ? 'ステップ1: 中央で「記録」' :
    autoStep === 'left' ? 'ステップ2: 左いっぱいで「記録」' :
    autoStep === 'right' ? 'ステップ3: 右いっぱいで「記録」' :
    'もう一度やり直す'

  const total = sensors.topLeft + sensors.topRight + sensors.bottomLeft + sensors.bottomRight

  return (
    <div style={cp.overlay} onClick={onClose}>
      <div style={cp.modal} onClick={e => e.stopPropagation()}>
        <div style={cp.header}>
          <span style={cp.title}>SYSTEM_CALIBRATION</span>
          <button style={cp.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div style={cp.boardWrap}>
          <div style={cp.boardLabel}>SENSORS / MULTIPLIER [RAW]</div>
          <div style={cp.boardGrid}>
            {[
              { key: 'topLeft', label: 'TL' }, { key: 'topRight', label: 'TR' },
              { key: 'bottomLeft', label: 'BL' }, { key: 'bottomRight', label: 'BR' },
            ].map(({ key, label }) => (
              <div key={key} style={cp.sensorCell}>
                <div style={cp.sensorLabel}>{label}</div>
                <div style={cp.sensorVal}>{Math.round(sensors[key])}</div>
                <div style={cp.sensorScaleRow}>
                  <input type="range" min="0.5" max="3.0" step="0.05" value={sensorScale[key]} onChange={e => onSensorScale(key, parseFloat(e.target.value))} style={cp.sliderSmall} />
                  <span style={cp.sensorScaleVal}>x{sensorScale[key].toFixed(2)}</span>
                </div>
                <div style={cp.sensorScaleRow}>
                  <input type="range" min="0.1" max="5.0" step="0.05" value={sensorRate[key]} onChange={e => onSensorRate(key, parseFloat(e.target.value))} style={cp.sliderRate} />
                  <span style={cp.sensorRateVal}>×{sensorRate[key].toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={cp.totalRow}>TOTAL: <span style={cp.totalVal}>{Math.round(total)}</span></div>
        </div>

        <div style={cp.copWrap}>
          <div style={cp.boardLabel}>CENTER OF PRESSURE</div>
          <div style={cp.copGrid}>
            <div style={cp.copItem}>
              <span style={cp.copLabel}>AXIS-X</span>
              <span style={{ ...cp.copVal, color: Math.abs(cop.x) > 0.3 ? '#ff3366' : '#00ffff' }}>{cop.x.toFixed(3)}</span>
            </div>
            <div style={cp.copItem}>
              <span style={cp.copLabel}>AXIS-Y</span>
              <span style={{ ...cp.copVal, color: Math.abs(cop.y) > 0.3 ? '#ff3366' : '#00ffff' }}>{cop.y.toFixed(3)}</span>
            </div>
          </div>
          <div style={cp.indicator}>
            <div style={cp.indicatorInner}>
              <div style={cp.crossH} /><div style={cp.crossV} />
              <div style={{ ...cp.dot, left: `calc(50% + ${cop.x * 40}%)`, top: `calc(50% - ${cop.y * 40}%)` }} />
            </div>
          </div>
        </div>

        <div style={cp.sensWrap}>
          <div style={cp.boardLabel}>GLOBAL SENSITIVITY</div>
          <div style={cp.sensRow}>
            <span style={cp.sensMin}>x1.0</span>
            <input type="range" min="1.0" max="5.0" step="0.1" value={sensitivity} onChange={e => onSensitivity(parseFloat(e.target.value))} style={cp.slider} />
            <span style={cp.sensMax}>x5.0</span>
          </div>
          <div style={cp.sensVal}>CURRENT: <span style={{ color: '#00ffff', fontWeight: 700 }}>x{sensitivity.toFixed(1)}</span></div>
        </div>

        <button style={{ ...cp.calibBtn, background: calibrated ? 'rgba(0, 255, 255, 0.2)' : 'rgba(0, 150, 255, 0.2)', border: calibrated ? '1px solid #00ffff' : '1px solid #0096ff', boxShadow: calibrated ? '0 0 15px rgba(0,255,255,0.4)': 'none' }} onClick={handleCalib}>
          {calibrated ? 'CALIBRATION DONE ✓' : 'SET CURRENT AS ORIGIN'}
        </button>

        <div style={cp.autoWrap}>
          <div style={cp.boardLabel}>AUTO CALIBRATION [L/R]</div>
          <div style={cp.autoStatus}>{autoLabel}</div>
          <button style={{ ...cp.calibBtn, background: 'rgba(0, 255, 128, 0.15)', border: '1px solid #00ff80' }} onClick={handleAutoButton} disabled={total === 0}>
            {autoStep === 'idle' || autoStep === 'done' ? 'START AUTO' : 'RECORD DATAPOINT'}
          </button>
        </div>
      </div>
    </div>
  )
}

const cp = {
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,5,15,0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200 },
  modal: { background: 'rgba(4, 15, 30, 0.7)', border: '1px solid rgba(0, 255, 255, 0.3)', borderRadius: 16, width: 440, display: 'flex', flexDirection: 'column', gap: 16, padding: '24px', boxShadow: '0 0 40px rgba(0, 255, 255, 0.15), inset 0 0 20px rgba(0, 255, 255, 0.05)', backdropFilter: 'blur(16px)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 255, 255, 0.2)', paddingBottom: 8 },
  title: { fontSize: 14, fontWeight: 800, color: '#00ffff', letterSpacing: '0.15em' },
  closeBtn: { background: 'none', border: 'none', color: '#00ffff', fontSize: 18, cursor: 'pointer', opacity: 0.7 },
  boardWrap: { display: 'flex', flexDirection: 'column', gap: 8 },
  boardLabel: { fontSize: 10, color: '#00ffff', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 },
  boardGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 },
  sensorCell: { background: 'rgba(0, 20, 40, 0.6)', border: '1px solid rgba(0, 255, 255, 0.15)', borderRadius: 8, padding: '10px', display: 'flex', flexDirection: 'column', gap: 4 },
  sensorLabel: { fontSize: 10, color: '#88ccff' },
  sensorVal: { fontSize: 20, fontWeight: 700, color: '#fff', fontVariantNumeric: 'tabular-nums', textShadow: '0 0 8px rgba(0,255,255,0.5)' },
  totalRow: { fontSize: 10, color: '#00ffff', textAlign: 'right', opacity: 0.8 },
  totalVal: { color: '#fff', fontWeight: 700, fontSize: 12 },
  copWrap: { display: 'flex', flexDirection: 'column', gap: 8 },
  copGrid: { display: 'flex', gap: 12 },
  copItem: { flex: 1, background: 'rgba(0, 20, 40, 0.6)', border: '1px solid rgba(0, 255, 255, 0.15)', borderRadius: 8, padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  copLabel: { fontSize: 10, color: '#88ccff' },
  copVal: { fontSize: 16, fontWeight: 700, fontVariantNumeric: 'tabular-nums', textShadow: '0 0 5px currentColor' },
  indicator: { background: 'rgba(0, 20, 40, 0.6)', border: '1px solid rgba(0, 255, 255, 0.15)', borderRadius: 8, padding: 8, display: 'flex', justifyContent: 'center' },
  indicatorInner: { position: 'relative', width: '100%', height: 60, background: 'rgba(0, 5, 10, 0.5)', borderRadius: 4, overflow: 'hidden' },
  crossH: { position: 'absolute', left: 0, right: 0, top: '50%', height: 1, background: 'rgba(0, 255, 255, 0.3)' },
  crossV: { position: 'absolute', top: 0, bottom: 0, left: '50%', width: 1, background: 'rgba(0, 255, 255, 0.3)' },
  dot: { position: 'absolute', width: 12, height: 12, borderRadius: '50%', background: '#00ffff', transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff', transition: 'left 0.05s, top 0.05s' },
  sensorScaleRow: { display: 'flex', alignItems: 'center', gap: 4 },
  sliderSmall: { flex: 1, accentColor: '#ff00aa', cursor: 'pointer', height: 10 },
  sensorScaleVal: { fontSize: 10, color: '#ff00aa', fontWeight: 700, flexShrink: 0, minWidth: 34, textAlign: 'right' },
  sliderRate: { flex: 1, accentColor: '#00ffff', cursor: 'pointer', height: 10 },
  sensorRateVal: { fontSize: 10, color: '#00ffff', fontWeight: 700, flexShrink: 0, minWidth: 34, textAlign: 'right' },
  sensWrap: { display: 'flex', flexDirection: 'column', gap: 8 },
  sensRow: { display: 'flex', alignItems: 'center', gap: 10 },
  sensMin: { fontSize: 10, color: '#00ffff', opacity: 0.6 },
  sensMax: { fontSize: 10, color: '#00ffff', opacity: 0.6 },
  slider: { flex: 1, accentColor: '#00ffff', cursor: 'pointer' },
  sensVal: { fontSize: 10, color: '#88ccff', textAlign: 'center' },
  calibBtn: { padding: '12px 0', borderRadius: 8, color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer', width: '100%', letterSpacing: '0.1em', transition: 'all 0.2s' },
  autoWrap: { marginTop: 4, display: 'flex', flexDirection: 'column', gap: 4 },
  autoStatus: { fontSize: 9, color: '#ffcc00', textTransform: 'uppercase' },
}

// ── 難易度カラー ─────────────────────────────────────────
const LABEL_COLOR = {
  '湖のように穏やか': '#00ffff',
  '穏やか':           '#44ffaa',
  '普通':             '#ffbb00',
  '荒れ':             '#ff5500',
  '嵐':               '#ff0033',
}

// ── HomeScreen ───────────────────────────────────────────
export default function HomeScreen({ onStart, wiiBoard, onBattle }) {
  const user = useContext(UserContext)
  const { downlink, supported } = useWifiStats()
  const {
    connected, sensors, cop, copRef, connect, disconnect, calibrate,
    sensitivity, setSensitivity, sensorScale, setSensorScale, sensorRate, setSensorRate,
    resetHorizontalCalibration, applyHorizontalCalibration,
  } = wiiBoard

  const [selectedWifi,  setSelectedWifi]  = useState(null)
  const [rankings,      setRankings]      = useState([])
  const [showWifiModal, setShowWifiModal] = useState(false)
  const [showCalibPopup, setShowCalibPopup] = useState(false)

  useEffect(() => {
    getTopScores(10).then(setRankings)
  }, [])

  const effectiveDownlink = selectedWifi ? selectedWifi.fast : downlink
  const params = selectedWifi
    ? getWaveParams({ downlink: effectiveDownlink, strength: effectiveDownlink, ssid: selectedWifi.ssid })
    : getWaveParams(effectiveDownlink)
  const isStorm = params.label === '嵐'
  const lightningShow = useLightning(isStorm)

  const handleConnect = async () => { connected ? await disconnect() : await connect() }
  const handleCalibrate = () => setShowCalibPopup(true)

  const wiiStatusColor = connected ? '#00ffaa' : '#ffcc33'
  const wiiStatusText = connected ? 'SYS.ONLINE' : 'SYS.OFFLINE'

  return (
    <div style={s.root}>

      {/* ── 背景エフェクト層 ── */}
      <div style={s.cyberGrid} />
      <Rain label={params.label} />
      {lightningShow && <Lightning />}

      {/* ── ヘッダー ── */}
      <div style={s.header}>
        <div style={s.headerLeft}>
            <img src={titleImg} alt="Megaro Wave" style={s.titleImg} />
        </div>
        
        <div style={s.headerCenter}>
          <div style={{ ...s.statusWidget, borderColor: wiiStatusColor, boxShadow: `0 0 10px ${wiiStatusColor}40` }}>
            <span style={{ ...s.statusDot, background: wiiStatusColor, boxShadow: `0 0 8px ${wiiStatusColor}` }} />
            <span style={{ color: wiiStatusColor, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}>WII_BOARD: {wiiStatusText}</span>
            {connected && <span style={s.copDisplay}>AXIS: {cop.x.toFixed(2)}</span>}
          </div>
        </div>

        <div style={s.headerRight}>
          <div style={s.userBadge}>
            <span style={s.userName}>{user?.displayName ?? (user?.isAnonymous ? 'GUEST_USER' : user?.email ?? '-')}</span>
            <button style={s.logoutBtn} onClick={logout}>LOGOUT</button>
          </div>
        </div>
      </div>

      {/* ── メインコンテンツ (Glassmorphism Grid Layout) ── */}
      <div style={s.main}>

        {/* 左カラム: アシスト＆情報 */}
        <div style={s.sidePanel}>
          <div style={s.glassCard}>
            <div style={s.cardTitle}>// HOW_TO_PLAY</div>
            <div style={s.howToContent}>
              <div style={s.howToRow}><span style={s.hl}>[Wii Board]</span> 波の傾きに合わせて体重移動</div>
              <div style={s.howToRow}><span style={s.hl}>[JUMP]</span> 物理的にジャンプ → ポイント獲得</div>
              <div style={s.howToRow}><span style={s.hl}>[TRICK]</span> ジャンプ中に両手を上げる</div>
              <div style={s.howToRow}><span style={s.hl}>[DUCK]</span> 低い波の下を潜って回避</div>
              <div style={s.howToSub}>※ バランスを2秒以上崩すとライフ -1 (3ライフシステム)</div>
            </div>
          </div>
          
          <div style={{...s.glassCard, flex: 1, marginTop: '16px'}}>
            <div style={s.cardTitle}>// SYSTEM_MODULES</div>
            <div style={s.moduleList}>
               <button style={s.moduleBtn} onClick={() => {}}>SCAN_WIFI</button>
               <button style={s.moduleBtn} onClick={() => setShowWifiModal(true)}>SELECT_NETWORK</button>
               <button style={{...s.moduleBtn, color: wiiStatusColor, borderColor: wiiStatusColor}} onClick={handleConnect}>
                  {connected ? 'DISCONNECT_BOARD' : 'CONNECT_BOARD'}
               </button>
               <button style={{...s.moduleBtn, opacity: connected ? 1 : 0.5}} onClick={handleCalibrate} disabled={!connected}>
                  CALIBRATE_SENSORS
               </button>
            </div>
          </div>
        </div>

        {/* 中央カラム: メインダッシュボード */}
        <div style={s.centerPanel}>
          <div style={s.mainGlassCard}>
            <div style={s.radarBg}>
              <div style={s.radarSweep}></div>
              <div style={s.radarCircles}></div>
            </div>
            
            <div className="cyber-scroll" style={s.centerScroll}>
              <div style={s.cardTitleCenter}>// CURRENT_ENVIRONMENT</div>
              <div style={{ ...s.stageName, color: LABEL_COLOR[params.label] ?? '#00ffff', textShadow: `0 0 15px ${LABEL_COLOR[params.label] ?? '#00ffff'}` }}>
                {params.label}
              </div>

              <div style={s.statsGrid}>
                <div style={s.statBox}><div style={s.statLabel}>NETWORK</div><div style={s.statValue}>{selectedWifi ? selectedWifi.ssid : (supported ? '(CURRENT)' : 'NONE')}</div></div>
                <div style={s.statBox}><div style={s.statLabel}>DOWNLINK</div><div style={s.statValue}>{effectiveDownlink} Mbps</div></div>
                <div style={s.statBox}><div style={s.statLabel}>MULTIPLIER</div><div style={{...s.statValue, color:'#ffcc00'}}>x{params.difficultyMultiplier.toFixed(1)}</div></div>
                <div style={s.statBox}><div style={s.statLabel}>WAVE_GAP</div><div style={s.statValue}>{params.waveSpacing.toFixed(2)}</div></div>
              </div>

              <div style={s.nameInputBox}>
                 <span style={s.inputPrefix}>USER_ID {'>'}</span>
                 <span style={s.nameDisplay}>{user?.displayName ?? (user?.isAnonymous ? 'GUEST' : user?.email ?? '---')}</span>
              </div>

              <div style={s.actionButtons}>
                <button style={s.primaryCyberBtn} onClick={() => onStart(user?.displayName ?? (user?.isAnonymous ? 'GUEST' : 'Player'), selectedWifi)}>
                  <span style={s.btnScanline}></span>
                  INITIATE_GAME
                </button>
                <button style={s.secondaryCyberBtn} onClick={() => onBattle(selectedWifi)}>
                  BATTLE_PROTOCOL
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 右カラム: リーダーボード */}
        <div style={s.sidePanel}>
          <div style={{ ...s.glassCard, height: '100%', padding: '20px' }}>
            <div style={s.cardTitle}>// GLOBAL_RANKING</div>
            <div style={s.rankContainer}>
              <div style={s.rankHeader}>
                <span style={{ flex: 0.5 }}>RNK</span>
                <span style={{ flex: 2 }}>IDENTIFIER</span>
                <span style={{ flex: 1, textAlign: 'right' }}>SCORE</span>
              </div>
              <div style={s.rankScroll}>
                {rankings.length === 0 ? (
                  <div style={s.rankEmpty}>NO_DATA_FOUND</div>
                ) : (
                  rankings.map((r, i) => {
                    const isTop1 = i === 0;
                    const c = i === 0 ? '#ffcf33' : i === 1 ? '#e0eaff' : i === 2 ? '#ff9966' : '#00ffff'
                    return (
                      <div key={r.id} style={{ ...s.rankRow, background: isTop1 ? 'rgba(255, 207, 51, 0.1)' : 'transparent', borderColor: isTop1 ? 'rgba(255, 207, 51, 0.3)' : 'rgba(0, 255, 255, 0.1)' }}>
                        <span style={{ flex: 0.5, color: c, fontWeight: 900, textShadow: `0 0 5px ${c}` }}>0{i + 1}</span>
                        <span style={{ flex: 2, color: '#e0f7fc', fontFamily: 'monospace', letterSpacing: '0.05em' }} title={r.id}>
                          {r.id.length > 10 ? r.id.slice(0, 10) + '…' : r.id}
                        </span>
                        <span style={{ flex: 1, color: '#fff', fontWeight: 800, textAlign: 'right' }}>{r.score}</span>
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── 下部波（Wii Board傾き連動） ── */}
      <BottomWave params={params} copRef={copRef} />

      {/* モーダル群は変更なし */}
      {showWifiModal && <WifiSelectModal onSelect={setSelectedWifi} onClose={() => setShowWifiModal(false)} />}
      
      {showCalibPopup && <CalibPopup sensors={sensors} cop={cop} onCalibrate={calibrate} sensitivity={sensitivity} onSensitivity={setSensitivity} sensorScale={sensorScale} onSensorScale={setSensorScale} sensorRate={sensorRate} onSensorRate={setSensorRate} onAutoStart={resetHorizontalCalibration} onAutoApply={applyHorizontalCalibration} onClose={() => setShowCalibPopup(false)} />}
    </div>
  )
}

// ── CSS/Styles Definition ──
const s = {
  root: {
    width: '100vw', height: '100vh',
    display: 'flex', flexDirection: 'column',
    background: 'radial-gradient(circle at center, #061126 0%, #01040a 100%)',
    color: '#e0f7fc', fontFamily: '"Consolas", "Courier New", monospace', // ハイテク感のある等幅系フォントをベースに
    overflow: 'hidden', position: 'relative',
  },
  cyberGrid: {
    position: 'absolute', inset: 0,
    backgroundImage: `
      linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    backgroundPosition: 'center center',
    zIndex: 0,
    pointerEvents: 'none'
  },
  
  // ガラスモーフ共通
  glassCard: {
    background: 'rgba(4, 12, 25, 0.65)',
    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(0, 255, 255, 0.15)',
    borderRadius: '8px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 16px rgba(0, 255, 255, 0.03)',
    display: 'flex', flexDirection: 'column', zIndex: 10,
    position: 'relative', overflow: 'hidden'
  },
  cardTitle: {
    fontSize: 12, color: '#00ffff', letterSpacing: '0.15em', fontWeight: 800,
    borderBottom: '1px solid rgba(0,255,255,0.2)', padding: '12px 16px',
    background: 'linear-gradient(90deg, rgba(0,255,255,0.1) 0%, transparent 100%)',
    textShadow: '0 0 8px rgba(0,255,255,0.4)',
  },

  // ヘッダー
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '16px 32px', zIndex: 10, height: '80px',
    borderBottom: '1px solid rgba(0,255,255,0.1)',
    background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)',
  },
  headerLeft: { flex: 1, display: 'flex', alignItems: 'center' },
  headerCenter: { flex: 1, display: 'flex', justifyContent: 'center' },
  headerRight: { flex: 1, display: 'flex', justifyContent: 'flex-end' },
  
  titleImg: { height: '36px', width: 'auto', filter: 'drop-shadow(0 0 8px rgba(0,150,255,0.8))' },
  
  statusWidget: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '8px 20px', borderRadius: '20px',
    background: 'rgba(0,0,0,0.6)', border: '1px solid',
  },
  statusDot: { width: 8, height: 8, borderRadius: '50%' },
  copDisplay: { fontSize: 11, color: '#00ffff', opacity: 0.8, marginLeft: 8 },

  userBadge: { display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(0, 255, 255, 0.05)', padding: '6px 16px', borderRadius: '4px', border: '1px solid rgba(0,255,255,0.2)' },
  userName: { fontSize: 13, color: '#00ffff', letterSpacing: '0.1em' },
  logoutBtn: { background: 'none', border: 'none', color: '#ff3366', fontSize: 11, cursor: 'pointer', fontWeight: 800, letterSpacing: '0.1em' },

  // メイン
  main: { flex: 1, display: 'flex', flexDirection: 'row', padding: '24px 32px', gap: '24px', overflow: 'hidden', minHeight: 0, zIndex: 10 },
  sidePanel: { width: '320px', flexShrink: 0, display: 'flex', flexDirection: 'column' },
  centerPanel: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },

  // 左: How To
  howToContent: { padding: '16px', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 12 },
  howToRow: { color: '#aaddff', lineHeight: 1.6 },
  hl: { color: '#00ffff', fontWeight: 700 },
  howToSub: { marginTop: 8, color: '#ffcc00', fontSize: 10, borderLeft: '2px solid #ffcc00', paddingLeft: 8 },

  // 左: Button Modules
  moduleList: { padding: '16px', display: 'flex', flexDirection: 'column', gap: 10 },
  moduleBtn: {
    background: 'rgba(0, 20, 50, 0.5)', border: '1px solid rgba(0, 255, 255, 0.2)', color: '#00ffff',
    padding: '12px', fontSize: 11, letterSpacing: '0.1em', cursor: 'pointer',
    textAlign: 'left', position: 'relative', overflow: 'hidden', transition: 'all 0.2s',
  },

  // 中央ダッシュボード
  mainGlassCard: {
    background: 'rgba(2, 8, 20, 0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0, 255, 255, 0.2)',
    borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '600px',
    display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden',
    maxHeight: '100%', minHeight: 0,
    boxShadow: '0 0 40px rgba(0, 255, 255, 0.05), inset 0 0 30px rgba(0, 255, 255, 0.05)'
  },
  centerScroll: {
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    overflowY: 'auto',
    maxHeight: '100%',
    minHeight: 0,
    paddingRight: 8,
  },
  radarBg: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.1, pointerEvents: 'none' },
  radarCircles: { width: 300, height: 300, borderRadius: '50%', border: '1px solid #00ffff', boxShadow: 'inset 0 0 20px #00ffff, 0 0 20px #00ffff' },
  cardTitleCenter: { fontSize: 13, color: '#00ffff', letterSpacing: '0.2em', marginBottom: 16, opacity: 0.8 },
  stageName: { fontSize: 36, fontWeight: 900, marginBottom: 32, letterSpacing: '0.1em' },
  
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', marginBottom: 32 },
  statBox: { background: 'rgba(0, 255, 255, 0.05)', border: '1px solid rgba(0, 255, 255, 0.1)', padding: '12px 16px', borderRadius: '6px' },
  statLabel: { fontSize: 10, color: '#00ffff', opacity: 0.6, marginBottom: 4, letterSpacing: '0.1em' },
  statValue: { fontSize: 16, color: '#fff', fontWeight: 700 },

  nameInputBox: { display: 'flex', alignItems: 'center', width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.4)', border: '1px solid #00ffff', borderRadius: '4px', marginBottom: 32 },
  inputPrefix: { color: '#00ffff', fontSize: 12, marginRight: 12, opacity: 0.7 },
  nameDisplay: { color: '#fff', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em' },

  actionButtons: { display: 'flex', flexDirection: 'column', gap: 16, width: '100%' },
  primaryCyberBtn: {
    position: 'relative', background: 'rgba(0, 255, 255, 0.1)', border: '1px solid #00ffff', color: '#00ffff',
    padding: '16px 0', fontSize: 18, fontWeight: 900, letterSpacing: '0.2em', cursor: 'pointer',
    boxShadow: '0 0 20px rgba(0, 255, 255, 0.2), inset 0 0 10px rgba(0, 255, 255, 0.2)', overflow: 'hidden', textShadow: '0 0 8px #00ffff'
  },
  secondaryCyberBtn: {
    background: 'transparent', border: '1px dashed rgba(255, 204, 51, 0.55)', color: '#ffcc33',
    padding: '14px 0', fontSize: 14, fontWeight: 700, letterSpacing: '0.15em', cursor: 'pointer', transition: 'all 0.2s',
  },

  // 右リーダーボード
  rankContainer: { display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' },
  rankHeader: { display: 'flex', padding: '12px 16px', fontSize: 10, color: '#00ffff', opacity: 0.6, borderBottom: '1px solid rgba(0,255,255,0.2)' },
  rankScroll: { flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' },
  rankRow: { display: 'flex', padding: '12px 16px', borderBottom: '1px solid rgba(0,255,255,0.1)', fontSize: 13, alignItems: 'center' },
  rankEmpty: { padding: 24, textAlign: 'center', color: '#00ffff', fontSize: 12, opacity: 0.5, letterSpacing: '0.2em' },
}
