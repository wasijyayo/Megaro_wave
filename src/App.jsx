import { useState, useEffect } from 'react'
import { onAuth } from './firebase.js'
import { UserContext } from './contexts/UserContext.js'
import AuthScreen from './components/AuthScreen.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import GameScene  from './components/game/GameScene.jsx'
import GameOver   from './components/game/GameOver.jsx'

export default function App() {
  const [user,       setUser]       = useState(undefined) // undefined=loading, null=未ログイン, object=ログイン済み
  const [screen,     setScreen]     = useState('home')
  const [playerName, setPlayerName] = useState('Player')
  const [finalScore, setFinalScore] = useState(0)

  useEffect(() => {
    // 5秒以内に応答がなければ未ログイン扱いにしてフリーズを防ぐ
    const timer = setTimeout(() => setUser(prev => prev === undefined ? null : prev), 5000)
    const unsubscribe = onAuth(firebaseUser => {
      clearTimeout(timer)
      setUser(firebaseUser ?? null)
    })
    return () => { clearTimeout(timer); unsubscribe() }
  }, [])

  const handleStart = (name) => {
    setPlayerName(name)
    setScreen('game')
  }

  const handleGameOver = (score) => {
    setFinalScore(score)
    setScreen('gameover')
  }

  const handleRestart = () => {
    setFinalScore(0)
    setScreen('home')
  }

  if (user === undefined) {
    return (
      <div style={{ width: '100%', height: '100%', background: '#040c1a',
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#1a9eba', fontSize: 14 }}>読み込み中...</div>
      </div>
    )
  }

  if (user === null) {
    return <AuthScreen />
  }

  return (
    <UserContext.Provider value={user}>
      {screen === 'home'     && <HomeScreen onStart={handleStart} />}
      {screen === 'game'     && <GameScene  playerName={playerName} onGameOver={handleGameOver} />}
      {screen === 'gameover' && <GameOver   score={finalScore} playerName={playerName} onRestart={handleRestart} />}
    </UserContext.Provider>
  )
}
