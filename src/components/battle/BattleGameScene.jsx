import { useEffect, useRef } from 'react'
import GameScene from '../game/GameScene.jsx'
import { MSG } from '../../hooks/useLiveKitBattle.js'

// 相手のカメラ映像を表示するコンポーネント
function OpponentVideo({ track }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!track || !containerRef.current) return
    const el = track.attach()
    el.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:8px;transform:scaleX(-1)'
    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(el)
    return () => track.detach()
  }, [track])

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
      />

      {/* 相手の映像 + スコア */}
      <div style={s.opponentPanel}>
        <div style={s.videoBox}>
          {remoteVideoTrack
            ? <OpponentVideo track={remoteVideoTrack} />
            : <div style={s.noVideo}>映像なし</div>
          }
        </div>
        <div style={s.opponentLabel}>相手</div>
        <div style={s.opponentScore}>{opponentScore.toLocaleString()}</div>
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
    top: 80,
    left: 16,
    width: 160,
    background: 'rgba(4,12,26,0.8)',
    borderRadius: 10,
    border: '1px solid #1e3a6a',
    padding: 8,
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
  noVideo: {
    width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#444', fontSize: 11,
  },
  opponentLabel: {
    fontSize: 10, color: '#888', textAlign: 'center',
    marginTop: 6, letterSpacing: '0.08em', textTransform: 'uppercase',
  },
  opponentScore: {
    fontSize: 20, fontWeight: 900, color: '#fff',
    textAlign: 'center', textShadow: '0 0 12px #00aaff',
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
