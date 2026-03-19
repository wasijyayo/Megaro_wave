import { useEffect, useRef } from 'react'

export default function HUD({
  score,
  lives,
  maxLives = 100,
  balanceRef,
  waveLabel,
  difficultyMultiplier,
  combo,
  comboMultiplier = 1,
  comboExpiryTime,
  comboDuration,
  lastAction,
  targetPose,
  targetPoseActive,
  boardConnected,
}) {
  return (
    <div style={s.root}>
      {/* 左上: ライフ */}
      <div style={{ position: 'absolute', top: 50, left: 50 }}>
        <div style={s.label}>LIVES</div>
        <div style={{ marginTop: 8, width: 180 }}>
          <div style={{ position: 'relative', height: 14, background: '#222', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div
              style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: `${Math.min(Math.max(lives / (maxLives || 1), 0), 1) * 100}%`,
                background: 'linear-gradient(90deg, #ff4444, #ffaa33, #00ff88 )',
                transition: 'width 280ms linear',
                boxShadow: '0 0 8px rgba(255,68,0,0.18) inset'
              }}
            />
          </div>
          <div style={{ marginTop: 6, fontSize: 12, color: '#ccc' }}>
            {Math.round((Math.min(Math.max(lives / (maxLives || 1), 0), 1) * 100))}% &nbsp;({Math.max(0, Math.floor(lives))}/{maxLives})
          </div>
        </div>
      </div>

      {/* 中央上: ステージ名 */}
      <div style={{ position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={s.label}>STAGE</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', textShadow: '0 0 10px #00ffff', marginTop: 2 }}>{waveLabel}</div>
      </div>

      {/* 右上: スコア + 目標ポーズ */}
      <div style={{ position: 'absolute', top: 18, right: 20, width: 200 }}>
        <div style={{ textAlign: 'right' }}>
        <div style={s.label}>SCORE</div>
        <div style={{ fontSize: 34, fontWeight: 900, color: '#fff', textShadow: '0 0 10px #00ffff', lineHeight: 1, textShadow: '0 0 18px #00aaff' }}>
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
            border: `1px solid ${targetPoseActive ? '#00ff88' : 'rgba(255,255,255,0.14)'}`,
            boxShadow: targetPoseActive ? '0 0 18px rgba(68,255,136,0.35)' : 'none',
          }}>
            <div style={{ ...s.label, textAlign: 'left' }}>TARGET POSE</div>
            <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center' }}>
              <TargetPosePreview poseId={targetPose.id} active={targetPoseActive} />
            </div>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: '#fff', textShadow: '0 0 10px #00ffff', textAlign: 'center' }}>
              {targetPose.label}
            </div>
            <div style={{ marginTop: 4, fontSize: 12, color: targetPoseActive ? '#00ff88' : '#8bdcff', textAlign: 'center' }}>
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

      {/* 左中央: コンボカウンター */}
      {combo >= 1 && (
        <div style={s.comboArea}>
          <div style={s.comboMultiplier}>x{comboMultiplier.toFixed(2)}</div>
          <div style={s.comboNumber}>🔥 x{combo}</div>
          <div style={s.comboLabel}>COMBO</div>
          <ComboBar
            combo={combo}
            comboExpiryTime={comboExpiryTime}
            comboDuration={comboDuration}
          />
        </div>
      )}

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

function ComboBar({ combo, comboExpiryTime, comboDuration }) {
  const fillRef = useRef(null)

  useEffect(() => {
    if (!fillRef.current) return undefined

    if (combo < 1 || comboExpiryTime <= 0 || comboDuration <= 0) {
      fillRef.current.style.width = '0%'
      return undefined
    }

    let rafId

    const update = () => {
      if (!fillRef.current) return

      const remaining = Math.max(comboExpiryTime - performance.now(), 0)
      const ratio = Math.min(Math.max(remaining / comboDuration, 0), 1)
      fillRef.current.style.width = `${ratio * 100}%`

      if (remaining > 0) {
        rafId = requestAnimationFrame(update)
      }
    }

    fillRef.current.style.width = '100%'
    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [combo, comboExpiryTime, comboDuration])

  return (
    <div style={s.comboBarTrack}>
      <div ref={fillRef} style={s.comboBarFill} />
    </div>
  )
}

function TargetPosePreview({ poseId, active }) {
  const stroke = active ? '#00ff88' : '#8bdcff'

  // 共通パーツ: 頭・首・肩ライン・脇腹(台形)・腰ライン・脚(膝関節付き)
  const head = <circle cx="48" cy="14" r="9" fill="none" stroke={stroke} strokeWidth="4" />
  // 首
  const neck = <path d="M48 23 L48 28" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
  // 肩ライン（左肩32 ～ 右肩64）
  const shoulders = <path d="M32 28 L64 28" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
  // 胴体: 脇腹ライン（肩→腰、中心線なし）
  const torso = (
    <>
      <path d="M32 28 L38 76" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <path d="M64 28 L58 76" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
    </>
  )
  // 腰ライン（左腰38 ～ 右腰58）
  const hips = <path d="M38 76 L58 76" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
  // 脚（膝関節付き: 腰→膝→足）
  const legs = (
    <>
      <path d="M38 76 L30 96" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <path d="M30 96 L26 122" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <path d="M58 76 L66 96" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <path d="M66 96 L70 122" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
    </>
  )

  switch (poseId) {
    // ── 両手を頭の後ろ ──
    case 'hands-behind-head':
      return (
        <svg width="96" height="140" viewBox="0 0 96 140" aria-hidden="true">
          {head}{neck}{shoulders}{torso}{hips}{legs}
          <path d="M32 28 L20 20" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M20 20 Q32 10 42 14" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M64 28 L76 20" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M76 20 Q64 10 54 14" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M42 14 L46 16" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
          <path d="M54 14 L50 16" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        </svg>
      )

    // ── 両手を挙げる ──
    case 'hands-up':
      return (
        <svg width="96" height="140" viewBox="0 0 96 140" aria-hidden="true">
          {head}{neck}{shoulders}{torso}{hips}{legs}
          <path d="M32 28 L22 16 L16 2" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M64 28 L74 16 L80 2" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    // ── 敬礼 ──
    case 'salute':
      return (
        <svg width="96" height="140" viewBox="0 0 96 140" aria-hidden="true">
          {head}{neck}{shoulders}{torso}{hips}{legs}
          <path d="M64 28 L76 20 L58 10" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M32 28 L20 46 L16 72" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    // ── ランニングマン ──
    case 'running-man':
      return (
        <svg width="96" height="140" viewBox="0 0 96 140" aria-hidden="true">
          {head}{neck}{shoulders}{torso}{hips}{legs}
          <path d="M64 28 L78 16 L90 4" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M32 28 L18 44" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M18 44 L36 28" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    // ── 右手を上、左手を横 ──
    case 'right-up-left-side':
      return (
        <svg width="96" height="140" viewBox="0 0 96 140" aria-hidden="true">
          {head}{neck}{shoulders}{torso}{hips}{legs}
          <path d="M32 28 L14 32 L2 36" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M64 28 L72 10 L74 -6" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    // ── 両腕を曲げて力こぶ ──
    case 'double-biceps':
      return (
        <svg width="96" height="140" viewBox="0 0 96 140" aria-hidden="true">
          {head}{neck}{shoulders}{torso}{hips}{legs}
          <path d="M32 28 L20 28 L26 10" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M64 28 L76 28 L70 10" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    // ── 後ろで手を組む ──
    case 'hands-back':
      return (
        <svg width="96" height="140" viewBox="0 0 96 140" aria-hidden="true">
          {head}
          <path d="M48 23 L48 28" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M30 28 L62 28" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M30 30 L40 76" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M62 30 L52 76" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M40 76 L52 76" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M30 30 L34 54 L46 62" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M62 30 L58 54 L46 62" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M46 62 L50 62" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M40 76 L34 98 L30 122" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M52 76 L58 98 L62 122" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
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
      const color        = ok ? '#00ff88' : '#ff4444'

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
    <div ref={trackRef} style={{ position: 'relative', height: 18, background: '#111', borderRadius: 9, border: '2px solid #00ff88', overflow: 'hidden' }}>
      {/* 許容ゾーン */}
      <div ref={zoneRef} style={{ position: 'absolute', top: 0, bottom: 0, left: '38%', width: '24%', background: 'rgba(68,255,136,0.15)' }} />
      {/* 目標ライン */}
      <div ref={targetLineRef} style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 2, background: '#00ff88', opacity: 0.8 }} />
      {/* 現在の重心 — transition なし、RAFで直接更新 */}
      <div ref={indicatorRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 14, height: 14, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88' }} />
    </div>
  )
}

const s = {
  root: {
    position: 'absolute', inset: 0,
    pointerEvents: 'none',
    fontFamily: 'ui-monospace, Consolas, monospace',
    color: '#fff', textShadow: '0 0 10px #00ffff',
  },
  label: {
    fontSize: 11,
    letterSpacing: '0.08em',
    color: '#7aadff',
    textTransform: 'uppercase',
  },
  actionPopup: {
    position: 'absolute',
    top: '30%', left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    fontSize: 30, fontWeight: 900,
    color: '#00ffff',
    textShadow: '0 0 24px #00ffff',
    animation: 'popupFade 1s forwards',
    pointerEvents: 'none',
  },
  // コンボカウンター（左側→中央寄り）
  comboArea: {
    position: 'absolute',
    left: '22%',
    top: '40%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: 220,
    padding: '18px 18px 14px',
    background: 'linear-gradient(180deg, rgba(18, 10, 24, 0.78), rgba(8, 14, 30, 0.42))',
    border: '1px solid rgba(255, 90, 90, 0.45)',
    borderRadius: 18,
    boxShadow: '0 0 28px rgba(255, 59, 59, 0.25), inset 0 0 18px rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(8px)',
  },
  comboNumber: {
    fontSize: 52,
    fontWeight: 900,
    color: '#78f8ff',
    textShadow: '0 0 18px #00ffff, 0 0 36px rgba(0, 255, 255, 0.8), 0 0 56px rgba(255, 90, 90, 0.5)',
    lineHeight: 1,
  },
  comboMultiplier: {
    fontSize: 44,
    fontWeight: 900,
    color: '#ffd1d1',
    textShadow: '0 0 18px #ff3b3b, 0 0 34px rgba(255, 59, 59, 0.9)',
    letterSpacing: '0.08em',
    lineHeight: 1,
    marginBottom: 10,
  },
  comboLabel: {
    fontSize: 20,
    fontWeight: 800,
    color: '#aefcff',
    textShadow: '0 0 12px rgba(0, 255, 255, 0.6)',
    letterSpacing: '0.16em',
    marginTop: 8,
  },
  comboBarTrack: {
    marginTop: 12,
    width: '100%',
    height: 12,
    background: 'rgba(255,255,255,0.12)',
    borderRadius: 999,
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.35)',
  },
  comboBarFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #ff6b6b, #ff1f1f)',
    borderRadius: 999,
    transition: 'width 0.05s linear',
    boxShadow: '0 0 16px rgba(255, 31, 31, 0.85)',
  },
}
