import { useState } from 'react'
import { useWifiStats } from '../../hooks/useWifiStats.js'
import { getWaveParams } from '../../utils/waveParams.js'

export default function StartScreen({ onStart }) {
  const [name, setName] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const { downlink, effectiveType, supported } = useWifiStats()
  const params = getWaveParams(downlink)

  return (
    <div style={s.root}>
      <h1 style={s.title}>MEGARO WAVE</h1>
      <p style={s.subtitle}>Wii Balance Board × MediaPipe サーフィンゲーム</p>

      {/* 今日のステージ */}
      <div style={s.card}>
        <div style={s.cardLabel}>TODAY'S STAGE</div>
        <div style={s.stageValue}>{params.label}</div>
        <div style={s.statsContainer}>
          <span>WIFI: <b style={s.cyanText}>{downlink} Mbps</b></span>
          <span>MULT: <b style={s.cyanText}>x{params.difficultyMultiplier.toFixed(1)}</b></span>
          <span>WAVE: <b style={s.cyanText}>{params.waveSpacing.toFixed(2)}</b></span>
        </div>
        {!supported && (
          <div style={s.unsupported}>
            ※ Network Information API 非対応 — デフォルト値で動作
          </div>
        )}
      </div>

      {/* プレイヤー名 */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && name.trim() && onStart(name.trim())}
        placeholder="PLAYER NAME"
        maxLength={20}
        style={s.input}
      />

      <button
        onClick={() => onStart(name.trim() || 'Player')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ ...s.btn, ...(isHovered ? s.btnHover : {}) }}
      >
        SYSTEM START
      </button>

      {/* 操作説明 */}
      <div style={s.help}>
        <div style={s.helpTitle}>HOW TO PLAY</div>
        <div style={s.helpRow}><span style={s.helpKey}>BOARD</span> 波の傾きに合わせて体重移動でバランスを保つ</div>
        <div style={s.helpRow}><span style={s.helpKey}>JUMP</span> 体を使ってジャンプ → ポイント獲得</div>
        <div style={s.helpRow}><span style={s.helpKey}>ARMS UP</span> ジャンプ中に両手を挙げるとトリック判定</div>
        <div style={s.helpRow}><span style={s.helpKey}>CROUCH</span> 低い波の下を潜る</div>
        <div style={s.helpNote}>
          // バランスを 2 秒以上崩すとライフ -1 (3ライフ制)
        </div>
      </div>
    </div>
  )
}

const s = {
  root: {
    minHeight: '100vh',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    background: 'radial-gradient(circle at 50% 50%, #061121 0%, #02060d 100%)',
    color: '#fff', 
    fontFamily: '"Courier New", Courier, monospace, system-ui',
    padding: '2rem',
  },
  title: { 
    fontSize: '3.5rem', 
    fontWeight: 900, 
    letterSpacing: '0.1em', 
    marginBottom: '0.5rem',
    color: '#ffffff',
    textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
    textAlign: 'center'
  },
  subtitle: { 
    color: '#00ffff', 
    fontSize: '1rem', 
    marginBottom: '2.5rem',
    textShadow: '0 0 5px rgba(0,255,255,0.5)',
    letterSpacing: '0.05em'
  },
  card: {
    background: 'rgba(6, 17, 33, 0.7)', 
    border: '1px solid rgba(0, 255, 255, 0.4)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 0 20px rgba(0,255,255,0.15), inset 0 0 10px rgba(0,255,255,0.05)',
    borderRadius: '12px', 
    padding: '24px 40px', 
    marginBottom: '2rem',
    textAlign: 'center', 
    minWidth: '340px',
  },
  cardLabel: { 
    fontSize: '0.85rem', 
    color: 'rgba(0, 255, 255, 0.7)', 
    letterSpacing: '0.15em', 
    textTransform: 'uppercase' 
  },
  stageValue: { 
    fontSize: '2rem', 
    fontWeight: 800, 
    margin: '12px 0',
    color: '#fff',
    textShadow: '0 0 10px rgba(255,255,255,0.5)'
  },
  statsContainer: { 
    display: 'flex', 
    gap: '24px', 
    justifyContent: 'center', 
    fontSize: '0.9rem', 
    color: 'rgba(255, 255, 255, 0.6)' 
  },
  cyanText: { 
    color: '#00ffff',
    textShadow: '0 0 5px rgba(0,255,255,0.5)'
  },
  unsupported: { 
    marginTop: '12px', 
    fontSize: '0.75rem', 
    color: 'rgba(255, 255, 255, 0.4)' 
  },
  input: {
    padding: '14px 20px', 
    border: 'none',
    borderBottom: '2px solid rgba(0, 255, 255, 0.5)',
    background: 'rgba(0, 0, 0, 0.4)', 
    color: '#00ffff', 
    fontSize: '1rem',
    textAlign: 'center',
    outline: 'none', 
    width: '300px', 
    marginBottom: '2rem',
    fontFamily: 'inherit',
    letterSpacing: '0.1em',
    textShadow: '0 0 5px rgba(0,255,255,0.3)',
    transition: 'border-color 0.2s',
  },
  btn: {
    padding: '16px 56px', 
    borderRadius: '4px', 
    border: '2px solid #00ffff',
    background: 'rgba(0, 255, 255, 0.1)', 
    color: '#00ffff', 
    fontSize: '1.2rem', 
    fontWeight: 700,
    letterSpacing: '0.15em',
    cursor: 'pointer', 
    marginBottom: '3rem',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 10px rgba(0, 255, 255, 0.2)',
    textShadow: '0 0 8px #00ffff',
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'inherit',
    textTransform: 'uppercase',
  },
  btnHover: {
    background: 'rgba(0, 255, 255, 0.2)',
    boxShadow: '0 0 25px rgba(0, 255, 255, 0.5), inset 0 0 15px rgba(0, 255, 255, 0.3)',
  },
  help: {
    background: 'rgba(6, 17, 33, 0.5)', 
    border: '1px solid rgba(0, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)',
    borderRadius: '8px', 
    padding: '20px 28px', 
    maxWidth: '500px', 
    width: '100%',
  },
  helpTitle: { 
    fontSize: '0.85rem', 
    color: 'rgba(0, 255, 255, 0.8)', 
    letterSpacing: '0.15em', 
    marginBottom: '16px',
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0,255,255,0.3)'
  },
  helpRow: { 
    fontSize: '0.9rem', 
    color: 'rgba(255, 255, 255, 0.8)', 
    marginBottom: '10px', 
    lineHeight: 1.5,
    display: 'flex',
    alignItems: 'center'
  },
  helpKey: {
    display: 'inline-block', 
    background: 'rgba(0, 255, 255, 0.1)', 
    border: '1px solid rgba(0, 255, 255, 0.3)',
    borderRadius: '4px',
    padding: '2px 8px', 
    marginRight: '12px', 
    fontSize: '0.8rem', 
    color: '#00ffff',
    minWidth: '60px',
    textAlign: 'center',
    boxShadow: '0 0 5px rgba(0,255,255,0.1)'
  },
  helpNote: { 
    marginTop: '16px', 
    color: 'rgba(0, 255, 255, 0.5)', 
    fontSize: '0.8rem',
    textAlign: 'center',
    fontStyle: 'italic'
  }
}