/**
 * 対戦結果画面
 * phase:
 *   'gameover'        - 初期状態（再戦申請 or 退出）
 *   'rematch_sent'    - 自分が再戦申請済み、相手の返答待ち
 *   'rematch_pending' - 相手から再戦申請が来ている
 */
export default function BattleGameOver({
  myScore,
  opponentScore,
  phase,
  onRematchRequest,
  onRematchAccept,
  onRematchDecline,
  onLeave,
}) {
  const iWon = myScore >= opponentScore

  return (
    <div style={s.root}>
      <div style={s.card}>
        {/* 勝敗 */}
        <div style={{ ...s.result, color: iWon ? '#44ff88' : '#ff4444' }}>
          {iWon ? 'YOU WIN' : 'YOU LOSE'}
        </div>

        {/* スコア比較 */}
        <div style={s.scoreRow}>
          <div style={s.scoreBox}>
            <div style={s.scoreLabel}>あなた</div>
            <div style={{ ...s.scoreNum, color: iWon ? '#44ff88' : '#fff' }}>
              {myScore.toLocaleString()}
            </div>
          </div>

          <div style={s.vs}>VS</div>

          <div style={s.scoreBox}>
            <div style={s.scoreLabel}>相手</div>
            <div style={{ ...s.scoreNum, color: !iWon ? '#ff4444' : '#fff' }}>
              {opponentScore.toLocaleString()}
            </div>
          </div>
        </div>

        {/* アクション */}
        <div style={s.actions}>
          {phase === 'gameover' && (
            <>
              <button style={s.btnRematch} onClick={onRematchRequest}>
                再戦を申し込む
              </button>
              <button style={s.btnLeave} onClick={onLeave}>
                ロビーに戻る
              </button>
            </>
          )}

          {phase === 'rematch_sent' && (
            <>
              <div style={s.waiting}>相手の返答を待っています...</div>
              <button style={s.btnLeave} onClick={onLeave}>
                キャンセルしてロビーに戻る
              </button>
            </>
          )}

          {phase === 'rematch_pending' && (
            <>
              <div style={s.notify}>相手から再戦申請が来ています</div>
              <button style={s.btnRematch} onClick={onRematchAccept}>
                承諾して再戦する
              </button>
              <button style={s.btnLeave} onClick={onRematchDecline}>
                断ってロビーに戻る
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const s = {
  root: {
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#040c1a', fontFamily: 'system-ui, sans-serif', padding: '2rem',
  },
  card: {
    width: '100%', maxWidth: 440,
    background: '#0e1f3d', border: '1px solid #1e3a6a',
    borderRadius: 16, padding: '40px 32px', textAlign: 'center', color: '#fff',
  },
  result: {
    fontSize: 52, fontWeight: 900, letterSpacing: '0.05em', marginBottom: 32,
  },
  scoreRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: 24, marginBottom: 40,
  },
  scoreBox:  { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 },
  scoreLabel:{ fontSize: 11, color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em' },
  scoreNum:  { fontSize: 36, fontWeight: 900 },
  vs:        { fontSize: 18, fontWeight: 900, color: '#444' },
  actions:   { display: 'flex', flexDirection: 'column', gap: 12 },
  btnRematch:{
    padding: '14px', borderRadius: 8, border: 'none',
    background: '#1a4fc4', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer',
  },
  btnLeave:{
    padding: '12px', borderRadius: 8, border: '1px solid #334',
    background: 'none', color: '#888', fontSize: 14, cursor: 'pointer',
  },
  waiting: { color: '#888', fontSize: 14, padding: '8px 0' },
  notify:  {
    color: '#ffee44', fontSize: 14, padding: '10px 16px',
    background: 'rgba(255,238,68,0.1)', borderRadius: 8,
    border: '1px solid rgba(255,238,68,0.3)', marginBottom: 4,
  },
}
