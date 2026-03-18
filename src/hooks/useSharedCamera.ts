import { useEffect, useState } from 'react'

let sharedStream: MediaStream | null = null
let sharedVideo: HTMLVideoElement | null = null
let initPromise: Promise<void> | null = null
let refCount = 0

export function useSharedCamera(options?: { width?: number; height?: number }) {
  const { width = 720, height = 1280 } = options || {}
  const [video, setVideo] = useState<HTMLVideoElement | null>(null)
  const [status, setStatus] = useState('初期化中...')

  useEffect(() => {
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
        if (sharedStream) {
          sharedStream.getTracks().forEach(t => t.stop())
        }
        if (sharedVideo) {
          try { sharedVideo.pause() } catch (_) {}
          sharedVideo.srcObject = null
        }
        sharedStream = null
        sharedVideo = null
        initPromise = null
      }
    }
  }, [width, height])

  return { video, status }
}
