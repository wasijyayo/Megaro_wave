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
          outputSegmentationMasks: true, // セグメンテーションマスクを復活させる
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
            // 縦長のキャンバス (9:16) に固定し、左右を切り落とす
            const TARGET_W = 720
            const TARGET_H = 1280
            if (canvas.width !== TARGET_W || canvas.height !== TARGET_H) {
              canvas.width = TARGET_W
              canvas.height = TARGET_H
            }

            const ctx = canvas.getContext('2d')!
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // カメラ映像の中央をクロップして描画
            const vRatio = video.videoWidth / video.videoHeight
            const cRatio = canvas.width / canvas.height
            let sx=0, sy=0, sW=video.videoWidth, sH=video.videoHeight

            if (vRatio > cRatio) {
              // ビデオのほうが横長なので、左右の中央を切り出す
              sH = video.videoHeight
              sW = sH * cRatio
              sx = (video.videoWidth - sW) / 2
            } else {
              // ビデオのほうが縦長なので、上下の中央を切り出す
              sW = video.videoWidth
              sH = sW / cRatio
              sy = (video.videoHeight - sH) / 2
            }

            ctx.drawImage(video, sx, sy, sW, sH, 0, 0, canvas.width, canvas.height)

            const timestamp = performance.now()
            // HTMLCanvasElement を直接渡して推論
            const result = landmarker!.detectForVideo(canvas, timestamp)
            
            // ポーズデータ(landmarks)の更新
            setPoseData(result)

            // --- セグメンテーションマスクの処理 ---
            const masks = result.segmentationMasks
            if (masks && masks.length > 0) {
              const mask = masks[0]
              if (maskCanvas.width !== mask.width || maskCanvas.height !== mask.height) {
                maskCanvas.width = mask.width
                maskCanvas.height = mask.height
              }
              
              const maskData = mask.getAsFloat32Array ? mask.getAsFloat32Array() : mask.getAsUint8Array()
              const maskCtx = maskCanvas.getContext('2d')!
              const imgData = maskCtx.createImageData(mask.width, mask.height)

              // 閾値処理：ある程度確信度が高ければ人物(=255)として扱う
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

            // === デバッグ表示: 骨格と判定ラインの描画 ===
            ctx.save()

            // ゲーム画面(R3FGameCanvas)で人物が反転表示される場合があるため、テキスト描画用に反転をリセット
            const drawText = (text: string, x: number, y: number) => {
              ctx.save()
              // X軸を反転させて正しい向きで文字を描画
              ctx.translate(canvas.width, 0)
              ctx.scale(-1, 1)
              ctx.fillText(text, canvas.width - x - ctx.measureText(text).width, y)
              ctx.restore()
            }

            // ジャンプライン (Y=0.5)
            const jumpY = canvas.height * 0.5
            ctx.strokeStyle = 'cyan'
            ctx.lineWidth = 2
            ctx.setLineDash([5, 5])
            ctx.beginPath()
            ctx.moveTo(0, jumpY)
            ctx.lineTo(canvas.width, jumpY)
            ctx.stroke()
            ctx.fillStyle = 'cyan'
            ctx.font = '20px sans-serif'
            drawText('JUMP LINE (0.5)', 10, jumpY - 10)

            // しゃがみライン (Y=0.75)
            const squatY = canvas.height * 0.75
            ctx.strokeStyle = 'red'
            ctx.beginPath()
            ctx.moveTo(0, squatY)
            ctx.lineTo(canvas.width, squatY)
            ctx.stroke()
            ctx.fillStyle = 'red'
            drawText('SQUAT LINE (0.75)', 10, squatY - 10)
            ctx.setLineDash([]) // リセット

            // 骨格(Landmarks)の描画
            if (result.landmarks && result.landmarks.length > 0) {
              const lm = result.landmarks[0]
              
              // --- 枝(骨: Bones)の描画 ---
              const connections = [
                [11,12], [11,13], [13,15], [12,14], [14,16], // 両腕と肩
                [11,23], [12,24], [23,24],                   // 胴体
                [23,25], [24,26], [25,27], [26,28],          // 両脚
                [27,29], [28,30], [29,31], [30,32],          // 足首以降
                [0,1], [1,2], [2,3], [3,7],                  // 顔(左)
                [0,4], [4,5], [5,6], [6,8],                  // 顔(右)
                [9,10]                                       // 口
              ]
              
              ctx.strokeStyle = 'white'
              ctx.lineWidth = 2
              ctx.beginPath()
              connections.forEach(([i, j]) => {
                if (lm[i] && lm[j]) {
                  ctx.moveTo(lm[i].x * canvas.width, lm[i].y * canvas.height)
                  ctx.lineTo(lm[j].x * canvas.width, lm[j].y * canvas.height)
                }
              })
              ctx.stroke()

              // --- 点(関節: Joints)の描画 ---
              ctx.fillStyle = '#00ff00'
              for (let i = 0; i < lm.length; i++) {
                const pt = lm[i]
                ctx.beginPath()
                ctx.arc(pt.x * canvas.width, pt.y * canvas.height, 4, 0, 2 * Math.PI)
                ctx.fill()
              }
            }
            
            ctx.restore()
            // ============================================

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
