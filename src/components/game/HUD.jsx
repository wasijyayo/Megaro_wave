import { useEffect, useRef } from 'react'

const TOTAL_LIVES = 3

export default function HUD({
  score,
  lives,
  balanceRef,
  waveLabel,
  difficultyMultiplier,
  lastAction,
  targetPose,
  targetPoseActive,
  boardConnected,
}) {
  return (
    <div style={s.root}>
      {/* 左上: ライフ */}
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <div style={s.label}>LIVES</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
          {Array.from({ length: TOTAL_LIVES }).map((_, i) => (
            <div key={i} style={{
              width: 18, height: 18, borderRadius: '50%',
              background: i < lives ? '#ff4444' : '#333',
              boxShadow: i < lives ? '0 0 8px #ff4444' : 'none',
              transition: 'background 0.2s',
            }} />
          ))}
        </div>
      </div>

      {/* 中央上: ステージ名 */}
      <div style={{ position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={s.label}>STAGE</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginTop: 2 }}>{waveLabel}</div>
      </div>

      {/* 右上: スコア + 目標ポーズ */}
      <div style={{ position: 'absolute', top: 18, right: 20, width: 200 }}>
        <div style={{ textAlign: 'right' }}>
        <div style={s.label}>SCORE</div>
        <div style={{ fontSize: 34, fontWeight: 900, color: '#fff', lineHeight: 1, textShadow: '0 0 18px #00aaff' }}>
          {score.toLocaleString()}
        </div>
        <div style={{ fontSize: 12, color: '#00aaff', marginTop: 2 }}>
          x{difficultyMultiplier.toFixed(1)} 倍率
        </div>
        </div>

        {targetPose && (
          <div style={{
            marginTop: 12,
            padding: '10px 12px',
            borderRadius: 12,
            background: targetPoseActive ? 'rgba(68,255,136,0.22)' : 'rgba(0,0,0,0.5)',
            border: `1px solid ${targetPoseActive ? '#44ff88' : 'rgba(255,255,255,0.14)'}`,
            boxShadow: targetPoseActive ? '0 0 18px rgba(68,255,136,0.35)' : 'none',
          }}>
            <div style={{ ...s.label, textAlign: 'left' }}>TARGET POSE</div>
            <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center' }}>
              <TargetPosePreview poseId={targetPose.id} active={targetPoseActive} />
            </div>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'center' }}>
              {targetPose.label}
            </div>
            <div style={{ marginTop: 4, fontSize: 12, color: targetPoseActive ? '#44ff88' : '#8bdcff', textAlign: 'center' }}>
              成功で +{targetPose.points.toLocaleString()}
            </div>
          </div>
        )}
      </div>

      {/* 下中央: バランスメーター */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', width: 240, textAlign: 'center' }}>
        <div style={{ ...s.label, marginBottom: 6 }}>BALANCE</div>
        <BalanceMeter balanceRef={balanceRef} />
        {!boardConnected && (
          <div style={{ fontSize: 11, color: '#666', marginTop: 4 }}>
            Wii Board 未接続 (中央固定)
          </div>
        )}
      </div>

      {/* アクション通知 */}
      {lastAction && (
        <div key={lastAction.id} style={s.actionPopup}>
          <div>{lastAction.label}</div>
          <div style={{ fontSize: 22 }}>+{lastAction.points.toLocaleString()}</div>
        </div>
      )}
    </div>
  )
}

function TargetPosePreview({ poseId, active }) {
  const stroke = active ? '#44ff88' : '#8bdcff'

  // 共通パーツ: 頭・体幹
  const head = <circle cx="48" cy="18" r="9" fill="none" stroke={stroke} strokeWidth="4" />
  const torso = <path d="M48 27 L48 50" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />

  switch (poseId) {
    // ── 両手を頭の後ろ ──
    case 'hands-behind-head':
      return (
        <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true">
          {head}{torso}
          <path d="M48 34 L31 32" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M48 34 L65 32" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M31 32 Q38 24 43 22" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M65 32 Q58 24 53 22" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M43 24 L47 26" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
          <path d="M53 24 L49 26" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
          <path d="M48 50 L38 72" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M48 50 L58 72" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    // ── 両手を挙げる ──
    case 'hands-up':
      return (
        <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true">
          {head}{torso}
          {/* 両腕を真上に */}
          <path d="M48 34 L36 28 L32 8" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M48 34 L60 28 L64 8" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          {/* 脚 */}
          <path d="M48 50 L38 72" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M48 50 L58 72" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    // ── 敬礼 ──
    case 'salute':
      return (
        <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true">
          {head}{torso}
          {/* 右手: 額に当てる敬礼 */}
          <path d="M48 34 L60 30 L56 16" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          {/* 左手: 体の横に下ろす */}
          <path d="M48 34 L34 42 L30 56" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          {/* 脚 */}
          <path d="M48 50 L42 72" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M48 50 L54 72" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    // ── ランニングマン ──
    case 'running-man':
      return (
        <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true">
          {head}{torso}
          {/* 右腕: 右上に伸ばす（一直線） */}
          <path d="M48 34 L62 26 L76 14" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          {/* 曲げる腕: 肩から左下へ、肘で折り返して右上へ */}
          <path d="M48 34 L38 44" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M38 44 L52 32" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          {/* 脚 */}
          <path d="M48 50 L38 72" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M48 50 L58 72" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    default:
      return null
  }
}

function BalanceMeter({ balanceRef }) {
  const trackRef     = useRef(null)
  const zoneRef      = useRef(null)
  const targetLineRef = useRef(null)
  const indicatorRef = useRef(null)

  useEffect(() => {
    let rafId
    function update() {
      rafId = requestAnimationFrame(update)
      const { copX, targetX, ok, calibratedX } = balanceRef.current
      const displayX     = Number.isFinite(calibratedX) ? calibratedX : copX
      const indicatorPct = Math.min(Math.max((displayX + 1) / 2, 0), 1) * 100
      const targetPct    = Math.min(Math.max((targetX  + 1) / 2, 0), 1) * 100
      const color        = ok ? '#44ff88' : '#ff4444'

      if (indicatorRef.current) {
        indicatorRef.current.style.left       = `${indicatorPct}%`
        indicatorRef.current.style.background = color
        indicatorRef.current.style.boxShadow  = `0 0 8px ${color}`
      }
      if (zoneRef.current)      zoneRef.current.style.left      = `${targetPct - 12}%`
      if (targetLineRef.current) targetLineRef.current.style.left = `${targetPct}%`
      if (trackRef.current)     trackRef.current.style.borderColor = color
    }
    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [balanceRef])

  return (
    <div ref={trackRef} style={{ position: 'relative', height: 18, background: '#111', borderRadius: 9, border: '2px solid #44ff88', overflow: 'hidden' }}>
      {/* 許容ゾーン */}
      <div ref={zoneRef} style={{ position: 'absolute', top: 0, bottom: 0, left: '38%', width: '24%', background: 'rgba(68,255,136,0.15)' }} />
      {/* 目標ライン */}
      <div ref={targetLineRef} style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 2, background: '#44ff88', opacity: 0.8 }} />
      {/* 現在の重心 — transition なし、RAFで直接更新 */}
      <div ref={indicatorRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 14, height: 14, borderRadius: '50%', background: '#44ff88', boxShadow: '0 0 8px #44ff88' }} />
    </div>
  )
}

const s = {
  root: {
    position: 'absolute', inset: 0,
    pointerEvents: 'none',
    fontFamily: 'system-ui, sans-serif',
    color: '#fff',
  },
  label: {
    fontSize: 11,
    letterSpacing: '0.08em',
    color: '#888',
    textTransform: 'uppercase',
  },
  actionPopup: {
    position: 'absolute',
    top: '30%', left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    fontSize: 30, fontWeight: 900,
    color: '#ffee00',
    textShadow: '0 0 24px #ffee00',
    animation: 'popupFade 1s forwards',
    pointerEvents: 'none',
  },
}
