import { useState } from 'react'
import StartScreen from './components/game/StartScreen.jsx'
import GameScene   from './components/game/GameScene.jsx'
import GameOver    from './components/game/GameOver.jsx'

export default function App() {
  const [screen,     setScreen]     = useState('start')
  const [playerName, setPlayerName] = useState('Player')
  const [finalScore, setFinalScore] = useState(0)

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
    setScreen('start')
  }

  return (
    <>
      {screen === 'start'    && <StartScreen onStart={handleStart} />}
      {screen === 'game'     && <GameScene   playerName={playerName} onGameOver={handleGameOver} />}
      {screen === 'gameover' && <GameOver    score={finalScore} playerName={playerName} onRestart={handleRestart} />}
    </>
  )
}
