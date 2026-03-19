import { useEffect, useRef, useState } from 'react'
import GameScene from '../game/GameScene.jsx'
import { MSG } from '../../hooks/useLiveKitBattle.js'

// 相手のカメラ映像を表示するコンポーネント
function OpponentVideo({ track, onVideoElement }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!track || !containerRef.current) return
    const el = track.attach()
    el.muted = true
    el.playsInline = true
    el.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:8px;transform:scaleX(-1)'
    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(el)
    onVideoElement?.(el)

    return () => {
      onVideoElement?.(null)
      track.detach(el)
    }
  }, [track, onVideoElement])

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
}

/**
 * 対戦用ゲーム画面
 * 最新の GameScene をそのまま使い、WebRTC関連UI（相手映像・スコア）を重ねる
 */
export default function BattleGameScene({
  wiiBoard,
  waveParamsOverride,
  wifiLabel,
  sendMessage,
  remoteVideoTrack,
  opponentScore,
  onGameOver,
}) {
  const myScoreRef = useRef(0)
  const [remoteVideoElement, setRemoteVideoElement] = useState(null)

  // 1秒ごとにスコアをデータチャンネルで送信
  useEffect(() => {
    const id = setInterval(() => {
      sendMessage({ type: MSG.SCORE, value: myScoreRef.current })
    }, 1000)
    return () => clearInterval(id)
  }, [sendMessage])

  const handleScoreChange = (score) => {
    myScoreRef.current = score
  }

  const handleGameOver = (score) => {
    myScoreRef.current = score
    sendMessage({ type: MSG.GAME_OVER, score })
    onGameOver(score)
  }

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>

      {/* ゲーム本体（最新の GameScene をそのまま使用） */}
      <GameScene
        wiiBoard={wiiBoard}
        waveParamsOverride={waveParamsOverride}
        onGameOver={handleGameOver}
        onScoreChange={handleScoreChange}
        remoteVideoTrack={remoteVideoTrack}
        remoteVideoElement={remoteVideoElement}
      />

      {/* 相手の映像 + スコア */}
      <div style={s.opponentPanel}>
        <div style={s.opponentLabel}>相手</div>
        <div style={s.opponentScore}>{opponentScore.toLocaleString()}</div>
      </div>

      <div style={s.videoBox}>
        {/* 映像の再生自体は止めないために、見えない状態で置いておく */}
        <div style={{ display: 'none' }}>
          {remoteVideoTrack && (
            <OpponentVideo track={remoteVideoTrack} onVideoElement={setRemoteVideoElement} />
          )}
        </div>
      </div>

      {/* ステージ名（WiFi SSID） */}
      {wifiLabel && (
        <div style={s.stageLabel}>{wifiLabel}</div>
      )}
    </div>
  )
}

const s = {
  opponentPanel: {
    position: 'absolute',
    top: 180,
    left: 16,
    width: 120,
    background: 'rgba(4,12,26,0.8)',
    borderRadius: 10,
    border: '1px solid #1e3a6a',
    padding: 10,
    pointerEvents: 'none',
    zIndex: 30,
  },
  videoBox: {
    width: '100%',
    aspectRatio: '9/16',
    background: '#000',
    borderRadius: 8,
    overflow: 'hidden',
  },
  opponentLabel: {
    fontSize: 10, color: '#888', textAlign: 'center',
    letterSpacing: '0.08em', textTransform: 'uppercase',
  },
  opponentScore: {
    fontSize: 20, fontWeight: 900, color: '#fff',
    textAlign: 'center', textShadow: '0 0 12px #00aaff',
  },
  hiddenVideoHost: {
    position: 'absolute',
    width: 2,
    height: 2,
    overflow: 'hidden',
    opacity: 0,
    pointerEvents: 'none',
    left: -9999,
    top: -9999,
  },
  stageLabel: {
    position: 'absolute',
    top: 16, left: '50%',
    transform: 'translateX(-50%)',
    fontSize: 12, color: '#888',
    background: 'rgba(0,0,0,0.5)',
    padding: '4px 12px', borderRadius: 20,
    pointerEvents: 'none', zIndex: 30,
  },
}
