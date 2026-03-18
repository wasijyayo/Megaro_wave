import { useState, useEffect, useContext } from 'react'
import { submitScore, getTopScores } from '../../firebase.js'
import { UserContext } from '../../contexts/UserContext.js'

export default function GameOver({ score, onRestart }) {
  const user = useContext(UserContext)
  const [isHovered, setIsHovered] = useState(false)
  
  const userName = user?.displayName ?? (user?.isAnonymous ? 'ゲスト' : user?.email ?? '名無し')

  const [scores,  setScores]  = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function run() {
      if (user) {
        await submitScore(userName, score)
      }
      const top = await getTopScores(10)
      setScores(top)
      setLoading(false)
    }
    run()
  }, [])

  const playerRank = scores.findIndex(s => s.id === user?.uid) + 1

  return (
    <div style={s.root}>
      <div style={s.inner}>
        <h2 style={s.title}>SYSTEM FAILURE<br/><span style={s.subtitle}>GAME OVER</span></h2>
        
        <p style={s.name}>USER: {userName}</p>
        <div style={s.score}>{score.toLocaleString()}</div>
        
        {playerRank > 0 && (
          <div style={s.rank}>GLOBAL RANK: #{playerRank}</div>
        )}

        {/* リーダーボード */}
        <div style={s.board}>
          <div style={s.boardTitle}>TOP 10 RECORDS</div>
          {loading ? (
            <div style={s.loadingText}>DATA LOADING...</div>
          ) : scores.length === 0 ? (
            <div style={s.loadingText}>
              FIREBASE OFFLINE OR NO DATA
            </div>
          ) : (
            scores.map((entry, i) => {
              const isMe = entry.id === user?.uid
              return (
                <div key={entry.id} style={{ ...s.boardRow, color: isMe ? '#00ffff' : 'rgba(255,255,255,0.7)', backgroundColor: isMe ? 'rgba(0, 255, 255, 0.05)' : 'transparent' }}>
                  <span style={s.boardRank}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ flex: 1, textShadow: isMe ? '0 0 8px rgba(0,255,255,0.5)' : 'none' }}>{entry.name}</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums', textShadow: isMe ? '0 0 8px rgba(0,255,255,0.5)' : 'none' }}>
                    {entry.score.toLocaleString()}
                  </span>
                </div>
              )
            })
          )}
        </div>

        <button 
          onClick={onRestart} 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ ...s.btn, ...(isHovered ? s.btnHover : {}) }}
        >
          REBOOT SYSTEM
        </button>
      </div>
    </div>
  )
}

const s = {
  root: {
    minHeight: '100vh', 
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'radial-gradient(circle at 50% 50%, #061121 0%, #02060d 100%)', 
    color: '#fff', 
    fontFamily: '"Courier New", Courier, monospace, system-ui',
    padding: '2rem',
  },
  inner: { 
    textAlign: 'center', 
    width: '100%', 
    maxWidth: '480px' 
  },
  title: { 
    fontSize: '2rem', 
    fontWeight: 900, 
    color: '#ff3366', 
    marginBottom: '2rem', 
    letterSpacing: '0.1em',
    textShadow: '0 0 10px rgba(255,51,102,0.5), 0 0 20px rgba(255,51,102,0.3)',
    lineHeight: 1.2
  },
  subtitle: {
    fontSize: '3.5rem',
    textShadow: '0 0 15px #ff3366, 0 0 30px #ff3366'
  },
  name:  { 
    color: 'rgba(0, 255, 255, 0.8)', 
    fontSize: '1.2rem', 
    marginBottom: '0.5rem',
    letterSpacing: '0.1em',
    textShadow: '0 0 5px rgba(0,255,255,0.3)'
  },
  score: { 
    fontSize: '6.5rem', 
    fontWeight: 900, 
    marginBottom: '1rem',
    color: '#fff',
    textShadow: '0 0 15px #00ffff, 0 0 30px rgba(0,255,255,0.5)',
    letterSpacing: '0.05em',
    lineHeight: 1
  },
  rank:  { 
    color: '#00ffff', 
    fontSize: '1.2rem', 
    marginBottom: '2.5rem',
    letterSpacing: '0.1em',
    textShadow: '0 0 8px #00ffff'
  },
  board: {
    background: 'rgba(6, 17, 33, 0.7)', 
    border: '1px solid rgba(0, 255, 255, 0.4)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 0 20px rgba(0,255,255,0.15), inset 0 0 10px rgba(0,255,255,0.05)',
    borderRadius: '8px', 
    padding: '24px', 
    marginBottom: '2.5rem', 
    textAlign: 'left',
  },
  boardTitle: { 
    fontSize: '0.9rem', 
    color: '#00ffff', 
    letterSpacing: '0.15em', 
    textTransform: 'uppercase', 
    marginBottom: '16px',
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0,255,255,0.5)'
  },
  boardRow: { 
    display: 'flex', 
    gap: '16px', 
    padding: '10px 12px', 
    borderBottom: '1px solid rgba(0, 255, 255, 0.1)', 
    fontSize: '1.05rem',
    alignItems: 'center'
  },
  boardRank: { 
    width: '30px', 
    color: 'rgba(0, 255, 255, 0.5)',
    fontFamily: 'inherit'
  },
  loadingText: { 
    color: 'rgba(255, 255, 255, 0.4)', 
    padding: '20px 0', 
    fontSize: '0.9rem',
    textAlign: 'center',
    letterSpacing: '0.1em'
  },
  btn: {
    padding: '16px 48px', 
    borderRadius: '4px', 
    border: '2px solid #00ffff',
    background: 'rgba(0, 255, 255, 0.1)', 
    color: '#00ffff', 
    fontSize: '1.2rem', 
    fontWeight: 700, 
    cursor: 'pointer',
    letterSpacing: '0.15em',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 10px rgba(0, 255, 255, 0.2)',
    textShadow: '0 0 8px #00ffff',
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'inherit',
    textTransform: 'uppercase'
  },
  btnHover: {
    background: 'rgba(0, 255, 255, 0.2)',
    boxShadow: '0 0 25px rgba(0, 255, 255, 0.5), inset 0 0 15px rgba(0, 255, 255, 0.3)',
  }
}