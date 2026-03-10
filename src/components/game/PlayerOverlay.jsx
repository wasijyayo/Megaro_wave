import { useEffect, useRef } from 'react'

// MediaPipe Pose のランドマーク接続ペア (index ペア)
const POSE_CONNECTIONS = [
  // 顔
  [0,1],[1,2],[2,3],[3,7],
  [0,4],[4,5],[5,6],[6,8],
  [9,10],
  // 上半身
  [11,12],
  [11,13],[13,15],[15,17],[15,19],[17,19],
  [12,14],[14,16],[16,18],[16,20],[18,20],
  // 体幹
  [11,23],[12,24],[23,24],
  // 下半身
  [23,25],[24,26],
  [25,27],[26,28],
  [27,29],[28,30],
  [29,31],[30,32],
  [27,31],[28,32],
]

// ランドマークをゲームで重要な部位ごとに色分け
const LM_COLORS = {
  face:   '#ffdd00',
  upper:  '#00e5ff',
  trunk:  '#00e5ff',
  lower:  '#44ff88',
}

function lmColor(idx) {
  if (idx <= 10) return LM_COLORS.face
  if (idx <= 22) return LM_COLORS.upper
  if (idx <= 24) return LM_COLORS.trunk
  return LM_COLORS.lower
}

function drawLandmarks(ctx, landmarks, vw, vh) {
  if (!landmarks || landmarks.length === 0) return

  const lm = landmarks

  // ── ボーン (接続線) ──────────────────────────────
  ctx.lineWidth   = 2.5
  ctx.shadowBlur  = 6

  for (const [a, b] of POSE_CONNECTIONS) {
    if (!lm[a] || !lm[b]) continue
    // 可視度が低い点はスキップ
    if ((lm[a].visibility ?? 1) < 0.4 || (lm[b].visibility ?? 1) < 0.4) continue

    const ax = lm[a].x * vw,  ay = lm[a].y * vh
    const bx = lm[b].x * vw,  by = lm[b].y * vh

    const color = lmColor(a)
    ctx.strokeStyle  = color
    ctx.shadowColor  = color
    ctx.beginPath()
    ctx.moveTo(ax, ay)
    ctx.lineTo(bx, by)
    ctx.stroke()
  }

  // ── 関節点 ──────────────────────────────────────
  for (let i = 0; i < lm.length; i++) {
    const p = lm[i]
    if (!p) continue
    if ((p.visibility ?? 1) < 0.4) continue

    const x = p.x * vw
    const y = p.y * vh
    const r = i <= 10 ? 3 : 5   // 顔は小さめ
    const color = lmColor(i)

    ctx.fillStyle   = color
    ctx.shadowColor = color
    ctx.shadowBlur  = 10
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()

    // 白い輪郭
    ctx.strokeStyle = 'rgba(255,255,255,0.7)'
    ctx.lineWidth   = 1
    ctx.shadowBlur  = 0
    ctx.stroke()
  }

  ctx.shadowBlur = 0
}

// ────────────────────────────────────────────────────────
export default function PlayerOverlay({ videoRef, detect, ready }) {
  const canvasRef     = useRef(null)
  const rafRef        = useRef(null)
  const maskCtxRef    = useRef(null)
  const maskCanvasRef = useRef(null)

  useEffect(() => {
    if (!ready) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    maskCanvasRef.current = new OffscreenCanvas(1, 1)
    maskCtxRef.current    = maskCanvasRef.current.getContext('2d')

    const render = (timestamp) => {
      rafRef.current = requestAnimationFrame(render)

      const video = videoRef.current
      if (!video || video.readyState < 2 || !video.videoWidth) return

      const vw = video.videoWidth
      const vh = video.videoHeight

      if (canvas.width !== vw || canvas.height !== vh) {
        canvas.width  = vw
        canvas.height = vh
        maskCanvasRef.current.width  = vw
        maskCanvasRef.current.height = vh
      }

      const results = detect(timestamp)
      ctx.clearRect(0, 0, vw, vh)

      // ── セグメンテーション (背景除去) ──────────────
      if (results?.segmentationMasks?.length > 0) {
        const mask     = results.segmentationMasks[0]
        const maskData = mask.getAsFloat32Array()
        mask.close()

        const maskCtx = maskCtxRef.current
        const imgData = maskCtx.createImageData(vw, vh)
        for (let i = 0; i < maskData.length; i++) {
          const v = Math.round(maskData[i] * 255)
          imgData.data[i * 4]     = v
          imgData.data[i * 4 + 1] = v
          imgData.data[i * 4 + 2] = v
          imgData.data[i * 4 + 3] = 255
        }
        maskCtx.putImageData(imgData, 0, 0)

        ctx.drawImage(video, 0, 0, vw, vh)
        ctx.globalCompositeOperation = 'destination-in'
        ctx.drawImage(maskCanvasRef.current, 0, 0)
        ctx.globalCompositeOperation = 'source-over'
      } else {
        ctx.drawImage(video, 0, 0, vw, vh)
      }

      // ── ランドマーク描画 ────────────────────────────
      if (results?.landmarks?.length > 0) {
        drawLandmarks(ctx, results.landmarks[0], vw, vh)
      }
    }

    rafRef.current = requestAnimationFrame(render)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [ready, videoRef, detect])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'scaleX(-1)',   // セルフィー (鏡像) 表示
      }}
    />
  )
}
