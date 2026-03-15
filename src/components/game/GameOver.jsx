import { useState, useEffect } from 'react'
import { submitScore, getTopScores } from '../../firebase.js'

export default function GameOver({ score, playerName, onRestart }) {
  const [scores,    setScores]    = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(true)

  useEffect(() => {
    async function run() {
      await submitScore(playerName, score)
      setSubmitted(true)
      const top = await getTopScores(10)
      setScores(top)
      setLoading(false)
    }
    run()
  }, [playerName, score])

  const playerRank = scores.findIndex((s) => s.name === playerName && s.score === score) + 1

  return (
    <div style={s.root}>
      <div style={s.inner}>
        <h2 style={s.title}>GAME OVER</h2>
        <p style={s.name}>{playerName}</p>
        <div style={s.score}>{score.toLocaleString()}</div>
        {playerRank > 0 && (
          <div style={s.rank}>ランキング #{playerRank}</div>
        )}

        {/* リーダーボード */}
        <div style={s.board}>
          <div style={s.boardTitle}>TOP 10</div>
          {loading ? (
            <div style={{ color: '#666', padding: '12px 0' }}>読み込み中...</div>
          ) : scores.length === 0 ? (
            <div style={{ color: '#666', padding: '12px 0', fontSize: 13 }}>
              Firebase 未設定のため表示できません
            </div>
          ) : (
            scores.map((entry, i) => {
              const isMe = entry.name === playerName && entry.score === score
              return (
                <div key={entry.id} style={{ ...s.boardRow, color: isMe ? '#00aaff' : '#ccc' }}>
                  <span style={s.boardRank}>{i + 1}</span>
                  <span style={{ flex: 1 }}>{entry.name}</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {entry.score.toLocaleString()}
                  </span>
                </div>
              )
            })
          )}
        </div>

        <button onClick={onRestart} style={s.btn}>もう一度プレイ</button>
      </div>
    </div>
  )
}

const s = {
  root: {
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#040c1a', color: '#fff', fontFamily: 'system-ui, sans-serif',
    padding: '2rem',
  },
  inner: { textAlign: 'center', width: '100%', maxWidth: 400 },
  title: { fontSize: 44, fontWeight: 900, color: '#ff4444', marginBottom: 4, textShadow: '0 0 20px #ff4444' },
  name:  { color: '#888', fontSize: 15, marginBottom: 4 },
  score: { fontSize: 52, fontWeight: 900, marginBottom: 4 },
  rank:  { color: '#00aaff', fontSize: 16, marginBottom: 24 },
  board: {
    background: '#0e1f3d', border: '1px solid #1e3a6a',
    borderRadius: 12, padding: '16px 20px', marginBottom: 24, textAlign: 'left',
  },
  boardTitle: { fontSize: 11, color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 },
  boardRow: { display: 'flex', gap: 12, padding: '6px 0', borderBottom: '1px solid #1a2e50', fontSize: 14 },
  boardRank: { width: 20, color: '#555' },
  btn: {
    padding: '14px 48px', borderRadius: 8, border: 'none',
    background: '#1a4fc4', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer',
  },
}
