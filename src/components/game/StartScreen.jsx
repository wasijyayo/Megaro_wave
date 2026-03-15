import { useState } from 'react'
import { useWifiStats } from '../../hooks/useWifiStats.js'
import { getWaveParams } from '../../utils/waveParams.js'

export default function StartScreen({ onStart }) {
  const [name, setName] = useState('')
  const { downlink, effectiveType, supported } = useWifiStats()
  const params = getWaveParams(downlink)

  return (
    <div style={s.root}>
      <h1 style={s.title}>MEGARO WAVE</h1>
      <p style={s.subtitle}>Wii Balance Board × MediaPipe サーフィンゲーム</p>

      {/* 今日のステージ */}
      <div style={s.card}>
        <div style={s.cardLabel}>今日のステージ</div>
        <div style={{ fontSize: 28, fontWeight: 800, margin: '8px 0' }}>{params.label}</div>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', fontSize: 13, color: '#aaa' }}>
          <span>WiFi速度: <b style={{ color: '#fff' }}>{downlink} Mbps</b></span>
          <span>スコア倍率: <b style={{ color: '#00aaff' }}>x{params.difficultyMultiplier.toFixed(1)}</b></span>
        </div>
        {!supported && (
          <div style={{ marginTop: 8, fontSize: 12, color: '#888' }}>
            ※ Network Information API 非対応ブラウザ — デフォルト値で動作
          </div>
        )}
      </div>

      {/* プレイヤー名 */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && name.trim() && onStart(name.trim())}
        placeholder="プレイヤー名を入力"
        maxLength={20}
        style={s.input}
      />

      <button
        onClick={() => onStart(name.trim() || 'Player')}
        style={s.btn}
      >
        ゲームスタート
      </button>

      {/* 操作説明 */}
      <div style={s.help}>
        <div style={s.helpTitle}>操作方法</div>
        <div style={s.helpRow}><span style={s.helpKey}>Wii Balance Board</span> 波の傾きに合わせて体重移動でバランスを保つ</div>
        <div style={s.helpRow}><span style={s.helpKey}>ジャンプ</span> 体を使ってジャンプ → ポイント獲得</div>
        <div style={s.helpRow}><span style={s.helpKey}>腕を上げる</span> ジャンプ中に両手を挙げるとトリック判定</div>
        <div style={s.helpRow}><span style={s.helpKey}>しゃがむ</span> 低い波の下を潜る</div>
        <div style={{ marginTop: 8, color: '#666', fontSize: 12 }}>
          バランスを 2 秒以上崩すとライフ -1 (3ライフ制)
        </div>
      </div>
    </div>
  )
}

const s = {
  root: {
    minHeight: '100vh',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    background: 'linear-gradient(180deg, #071428 0%, #040c1a 100%)',
    color: '#fff', fontFamily: 'system-ui, sans-serif',
    padding: '2rem',
  },
  title: { fontSize: 52, fontWeight: 900, letterSpacing: '0.05em', marginBottom: 6 },
  subtitle: { color: '#888', fontSize: 14, marginBottom: 32 },
  card: {
    background: '#0e1f3d', border: '1px solid #1e3a6a',
    borderRadius: 12, padding: '20px 36px', marginBottom: 28,
    textAlign: 'center', minWidth: 320,
  },
  cardLabel: { fontSize: 12, color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase' },
  input: {
    padding: '12px 16px', borderRadius: 8, border: '1px solid #334',
    background: '#0e1f3d', color: '#fff', fontSize: 15,
    outline: 'none', width: 280, marginBottom: 14,
  },
  btn: {
    padding: '14px 48px', borderRadius: 8, border: 'none',
    background: '#1a4fc4', color: '#fff', fontSize: 17, fontWeight: 700,
    cursor: 'pointer', marginBottom: 36,
    boxShadow: '0 0 20px rgba(26,79,196,0.5)',
  },
  help: {
    background: '#0a1628', border: '1px solid #1a2e50',
    borderRadius: 10, padding: '16px 24px', maxWidth: 480, width: '100%',
  },
  helpTitle: { fontSize: 12, color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 },
  helpRow: { fontSize: 13, color: '#ccc', marginBottom: 6, lineHeight: 1.5 },
  helpKey: {
    display: 'inline-block', background: '#1a3060', borderRadius: 4,
    padding: '1px 7px', marginRight: 8, fontSize: 12, color: '#7aadff',
  },
}
