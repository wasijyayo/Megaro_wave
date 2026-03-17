import { useEffect, useState, useRef } from 'react'
import { useSharedCamera } from './useSharedCamera'
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

  const { video: sharedVideo, status: camStatus } = useSharedCamera({ width: 720, height: 1280 })

  useEffect(() => {
    let cancelled = false
    let raf = 0
    let landmarker: PoseLandmarker | null = null
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
        })
        if (cancelled) { lm.close(); return }
        landmarker = lm

        // カメラは共有フックを使う
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
          
          try {
            // 縦長のキャンバス (9:16) に固定（表示はしない。骨格オーバーレイ用）
            const TARGET_W = 720
            const TARGET_H = 1280
            if (canvas.width !== TARGET_W || canvas.height !== TARGET_H) {
              canvas.width = TARGET_W
              canvas.height = TARGET_H
            }

            const ctx = canvas.getContext('2d')!
            // 透明なオーバーレイとして骨格のみ描画するため背景はクリアのみ
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const timestamp = performance.now()
            // カメラ映像はここでは描画せず、sharedVideo を直接渡して推論のみ行う
            const result = landmarker!.detectForVideo(video, timestamp)

            // ポーズデータ(landmarks)の更新
            setPoseData(result)

            // セグメンテーションは別フック(usePersonSegmentation)に任せるためここでは扱わない

            // === デバッグ表示: 骨格と判定ラインの描画（オーバーレイのみ） ===
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

            // 骨格(Landmarks)の描画（オーバーレイのみ）
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
    }
  }, [canvas, sharedVideo, camStatus])

  return { canvas, status, poseData }
}
