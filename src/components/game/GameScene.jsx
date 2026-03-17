import { useState, useRef, useEffect, useCallback } from 'react'
import R3FGameCanvas  from './R3FGameCanvas.jsx'
import HUD            from './HUD.jsx'
import { useWifiStats }  from '../../hooks/useWifiStats.js'
import { useWiiBoard }   from '../../hooks/useWiiBoard.js'
import { usePersonSegmentation } from '../../hooks/usePersonSegmentation.ts'
import { getWaveParams, calcWaveTilt } from '../../utils/waveParams.js'

// ── 定数 ──────────────────────────────────────────────────
const TOTAL_LIVES        = 3
const BALANCE_TOLERANCE  = 0.28   // CoP と目標傾きの許容差 (-1〜1)
const IMBALANCE_TIMEOUT  = 2000   // ms: この時間超えるとライフ -1

// ─────────────────────────────────────────────────────────
export default function GameScene({ playerName, onGameOver }) {
  const elapsedTimeRef = useRef(0)

  // ── hooks ──
  const { downlink }                          = useWifiStats()
  const { connected: boardConnected, copRef, connect: connectBoard } = useWiiBoard()
  const { canvas: personCanvas, status: personMaskStatus } = usePersonSegmentation()

  // ── UI state ──
  const [score,      setScore]      = useState(0)
  const [lives,      setLives]      = useState(TOTAL_LIVES)
  const [balance,    setBalance]    = useState({ copX: 0, targetX: 0, ok: true, boardConnected: false })
  const [lastAction, setLastAction] = useState(null)

  // ── ゲームロジック用 refs (state 更新による effect 再起動を避ける) ──
  const scoreRef             = useRef(0)
  const livesRef             = useRef(TOTAL_LIVES)
  const imbalanceStartRef    = useRef(null)
  const waveParamsRef        = useRef(getWaveParams(downlink))
  const boardConnectedRef    = useRef(false)

  // waveParams を ref に同期 (ゲームループ内で参照)
  useEffect(() => {
    waveParamsRef.current = getWaveParams(downlink)
  }, [downlink])

  useEffect(() => {
    boardConnectedRef.current = boardConnected
  }, [boardConnected])

  // ── メインゲームループ ──
  useEffect(() => {
    let rafId

    const loop = (timestamp) => {
      rafId = requestAnimationFrame(loop)

      const wp          = waveParamsRef.current
      const elapsedTime = elapsedTimeRef.current

      // ── バランス判定 ──
      const targetX = calcWaveTilt(wp.amplitude, wp.frequency, wp.speed, wp.turbulence, elapsedTime)
      const copX    = boardConnectedRef.current ? copRef.current.x : 0
      const diff    = Math.abs(targetX - copX)
      const ok      = diff < BALANCE_TOLERANCE

      setBalance({ copX, targetX, ok, boardConnected: boardConnectedRef.current })

      if (!ok) {
        if (!imbalanceStartRef.current) {
          imbalanceStartRef.current = timestamp
        } else if (timestamp - imbalanceStartRef.current > IMBALANCE_TIMEOUT) {
          imbalanceStartRef.current = null
          livesRef.current -= 1
          setLives(livesRef.current)
          if (livesRef.current <= 0) {
            onGameOver(Math.floor(scoreRef.current))
            return
          }
        }
      } else {
        imbalanceStartRef.current = null
        // バランス維持ボーナス (微量)
        scoreRef.current += wp.difficultyMultiplier * 0.05
        setScore(Math.floor(scoreRef.current))
      }

    }

    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [copRef])

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      <R3FGameCanvas
        waveParams={getWaveParams(downlink)}
        personCanvas={personCanvas}
        onElapsedTime={(t) => { elapsedTimeRef.current = t }}
      />

      {/* レイヤー: HUD */}
      <HUD
        score={score}
        lives={lives}
        balance={balance}
        waveLabel={getWaveParams(downlink).label}
        difficultyMultiplier={getWaveParams(downlink).difficultyMultiplier}
        lastAction={lastAction}
      />

      <div style={s.maskStatus}>{personMaskStatus}</div>

      {/* Wii Board 接続ボタン */}
      {!boardConnected && (
        <button onClick={connectBoard} style={s.boardBtn}>
          Wii Board 接続
        </button>
      )}
    </div>
  )
}

const s = {
  maskStatus: {
    position: 'absolute', top: 12, left: 12,
    background: 'rgba(0,0,0,0.55)', color: '#fff',
    padding: '4px 10px', borderRadius: 6, fontSize: 13, fontFamily: 'monospace',
    pointerEvents: 'none',
  },
  boardBtn: {
    position: 'absolute', bottom: 20, right: 20,
    padding: '8px 18px', background: '#1a4fc4', color: '#fff',
    border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 13,
  },
}
