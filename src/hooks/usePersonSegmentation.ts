import { useEffect, useState } from 'react'
import { useSharedCamera } from './useSharedCamera'
import {
  FilesetResolver,
  ImageSegmenter,
  type ImageSegmenterResult,
} from '@mediapipe/tasks-vision'

const WASM_URL =
  'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/latest/selfie_multiclass_256x256.tflite'

function getCenterCropRect(sourceWidth: number, sourceHeight: number, targetWidth: number, targetHeight: number) {
  const sourceRatio = sourceWidth / sourceHeight
  const targetRatio = targetWidth / targetHeight

  let sx = 0
  let sy = 0
  let sW = sourceWidth
  let sH = sourceHeight

  if (sourceRatio > targetRatio) {
    sH = sourceHeight
    sW = sH * targetRatio
    sx = (sourceWidth - sW) / 2
  } else {
    sW = sourceWidth
    sH = sW / targetRatio
    sy = (sourceHeight - sH) / 2
  }

  return { sx, sy, sW, sH }
}

/**
 * MediaPipe で人体をセグメンテーションし、結果（背景透過）を
 * オフスクリーン canvas に毎フレーム書き込む。
 * canvas の参照は安定しているため THREE.CanvasTexture に渡せる。
 */
export function usePersonSegmentation() {
  // useState initializer で canvas を初回レンダー時に生成（参照が安定する）
  //自分の映像を表示する用のキャンバス（背景透過）
  const [canvas] = useState<HTMLCanvasElement>(() => {
    const c = document.createElement('canvas')
    c.width = 720
    c.height = 1280
    return c
  })
  // ──── 配信用（LiveKit用）のグリーンバックキャンバス ────
  const [gbCanvas] = useState<HTMLCanvasElement>(() => {
    const c = document.createElement('canvas')
    c.width = 720
    c.height = 1280
    return c
  })
  const [status, setStatus] = useState('初期化中...')

  const { video: sharedVideo, status: camStatus } = useSharedCamera({ width: 720, height: 1280 })

  useEffect(() => {
    let cancelled = false
    let raf = 0
    let segmenter: ImageSegmenter | null = null
    const maskCanvas = document.createElement('canvas')

    async function init() {
      try {
        setStatus('WASM 読み込み中...')
        const vision = await FilesetResolver.forVisionTasks(WASM_URL)

        setStatus('モデル読み込み中...')
        const seg = await ImageSegmenter.createFromOptions(vision, {
          baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
          runningMode: 'VIDEO',
          outputCategoryMask: true,
          outputConfidenceMasks: false,
        })
        if (cancelled) { seg.close(); return }
        segmenter = seg

        if (!sharedVideo) {
          setStatus(camStatus)
          return
        }

        const video = sharedVideo
        setStatus('実行中')

        function loop() {
          if (cancelled) return
          if (video.readyState < 2) {
            raf = requestAnimationFrame(loop)
            return
          }
          // 固定の縦長キャンバスに中央クロップして描画
          const TARGET_W = canvas.width
          const TARGET_H = canvas.height
          if (canvas.width !== TARGET_W || canvas.height !== TARGET_H) {
            canvas.width = TARGET_W
            canvas.height = TARGET_H
          }
          const ctx = canvas.getContext('2d')!
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          const crop = getCenterCropRect(video.videoWidth, video.videoHeight, canvas.width, canvas.height)
          ctx.drawImage(video, crop.sx, crop.sy, crop.sW, crop.sH, 0, 0, canvas.width, canvas.height)

          segmenter!.segmentForVideo(video, performance.now(), (result: ImageSegmenterResult) => {
            const mask = result.categoryMask
            if (!mask) return

            if (maskCanvas.width !== mask.width || maskCanvas.height !== mask.height) {
              maskCanvas.width = mask.width
              maskCanvas.height = mask.height
            }
            const maskCtx = maskCanvas.getContext('2d')!
            const maskData = mask.getAsUint8Array()
            const imgData = maskCtx.createImageData(mask.width, mask.height)

            for (let i = 0; i < maskData.length; i++) {
              imgData.data[i * 4]     = 255
              imgData.data[i * 4 + 1] = 255
              imgData.data[i * 4 + 2] = 255
              imgData.data[i * 4 + 3] = maskData[i] === 0 ? 0 : 255
            }
            maskCtx.putImageData(imgData, 0, 0)

            const maskCrop = getCenterCropRect(maskCanvas.width, maskCanvas.height, canvas.width, canvas.height)

            ctx.globalCompositeOperation = 'destination-in'
            ctx.drawImage(
              maskCanvas,
              maskCrop.sx,
              maskCrop.sy,
              maskCrop.sW,
              maskCrop.sH,
              0,
              0,
              canvas.width,
              canvas.height,
            )
            ctx.globalCompositeOperation = 'source-over'
            
            // ──── 配信用グリーンバックの生成処理 ────
            if (gbCanvas.width !== canvas.width || gbCanvas.height !== canvas.height) {
              gbCanvas.width = canvas.width
              gbCanvas.height = canvas.height
            }
            const gbCtx = gbCanvas.getContext('2d')!
            // 1. 緑色（クロマキー用）で塗りつぶす
            gbCtx.fillStyle = '#00FF00'
            gbCtx.fillRect(0, 0, gbCanvas.width, gbCanvas.height)
            // 2. 透過済みの自分を上に貼る
            gbCtx.drawImage(canvas, 0, 0)
            
            mask.close()
          })

          raf = requestAnimationFrame(loop)
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
      segmenter?.close()
    }
  }, [canvas, sharedVideo, camStatus])

  return { canvas, status, gbCanvas }
}
