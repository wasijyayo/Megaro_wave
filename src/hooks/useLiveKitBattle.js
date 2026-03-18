import { useState, useRef, useCallback, useEffect } from 'react'
import {
  Room,
  RoomEvent,
  Track,
  VideoPresets,
  createLocalVideoTrack,
} from 'livekit-client'
import { getLiveKitToken } from '../firebase.js'

// ── データチャンネルのメッセージ種別 ──────────────────────
export const MSG = {
  START:           'start',           // ホスト→ゲスト: ゲーム開始
  SCORE:           'score',           // 両者: スコア同期
  GAME_OVER:       'game_over',       // 両者: ゲーム終了
  REMATCH_REQUEST: 'rematch_request', // どちらか: 再戦申請
  REMATCH_ACCEPT:  'rematch_accept',  // どちらか: 再戦承諾
  REMATCH_DECLINE: 'rematch_decline', // どちらか: 退出
}

const encoder = new TextEncoder()
const decoder = new TextDecoder()

/**
 * LiveKit 対戦フック
 * @param {(msg: object) => void} onMessage - データチャンネル受信コールバック
 */
export function useLiveKitBattle({ onMessage } = {}) {
  const roomRef           = useRef(null)
  const connectPromiseRef = useRef(null) // 接続中の Promise（二重接続を待機に変える）
  const cameraRef         = useRef(null) // 公開済みカメラトラック
  const onMsgRef          = useRef(onMessage)

  const [connected,          setConnected]          = useState(false)
  const [remoteParticipant,  setRemoteParticipant]  = useState(null)
  const [remoteVideoTrack,   setRemoteVideoTrack]   = useState(null) // 相手のカメラ映像

  // onMessage が変わっても最新を参照できるよう ref に同期
  useEffect(() => { onMsgRef.current = onMessage }, [onMessage])

  // ── 接続 ─────────────────────────────────────────────
  const connect = useCallback(async (roomName) => {
    if (roomRef.current) return // 接続済み

    // 接続中なら完了を待つ（StrictModeの二重実行で2回目がpublishCameraを空振りするのを防ぐ）
    if (connectPromiseRef.current) {
      await connectPromiseRef.current
      return
    }

    let resolveFn, rejectFn
    connectPromiseRef.current = new Promise((res, rej) => { resolveFn = res; rejectFn = rej })

    let token, url
    try {
      ;({ token, url } = await getLiveKitToken(roomName))
    } catch (e) {
      connectPromiseRef.current = null
      rejectFn(e)
      throw e
    }

    const room = new Room({
      adaptiveStream:    true,  // 回線に合わせて自動品質調整
      dynacast:          true,  // 不要なトラックの送信を自動停止
      videoCaptureDefaults: {
        resolution: VideoPresets.h360.resolution, // 360p（負荷軽減）
      },
    })

    // ── イベントリスナー ──
    room.on(RoomEvent.ParticipantConnected, (participant) => {
      setRemoteParticipant(participant)
    })

    room.on(RoomEvent.ParticipantDisconnected, () => {
      setRemoteParticipant(null)
      setRemoteVideoTrack(null)
    })

    // 相手のカメラトラックを受け取る
    room.on(RoomEvent.TrackSubscribed, (track, _pub, _participant) => {
      if (track.kind === Track.Kind.Video) {
        setRemoteVideoTrack(track)
      }
    })

    room.on(RoomEvent.TrackUnsubscribed, (track) => {
      if (track.kind === Track.Kind.Video) {
        setRemoteVideoTrack(null)
      }
    })

    // データチャンネル受信
    room.on(RoomEvent.DataReceived, (payload) => {
      try {
        const msg = JSON.parse(decoder.decode(payload))
        onMsgRef.current?.(msg)
      } catch { /* 不正データは無視 */ }
    })

    room.on(RoomEvent.Disconnected, () => {
      setConnected(false)
      setRemoteParticipant(null)
      setRemoteVideoTrack(null)
      roomRef.current         = null
      connectPromiseRef.current = null
      cameraRef.current       = null
    })

    try {
      await room.connect(url, token)
    } catch (e) {
      connectPromiseRef.current = null
      rejectFn(e)
      throw e
    }

    roomRef.current = room
    setConnected(true)

    // すでに参加済みの参加者を反映（ルームに入る前に誰かがいた場合）
    const existing = [...room.remoteParticipants.values()]
    if (existing.length > 0) {
      setRemoteParticipant(existing[0])
      existing[0].trackPublications.forEach((pub) => {
        if (pub.kind === Track.Kind.Video) {
          if (pub.track) {
            // 既にサブスクライブ済み
            setRemoteVideoTrack(pub.track)
          } else {
            // サブスクライブ未完了 → 明示的にリクエスト → TrackSubscribed が発火する
            pub.setSubscribed(true)
          }
        }
      })
    }

    // 接続完了を通知（待機中の呼び出し元が publishCamera() を続行できる）
    resolveFn()
    connectPromiseRef.current = null
  }, [])

  // ── カメラ公開 ─────────────────────────────────────
  const publishCamera = useCallback(async () => {
    const room = roomRef.current
    if (!room || cameraRef.current) return // 二重公開防止
    const track = await createLocalVideoTrack({
      resolution: VideoPresets.h360.resolution,
    })
    await room.localParticipant.publishTrack(track)
    cameraRef.current = track
  }, [])

  // ── データ送信 ─────────────────────────────────────
  const sendMessage = useCallback((msg) => {
    const room = roomRef.current
    if (!room) return
    const data = encoder.encode(JSON.stringify(msg))
    room.localParticipant.publishData(data, { reliable: true })
  }, [])

  // ── 切断 ──────────────────────────────────────────
  const disconnect = useCallback(async () => {
    await roomRef.current?.disconnect()
    roomRef.current           = null
    connectPromiseRef.current = null
    cameraRef.current         = null
    setConnected(false)
    setRemoteParticipant(null)
    setRemoteVideoTrack(null)
  }, [])

  // アンマウント時に自動切断
  useEffect(() => {
    return () => { roomRef.current?.disconnect() }
  }, [])

  return {
    connected,
    remoteParticipant,
    remoteVideoTrack,  // <video> 要素に attach して相手映像を表示
    connect,
    disconnect,
    publishCamera,
    sendMessage,
    room: roomRef,     // 直接アクセスが必要な場合用
  }
}
