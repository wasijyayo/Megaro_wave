import { useEffect, useState, useRef } from 'react'
import {
  FilesetResolver,
  PoseLandmarker,
  type PoseLandmarkerResult,
} from '@mediapipe/tasks-vision'

const WASM_URL =
  'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task'

export function usePersonPoseAndSegmentation() {
  const [canvas] = useState<HTMLCanvasElement>(() => {
    const c = document.createElement('canvas')
    c.width = 1280
    c.height = 720
    return c
  })

  const [status, setStatus] = useState('初期化中...')
  // ポーズの landmarks を保持する state
  const [poseData, setPoseData] = useState<PoseLandmarkerResult | null>(null)

  useEffect(() => {
    let cancelled = false
    let raf = 0
    let landmarker: PoseLandmarker | null = null
    let stream: MediaStream | null = null
    const maskCanvas = document.createElement('canvas')

    async function init() {
      try {
        setStatus('WASM 読み込み中...')
        const vision = await FilesetResolver.forVisionTasks(WASM_URL)

        setStatus('モデル読み込み中...')
        const lm = await PoseLandmarker.createFromOptions(vision, {
          baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
          runningMode: 'VIDEO',
          numPoses: 1,
          outputSegmentationMasks: true, // セグメンテーションも同時に出力
        })
        if (cancelled) { lm.close(); return }
        landmarker = lm

        setStatus('カメラ起動中...')
        const s = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720 },
        })
        if (cancelled) { s.getTracks().forEach(t => t.stop()); return }
        stream = s

        const video = document.createElement('video')
        video.playsInline = true
        video.muted = true
        video.srcObject = stream
        await video.play()

        setStatus('実行中')

        function loop() {
          if (cancelled) return
          if (video.readyState < 2) {
            raf = requestAnimationFrame(loop)
            return
          }
          
          try {
            if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
              canvas.width = video.videoWidth
              canvas.height = video.videoHeight
            }

            const ctx = canvas.getContext('2d')!
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(video, 0, 0)

            const timestamp = performance.now()
            const result = landmarker!.detectForVideo(video, timestamp)
            
            // ポーズデータ(landmarks)の更新
            setPoseData(result)

            // セグメンテーションマスクの処理
            const masks = result.segmentationMasks
            if (masks && masks.length > 0) {
              const mask = masks[0]
              if (maskCanvas.width !== mask.width || maskCanvas.height !== mask.height) {
                maskCanvas.width = mask.width
                maskCanvas.height = mask.height
              }
              
              // MPMask は getAsFloat32Array() または getAsUint8Array() を持っている
              const maskData = mask.getAsFloat32Array ? mask.getAsFloat32Array() : mask.getAsUint8Array()
              const maskCtx = maskCanvas.getContext('2d')!
              const imgData = maskCtx.createImageData(mask.width, mask.height)

              // 閾値処理：ある程度確信度が高ければ人物(=255)として扱う
              // maskData[i] の値は通常 0.0 ~ 1.0 (float32の場合) または 0 ~ 255 (uint8の場合)
              const isFloat = !!mask.getAsFloat32Array
              const threshold = isFloat ? 0.3 : 127
              for (let i = 0; i < maskData.length; i++) {
                imgData.data[i * 4]     = 255
                imgData.data[i * 4 + 1] = 255
                imgData.data[i * 4 + 2] = 255
                imgData.data[i * 4 + 3] = maskData[i] > threshold ? 255 : 0
              }
              maskCtx.putImageData(imgData, 0, 0)

              ctx.globalCompositeOperation = 'destination-in'
              ctx.drawImage(maskCanvas, 0, 0, canvas.width, canvas.height)
              ctx.globalCompositeOperation = 'source-over'
              
              if (mask.close) { mask.close() }
            }

            raf = requestAnimationFrame(loop)
          } catch (err) {
            setStatus(`ループ内エラー: ${err instanceof Error ? err.message : String(err)}`)
          }
        }
        loop()
      } catch (e) {
        if (!cancelled) setStatus(`エラー: ${String(e)}`)
      }
    }

    init()

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      landmarker?.close()
      stream?.getTracks().forEach(t => t.stop())
    }
  }, [canvas])

  return { canvas, status, poseData }
}
