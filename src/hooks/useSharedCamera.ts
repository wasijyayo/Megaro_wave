import { useEffect, useState } from 'react'

let sharedStream: MediaStream | null = null
let sharedVideo: HTMLVideoElement | null = null
let initPromise: Promise<void> | null = null
let refCount = 0
let stopTimer: ReturnType<typeof setTimeout> | null = null

export function useSharedCamera(options?: { width?: number; height?: number }) {
  const { width = 720, height = 1280 } = options || {}
  const [video, setVideo] = useState<HTMLVideoElement | null>(null)
  const [status, setStatus] = useState('初期化中...')

  useEffect(() => {
    // StrictModeの遅延停止タイマーが残っていればキャンセル（カメラを継続使用）
    if (stopTimer !== null) {
      clearTimeout(stopTimer)
      stopTimer = null
    }

    refCount++
    let cancelled = false

    async function init() {
      try {
        setStatus('カメラ初期化中...')
        if (!initPromise) {
          initPromise = (async () => {
            sharedStream = await navigator.mediaDevices.getUserMedia({ video: { width, height } })
            sharedVideo = document.createElement('video')
            sharedVideo.playsInline = true
            sharedVideo.muted = true
            sharedVideo.srcObject = sharedStream
            await sharedVideo.play()
          })()
        }

        await initPromise
        if (cancelled) return
        setVideo(sharedVideo)
        setStatus('実行中')
      } catch (e) {
        if (!cancelled) setStatus(`エラー: ${String(e)}`)
      }
    }

    init()

    return () => {
      cancelled = true
      refCount--
      if (refCount <= 0) {
        // すぐに停止せず少し待つ
        // StrictModeのcleanup→remountが200ms以内に来た場合はタイマーをキャンセルして継続使用
        stopTimer = setTimeout(() => {
          stopTimer = null
          if (refCount > 0) return // remountされていたら停止しない
          sharedStream?.getTracks().forEach(t => t.stop())
          if (sharedVideo) {
            try { sharedVideo.pause() } catch (_) {}
            sharedVideo.srcObject = null
          }
          sharedStream = null
          sharedVideo   = null
          initPromise   = null
        }, 200)
      }
    }
  }, [width, height])

  return { video, status }
}
