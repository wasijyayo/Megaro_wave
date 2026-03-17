import { useState, useRef, useEffect, useCallback } from 'react'
import R3FGameCanvas  from './R3FGameCanvas.jsx'
import HUD            from './HUD.jsx'
import { useWifiStats }  from '../../hooks/useWifiStats.js'
import { useWiiBoard }   from '../../hooks/useWiiBoard.js'
import { usePersonPoseAndSegmentation } from '../../hooks/usePersonPoseAndSegmentation.ts'
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
  const { canvas: personCanvas, status: personMaskStatus, poseData } = usePersonPoseAndSegmentation()

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
  const lastActionRef        = useRef(null)

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

      const wpf          = waveParamsRef.current
      const elapsedTime = elapsedTimeRef.current

      // ── ポーズ判定 (MediaPipe Landmarks) ──
      // しゃがみ(Squat): 膝(左右どちらか)が > 0.8
      // ジャンプ(Jump): 膝(左右どちらか)が < 0.4
      // 両手: 右腕(RIGHT_WRIST) < 右肩(RIGHT_SHOULDER) かつ 左腕(LEFT_WRIST) > 左肩(LEFT_SHOULDER)
      let actionLabel = null
      if (poseData && poseData.landmarks && poseData.landmarks.length > 0) {
        const lm = poseData.landmarks[0]
        
        // MediaPipe Pose landmarks indices
        // 11: left shoulder, 12: right shoulder
        // 15: left wrist, 16: right wrist
        // 25: left knee, 26: right knee
        
        if (lm[25] && lm[26]) {
          const kneeY = Math.min(lm[25].y, lm[26].y) // より上にある(値が小さい)方の膝を基準にする
          const maxKneeY = Math.max(lm[25].y, lm[26].y) // より下にある(値が大きい)方の膝
          
          if (maxKneeY > 0.8) {
            actionLabel = "Squat"
          } else if (kneeY < 0.4) {
            actionLabel = "Jump"
          }
        }
        
        if (!actionLabel && lm[11] && lm[12] && lm[15] && lm[16]) {
          // 右手上げ: 右手首(16)のY < 右肩(12)のY   左手下げ: 左手首(15)のY > 左肩(11)のY
          if (lm[16].y < lm[12].y && lm[15].y > lm[11].y) {
            actionLabel = "Right Up, Left Down"
          }
        }
      }

      if (actionLabel && (!lastActionRef.current || lastActionRef.current.label !== actionLabel)) {
        const newAction = { id: Date.now(), label: actionLabel, points: 500 }
        lastActionRef.current = newAction
        setLastAction(newAction)
        
        // アクションによるボーナス加算
        scoreRef.current += 500
        setScore(Math.floor(scoreRef.current))
      } else if (!actionLabel && lastActionRef.current) {
        lastActionRef.current = null
        // 意図的に setLastAction(null) を呼ばないことでHUDのPopupを残すか、
        // あるいは消すなら null をセット (表示時間が短くなるかも)
        // ここでは一旦そのまま (HUD側のフェードアウト任せ or 次のアクションまで残す)
      }

      // ── バランス判定 ──
      const targetX = calcWaveTilt(wpf.amplitude, wpf.frequency, wpf.speed, wpf.turbulence, elapsedTime)
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
        scoreRef.current += wpf.difficultyMultiplier * 0.05
        setScore(Math.floor(scoreRef.current))
      }

    }

    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [copRef, poseData, onGameOver])

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      <R3FGameCanvas
        waveParams={getWaveParams(downlink)}
        personCanvas={personCanvas}
        onElapsedTime={(t) => { elapsedTimeRef.current = t }}
        lastAction={lastAction}
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
