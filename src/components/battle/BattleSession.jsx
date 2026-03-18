import { useState, useCallback, useRef } from 'react'
import { useLiveKitBattle, MSG } from '../../hooks/useLiveKitBattle.js'
import BattleLobbyScreen    from './BattleLobbyScreen.jsx'
import BattleWaitingScreen  from './BattleWaitingScreen.jsx'
import BattleGameScene      from './BattleGameScene.jsx'
import BattleGameOver       from './BattleGameOver.jsx'
import { usePersonSegmentation } from '../../hooks/usePersonSegmentation.js'

/**
 * 対戦セッション管理
 * LiveKit 接続を維持しつつ lobby→waiting→game→gameover を制御する
 */
export default function BattleSession({ wiiBoard, onExit }) {
  const { canvas: myTransparentCanvas, gbCanvas: myGbCanvas } = usePersonSegmentation()
  const [phase,         setPhase]         = useState('lobby')
  // waiting / game フェーズで共有する情報
  const [roomName,      setRoomName]      = useState(null)
  const [isHost,        setIsHost]        = useState(false)
  const [waveParams,    setWaveParams]    = useState(null)
  const [wifiLabel,     setWifiLabel]     = useState('')
  const [myScore,       setMyScore]       = useState(0)
  const [opponentScore, setOpponentScore] = useState(0)

  // 相手の最終スコアを ref で保持（gameover 判定用）
  const opponentFinalRef = useRef(null)
  const myFinalRef       = useRef(null)

  // ── データチャンネル受信ハンドラ ──────────────────────
  const handleMessage = useCallback((msg) => {
    switch (msg.type) {
      case MSG.START:
        // ゲスト側: ホストからゲーム開始通知を受信
        setWaveParams(msg.waveParams)
        setWifiLabel(msg.wifiLabel)
        setPhase('game')
        break

      case MSG.SCORE:
        setOpponentScore(msg.value)
        break

      case MSG.GAME_OVER:
        opponentFinalRef.current = msg.score
        setOpponentScore(msg.score)
        // 自分もゲームオーバー済みなら結果画面へ
        if (myFinalRef.current !== null) setPhase('gameover')
        break

      case MSG.REMATCH_REQUEST:
        setPhase('rematch_pending')
        break

      case MSG.REMATCH_ACCEPT:
        // 両者合意 → 再戦
        setMyScore(0)
        setOpponentScore(0)
        myFinalRef.current       = null
        opponentFinalRef.current = null
        setPhase('game')
        break

      case MSG.REMATCH_DECLINE:
        setPhase('lobby')
        break
    }
  }, [])

  const liveKit = useLiveKitBattle({ onMessage: handleMessage })

  // ── ロビー: ルームに入る ──────────────────────────────
  const handleEnterRoom = async (name, host) => {
    setRoomName(name)
    setIsHost(host)
    // BattleWaitingScreen に接続を委譲（liveKit を prop で渡す）
    setPhase('waiting')
  }

  // ── 待機室: ゲーム開始（ホスト側） ──────────────────
  const handleGameStart = (params, label) => {
    setWaveParams(params)
    setWifiLabel(label)
    setMyScore(0)
    setOpponentScore(0)
    myFinalRef.current       = null
    opponentFinalRef.current = null
    setPhase('game')
  }

  // ── ゲーム終了 ────────────────────────────────────────
  const handleGameOver = (score) => {
    myFinalRef.current = score
    setMyScore(score)
    // 相手もゲームオーバー済みなら結果画面へ
    if (opponentFinalRef.current !== null) setPhase('gameover')
    // 相手がまだなら待つ（MSG.GAME_OVER を受信したら遷移）
  }

  // ── 再戦申請 ─────────────────────────────────────────
  const handleRematchRequest = () => {
    liveKit.sendMessage({ type: MSG.REMATCH_REQUEST })
    setPhase('rematch_sent')
  }

  const handleRematchAccept = () => {
    liveKit.sendMessage({ type: MSG.REMATCH_ACCEPT })
    setMyScore(0)
    setOpponentScore(0)
    myFinalRef.current       = null
    opponentFinalRef.current = null
    setPhase('game')
  }

  const handleRematchDecline = () => {
    liveKit.sendMessage({ type: MSG.REMATCH_DECLINE })
    liveKit.disconnect()
    setPhase('lobby')
  }

  // ── ロビーに戻る ─────────────────────────────────────
  const handleLeave = () => {
    liveKit.disconnect()
    setPhase('lobby')
  }

  // ── レンダリング ─────────────────────────────────────
  if (phase === 'lobby') {
    return (
      <BattleLobbyScreen
        wiiBoard={wiiBoard}
        onEnterRoom={handleEnterRoom}
        onBack={onExit}
      />
    )
  }

  if (phase === 'waiting') {
    return (
      <BattleWaitingScreen
        roomName={roomName}
        isHost={isHost}
        liveKit={liveKit}
        gbCanvas={myGbCanvas}
        onGameStart={handleGameStart}
        onLeave={handleLeave}
      />
    )
  }

  if (phase === 'game') {
    return (
      <BattleGameScene
        wiiBoard={wiiBoard}
        waveParamsOverride={waveParams}
        wifiLabel={wifiLabel}
        sendMessage={liveKit.sendMessage}
        remoteVideoTrack={liveKit.remoteVideoTrack}
        opponentScore={opponentScore}
        onGameOver={handleGameOver}
        myCanvas={myTransparentCanvas}
      />
    )
  }

  if (phase === 'gameover' || phase === 'rematch_sent' || phase === 'rematch_pending') {
    return (
      <BattleGameOver
        myScore={myFinalRef.current ?? myScore}
        opponentScore={opponentFinalRef.current ?? opponentScore}
        phase={phase}
        onRematchRequest={handleRematchRequest}
        onRematchAccept={handleRematchAccept}
        onRematchDecline={handleRematchDecline}
        onLeave={handleLeave}
      />
    )
  }

  return null
}
