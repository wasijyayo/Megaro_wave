import { useEffect, useRef } from 'react'

/**
 * ポーズクリア時のビジュアルエフェクト:
 *  1. パーティクル爆発（青系＋黄色系紙吹雪）
 *  2. リングウェーブ（光の輪が広がる）
 *  3. スコアポップアップ（大きく派手に）
 *  4. コンボカウンター
 */
export default function PoseClearEffects({ event }) {
  // event: { id, label, points, combo, multiplier } | null
  if (!event) return null
  return (
    <div style={styles.container} key={event.id}>
      <RingWave />
      <ParticleBurst />
      <ScorePopup label={event.label} points={event.points} multiplier={event.multiplier} />
    </div>
  )
}

// ────────────────────────────────────────
// リングウェーブ
// ────────────────────────────────────────
function RingWave() {
  return (
    <div style={styles.ringContainer}>
      <div style={{ ...styles.ring, animationDelay: '0s' }} />
      <div style={{ ...styles.ring, animationDelay: '0.12s' }} />
      <style>{ringKeyframes}</style>
    </div>
  )
}

const ringKeyframes = `
@keyframes poseRingExpand {
  0% {
    width: 160px; height: 160px;
    opacity: 0.9;
    border-width: 4px;
  }
  100% {
    width: 2560px; height: 2560px;
    opacity: 0;
    border-width: 1px;
  }
}
`

// ────────────────────────────────────────
// パーティクル爆発
// ────────────────────────────────────────
function ParticleBurst() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width
    const H = canvas.height
    const cx = W / 2
    const cy = H / 2

    const CYBER_COLORS = ['#00e5ff', '#58f3ff', '#7b61ff', '#ff4fd8', '#a6ff00', '#00ffa3']

    // パーティクル生成
    const particles = Array.from({ length: 40 }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = 16 + Math.random() * 40
      const variant = Math.random() > 0.4 ? 'shard' : 'beam'
      return {
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 16, // 上方向バイアス
        color: CYBER_COLORS[Math.floor(Math.random() * CYBER_COLORS.length)],
        life: 1.0,
        decay: 0.015 + Math.random() * 0.01,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.24,
        variant,
        w: variant === 'shard' ? 22 + Math.random() * 34 : 10 + Math.random() * 18,
        h: variant === 'shard' ? 10 + Math.random() * 16 : 26 + Math.random() * 42,
        cut: 4 + Math.random() * 10,
      }
    })

    let raf
    function animate() {
      ctx.clearRect(0, 0, W, H)
      let alive = false

      particles.forEach(p => {
        if (p.life <= 0) return
        alive = true

        p.x += p.vx
        p.y += p.vy
        p.vy += 0.12 // 重力
        p.vx *= 0.99
        p.life -= p.decay
        p.rotation += p.rotSpeed

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.globalAlpha = Math.max(p.life, 0)
        drawCyberParticle(ctx, p)
        ctx.restore()
      })

      if (alive) {
        raf = requestAnimationFrame(animate)
      }
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={3200}
      height={3200}
      style={styles.particleCanvas}
    />
  )
}

function drawCyberParticle(ctx, particle) {
  const { w, h, color, variant, cut } = particle

  ctx.shadowColor = color
  ctx.shadowBlur = variant === 'shard' ? 16 : 12

  if (variant === 'beam') {
    ctx.fillStyle = color
    ctx.fillRect(-w / 2, -h / 2, w, h)
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    ctx.fillRect(-w / 6, -h / 2, w / 3, h)
    return
  }

  ctx.beginPath()
  ctx.moveTo(-w / 2 + cut, -h / 2)
  ctx.lineTo(w / 2, -h / 2)
  ctx.lineTo(w / 2 - cut, h / 2)
  ctx.lineTo(-w / 2, h / 2)
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()

  ctx.strokeStyle = 'rgba(255,255,255,0.85)'
  ctx.lineWidth = 2
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(-w / 2 + cut * 0.7, -h / 4)
  ctx.lineTo(w / 2 - cut * 0.9, h / 4)
  ctx.strokeStyle = 'rgba(255,255,255,0.65)'
  ctx.lineWidth = 1.5
  ctx.stroke()
}

// ────────────────────────────────────────
// スコアポップアップ（強化版）
// ────────────────────────────────────────
function ScorePopup({ label, points, multiplier = 1 }) {
  return (
    <div style={styles.scorePopup}>
      <div style={styles.scoreLabel}>{label}</div>
      <div style={styles.scoreMultiplier}>x{multiplier.toFixed(2)}</div>
      <div style={styles.scorePoints}>+{points.toLocaleString()}</div>
      <style>{scoreKeyframes}</style>
    </div>
  )
}

const scoreKeyframes = `
@keyframes poseScorePopup {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
  15% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.15);
  }
  30% {
    transform: translate(-50%, -50%) scale(1.0);
  }
  70% {
    opacity: 1;
    transform: translate(-50%, -60%) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -120%) scale(0.8);
  }
}
`

// ────────────────────────────────────────
// コンボカウンター
// ────────────────────────────────────────
function ComboCounter({ combo }) {
  return (
    <div style={styles.comboContainer}>
      <div style={styles.comboText}>
        🔥 x{combo} COMBO!
      </div>
      <style>{comboKeyframes}</style>
    </div>
  )
}

const comboKeyframes = `
@keyframes poseComboPopup {
  0% {
    opacity: 0;
    transform: translate(-50%, 0) scale(0.3);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, 0) scale(1.2);
  }
  35% {
    transform: translate(-50%, 0) scale(1.0);
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -20px) scale(0.9);
  }
}
`

// ────────────────────────────────────────
// スタイル
// ────────────────────────────────────────
const styles = {
  container: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 50,
  },

  // リングウェーブ
  ringContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  ring: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    border: '4px solid #00aaff',
    boxShadow: '0 0 20px rgba(0,170,255,0.5), inset 0 0 20px rgba(0,170,255,0.15)',
    animation: 'poseRingExpand 0.8s ease-out forwards',
    pointerEvents: 'none',
  },

  // パーティクル
  particleCanvas: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  },

  // スコアポップアップ
  scorePopup: {
    position: 'absolute',
    top: '38%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    animation: 'poseScorePopup 1.4s ease-out forwards',
    pointerEvents: 'none',
  },
  scoreLabel: {
    fontSize: 24,
    fontWeight: 800,
    color: '#fff',
    textShadow: '0 0 12px rgba(0,170,255,0.8), 0 0 24px rgba(0,170,255,0.4)',
    letterSpacing: '0.05em',
  },
  scoreMultiplier: {
    marginTop: 6,
    fontSize: 36,
    fontWeight: 900,
    color: '#ffd1d1',
    textShadow: '0 0 14px rgba(255, 80, 80, 0.9), 0 0 28px rgba(255, 80, 80, 0.4)',
    letterSpacing: '0.08em',
    lineHeight: 1,
  },
  scorePoints: {
    fontSize: 56,
    fontWeight: 900,
    color: '#ffee00',
    textShadow: '0 0 16px #ffee00, 0 0 32px rgba(255,238,0,0.6), 0 2px 4px rgba(0,0,0,0.5)',
    lineHeight: 1.1,
    marginTop: 4,
  },

  // コンボカウンター
  comboContainer: {
    position: 'absolute',
    top: '52%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    animation: 'poseComboPopup 1.5s ease-out forwards',
    pointerEvents: 'none',
  },
  comboText: {
    fontSize: 44,
    fontWeight: 900,
    color: '#ff6600',
    textShadow: '0 0 16px #ff4400, 0 0 32px rgba(255,68,0,0.5), 0 2px 4px rgba(0,0,0,0.6)',
    letterSpacing: '0.04em',
    whiteSpace: 'nowrap',
  },
}
