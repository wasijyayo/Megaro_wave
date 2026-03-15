const TOTAL_LIVES = 3

export default function HUD({ score, lives, balance, waveLabel, difficultyMultiplier, lastAction }) {
  return (
    <div style={s.root}>
      {/* 左上: ライフ */}
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <div style={s.label}>LIVES</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
          {Array.from({ length: TOTAL_LIVES }).map((_, i) => (
            <div key={i} style={{
              width: 18, height: 18, borderRadius: '50%',
              background: i < lives ? '#ff4444' : '#333',
              boxShadow: i < lives ? '0 0 8px #ff4444' : 'none',
              transition: 'background 0.2s',
            }} />
          ))}
        </div>
      </div>

      {/* 中央上: ステージ名 */}
      <div style={{ position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={s.label}>STAGE</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginTop: 2 }}>{waveLabel}</div>
      </div>

      {/* 右上: スコア */}
      <div style={{ position: 'absolute', top: 18, right: 20, textAlign: 'right' }}>
        <div style={s.label}>SCORE</div>
        <div style={{ fontSize: 34, fontWeight: 900, color: '#fff', lineHeight: 1, textShadow: '0 0 18px #00aaff' }}>
          {score.toLocaleString()}
        </div>
        <div style={{ fontSize: 12, color: '#00aaff', marginTop: 2 }}>
          x{difficultyMultiplier.toFixed(1)} 倍率
        </div>
      </div>

      {/* 下中央: バランスメーター */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', width: 240, textAlign: 'center' }}>
        <div style={{ ...s.label, marginBottom: 6 }}>BALANCE</div>
        <BalanceMeter balance={balance} />
        {!balance.boardConnected && (
          <div style={{ fontSize: 11, color: '#666', marginTop: 4 }}>
            Wii Board 未接続 (中央固定)
          </div>
        )}
      </div>

      {/* アクション通知 */}
      {lastAction && (
        <div key={lastAction.id} style={s.actionPopup}>
          <div>{lastAction.label}</div>
          <div style={{ fontSize: 22 }}>+{lastAction.points.toLocaleString()}</div>
        </div>
      )}
    </div>
  )
}

function BalanceMeter({ balance }) {
  const { copX, targetX, ok } = balance
  const indicatorPct = Math.min(Math.max((copX    + 1) / 2, 0), 1) * 100
  const targetPct    = Math.min(Math.max((targetX + 1) / 2, 0), 1) * 100
  const color        = ok ? '#44ff88' : '#ff4444'

  return (
    <div style={{ position: 'relative', height: 18, background: '#111', borderRadius: 9, border: `2px solid ${color}`, overflow: 'hidden' }}>
      {/* 許容ゾーン */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: `${targetPct - 12}%`, width: '24%',
        background: 'rgba(68,255,136,0.15)',
      }} />
      {/* 目標ライン */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: `${targetPct}%`, width: 2,
        background: '#44ff88', opacity: 0.8,
      }} />
      {/* 現在の重心 */}
      <div style={{
        position: 'absolute', top: '50%',
        left: `${indicatorPct}%`,
        transform: 'translate(-50%, -50%)',
        width: 14, height: 14, borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px ${color}`,
        transition: 'left 0.06s ease-out',
      }} />
    </div>
  )
}

const s = {
  root: {
    position: 'absolute', inset: 0,
    pointerEvents: 'none',
    fontFamily: 'system-ui, sans-serif',
    color: '#fff',
  },
  label: {
    fontSize: 11,
    letterSpacing: '0.08em',
    color: '#888',
    textTransform: 'uppercase',
  },
  actionPopup: {
    position: 'absolute',
    top: '30%', left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    fontSize: 30, fontWeight: 900,
    color: '#ffee00',
    textShadow: '0 0 24px #ffee00',
    animation: 'popupFade 1s forwards',
    pointerEvents: 'none',
  },
}
