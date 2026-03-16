import { useState } from 'react'
import HomeScreen from './components/HomeScreen.jsx'
import GameScene  from './components/game/GameScene.jsx'
import GameOver   from './components/game/GameOver.jsx'

export default function App() {
  const [screen,       setScreen]       = useState('home')
  const [playerName,   setPlayerName]   = useState('Player')
  const [finalScore,   setFinalScore]   = useState(0)

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

  return (
    <>
      {screen === 'home'     && <HomeScreen onStart={handleStart} />}
      {screen === 'game'     && <GameScene  playerName={playerName} onGameOver={handleGameOver} />}
      {screen === 'gameover' && <GameOver   score={finalScore} playerName={playerName} onRestart={handleRestart} />}
    </>
  )
}
