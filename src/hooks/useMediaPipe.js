import { useState, useRef, useCallback } from 'react'
import { FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision'

const WASM_PATH  = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm'
const MODEL_PATH = 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task'

export function useMediaPipe() {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(null)

  const videoRef      = useRef(null)   // <video> 要素に attach する
  const landmarkerRef = useRef(null)
  const lastTimeRef   = useRef(-1)
  const resultsRef    = useRef(null)
  const initializedRef = useRef(false)

  const init = useCallback(async () => {
    if (initializedRef.current) return
    initializedRef.current = true

    const video = videoRef.current
    if (!video) { setError('video element not found'); return }

    try {
      // カメラ起動
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 640, height: 480 },
      })
      video.srcObject = stream
      await new Promise((resolve) => { video.onloadedmetadata = resolve })
      await video.play()

      // MediaPipe PoseLandmarker (セグメンテーションマスク付き)
      const vision = await FilesetResolver.forVisionTasks(WASM_PATH)
      landmarkerRef.current = await PoseLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: MODEL_PATH,
          delegate: 'GPU',
        },
        runningMode: 'VIDEO',
        numPoses: 1,
        outputSegmentationMasks: true,
      })

      setReady(true)
    } catch (e) {
      console.error('MediaPipe init error:', e)
      setError(e.message)
      initializedRef.current = false
    }
  }, [])

  /**
   * requestAnimationFrame のタイムスタンプを渡して検出を実行。
   * 同一フレームで複数回呼ばれてもモデル処理は1回だけ。
   */
  const detect = useCallback((timestamp) => {
    const video     = videoRef.current
    const landmarker = landmarkerRef.current
    if (!video || !landmarker || video.readyState < 2) return null

    if (timestamp === lastTimeRef.current) return resultsRef.current

    lastTimeRef.current = timestamp
    const results = landmarker.detectForVideo(video, timestamp)
    resultsRef.current = results
    return results
  }, [])

  const destroy = useCallback(() => {
    const video = videoRef.current
    if (video?.srcObject) {
      video.srcObject.getTracks().forEach((t) => t.stop())
    }
    landmarkerRef.current?.close()
    initializedRef.current = false
    setReady(false)
  }, [])

  return { ready, error, videoRef, resultsRef, init, detect, destroy }
}
