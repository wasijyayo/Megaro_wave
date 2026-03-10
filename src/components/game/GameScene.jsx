import { useState, useRef, useEffect, useCallback } from 'react'
import WaveCanvas     from './WaveCanvas.jsx'
import PlayerOverlay  from './PlayerOverlay.jsx'
import HUD            from './HUD.jsx'
import { useWifiStats }  from '../../hooks/useWifiStats.js'
import { useWiiBoard }   from '../../hooks/useWiiBoard.js'
import { useMediaPipe }  from '../../hooks/useMediaPipe.js'
import { getWaveParams, calcWaveTilt } from '../../utils/waveParams.js'
import { ACTIONS, calcPoints }         from '../../utils/scoring.js'

// ── 定数 ──────────────────────────────────────────────────
const TOTAL_LIVES        = 3
const BALANCE_TOLERANCE  = 0.28   // CoP と目標傾きの許容差 (-1〜1)
const IMBALANCE_TIMEOUT  = 2000   // ms: この時間超えるとライフ -1
const CROUCH_COOLDOWN    = 2000   // ms: しゃがみ判定のクールダウン
const JUMP_THRESHOLD     = 0.038  // 腰の Y 座標変化量 (上昇)
const JUMP_RESET         = 0.015  // ジャンプリセット閾値

// ─────────────────────────────────────────────────────────
export default function GameScene({ playerName, onGameOver }) {
  const waveCanvasRef = useRef(null)

  // ── hooks ──
  const { downlink }                          = useWifiStats()
  const { connected: boardConnected, copRef, connect: connectBoard } = useWiiBoard()
  const mediaPipe                             = useMediaPipe()

  // ── UI state ──
  const [score,      setScore]      = useState(0)
  const [lives,      setLives]      = useState(TOTAL_LIVES)
  const [balance,    setBalance]    = useState({ copX: 0, targetX: 0, ok: true, boardConnected: false })
  const [lastAction, setLastAction] = useState(null)

  // ── ゲームロジック用 refs (state 更新による effect 再起動を避ける) ──
  const scoreRef             = useRef(0)
  const livesRef             = useRef(TOTAL_LIVES)
  const imbalanceStartRef    = useRef(null)
  const prevHipYRef          = useRef(null)
  const jumpActiveRef        = useRef(false)
  const lastCrouchRef        = useRef(0)
  const actionIdRef          = useRef(0)
  const waveParamsRef        = useRef(getWaveParams(downlink))
  const boardConnectedRef    = useRef(false)

  // waveParams を ref に同期 (ゲームループ内で参照)
  useEffect(() => {
    waveParamsRef.current = getWaveParams(downlink)
  }, [downlink])

  useEffect(() => {
    boardConnectedRef.current = boardConnected
  }, [boardConnected])

  // ── MediaPipe 初期化 ──
  useEffect(() => {
    mediaPipe.init()
    return () => mediaPipe.destroy()
  }, [])   // eslint-disable-line

  // ── アクション通知 ──
  const showAction = useCallback((action, multiplier) => {
    const points = calcPoints(action, multiplier)
    scoreRef.current += points
    setScore(Math.floor(scoreRef.current))
    actionIdRef.current += 1
    setLastAction({ label: action.label, points, id: actionIdRef.current })
    setTimeout(() => setLastAction(null), 1200)
  }, [])

  // ── ポーズ検出 (ジャンプ / トリック / しゃがみ) ──
  const detectPoseActions = useCallback((landmarks, timestamp, multiplier) => {
    // MediaPipe Pose landmark index
    const lhip  = landmarks[23], rhip  = landmarks[24]
    const lsh   = landmarks[11], rsh   = landmarks[12]
    const lwrist = landmarks[15], rwrist = landmarks[16]
    const lknee = landmarks[25], rknee = landmarks[26]

    const hipY = (lhip.y + rhip.y) / 2

    // ジャンプ検出: 腰のY座標が上昇 (値が減少)
    if (prevHipYRef.current !== null) {
      const dy = prevHipYRef.current - hipY   // 正 = 上昇

      if (dy > JUMP_THRESHOLD && !jumpActiveRef.current) {
        jumpActiveRef.current = true
        // 両手が肩より高ければトリック
        const armsUp = lwrist.y < lsh.y && rwrist.y < rsh.y
        showAction(armsUp ? ACTIONS.TRICK : ACTIONS.JUMP, multiplier)
      }
      if (dy < -JUMP_RESET) jumpActiveRef.current = false
    }
    prevHipYRef.current = hipY

    // しゃがみ検出: 膝が腰に近い (knee.y - hip.y が小さい)
    const lCrouch = lknee.y - lhip.y < 0.11
    const rCrouch = rknee.y - rhip.y < 0.11
    if (lCrouch && rCrouch && timestamp - lastCrouchRef.current > CROUCH_COOLDOWN) {
      lastCrouchRef.current = timestamp
      showAction(ACTIONS.CROUCH, multiplier)
    }
  }, [showAction])

  // ── メインゲームループ ──
  useEffect(() => {
    if (!mediaPipe.ready) return

    let rafId

    const loop = (timestamp) => {
      rafId = requestAnimationFrame(loop)

      const wp          = waveParamsRef.current
      const elapsedTime = waveCanvasRef.current?.getElapsedTime() ?? 0

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

      // ── ポーズ検出 ──
      const results = mediaPipe.detect(timestamp)
      if (results?.landmarks?.length > 0) {
        detectPoseActions(results.landmarks[0], timestamp, wp.difficultyMultiplier)
      }
    }

    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [mediaPipe.ready])   // eslint-disable-line

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      {/* レイヤー 1: Three.js 波 */}
      <WaveCanvas ref={waveCanvasRef} waveParams={getWaveParams(downlink)} />

      {/* hidden video 要素 (MediaPipe が参照) */}
      <video
        ref={mediaPipe.videoRef}
        style={{ display: 'none' }}
        playsInline
        muted
      />

      {/* レイヤー 2: 背景除去済みプレイヤー */}
      <PlayerOverlay
        videoRef={mediaPipe.videoRef}
        detect={mediaPipe.detect}
        ready={mediaPipe.ready}
      />

      {/* レイヤー 3: HUD */}
      <HUD
        score={score}
        lives={lives}
        balance={balance}
        waveLabel={getWaveParams(downlink).label}
        difficultyMultiplier={getWaveParams(downlink).difficultyMultiplier}
        lastAction={lastAction}
      />

      {/* MediaPipe エラー表示 */}
      {mediaPipe.error && (
        <div style={s.errorBanner}>
          カメラエラー: {mediaPipe.error}
        </div>
      )}

      {/* MediaPipe 読み込み中 */}
      {!mediaPipe.ready && !mediaPipe.error && (
        <div style={s.loadingOverlay}>
          <div style={s.loadingText}>MediaPipe を初期化中...</div>
          <div style={{ fontSize: 13, color: '#666', marginTop: 8 }}>カメラの許可を求める場合があります</div>
        </div>
      )}

      {/* Wii Board 接続ボタン */}
      {!boardConnected && mediaPipe.ready && (
        <button onClick={connectBoard} style={s.boardBtn}>
          Wii Board 接続
        </button>
      )}
    </div>
  )
}

const s = {
  errorBanner: {
    position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)',
    background: '#500', color: '#faa', padding: '8px 20px', borderRadius: 8, fontSize: 13,
  },
  loadingOverlay: {
    position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    background: 'rgba(4,12,26,0.75)', color: '#fff', fontFamily: 'system-ui',
  },
  loadingText: { fontSize: 18, fontWeight: 600 },
  boardBtn: {
    position: 'absolute', bottom: 20, right: 20,
    padding: '8px 18px', background: '#1a4fc4', color: '#fff',
    border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 13,
  },
}
