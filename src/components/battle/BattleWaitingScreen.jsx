import { useState, useEffect, useRef, useContext } from 'react'
import { MSG } from '../../hooks/useLiveKitBattle.js'
import { getWaveParams } from '../../utils/waveParams.js'
import { UserContext } from '../../contexts/UserContext.js'
import WifiSelectModal from '../WifiSelectModal.jsx'

// 相手のカメラ映像を表示するコンポーネント
function RemoteVideo({ track, style }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!track || !videoRef.current) return
    const el = track.attach()
    el.style.width  = '100%'
    el.style.height = '100%'
    el.style.objectFit = 'cover'
    el.style.borderRadius = '8px'
    videoRef.current.innerHTML = ''
    videoRef.current.appendChild(el)
    return () => track.detach()
  }, [track])

  return <div ref={videoRef} style={style} />
}

/**
 * 対戦待機室
 * isHost=true  : WiFi選択UI + 開始ボタン
 * isHost=false : ホストの開始を待機
 */
export default function BattleWaitingScreen({ roomName, isHost, liveKit, onGameStart, onLeave, gbCanvas }) {
  const user     = useContext(UserContext)
  const userName = user?.displayName ?? (user?.isAnonymous ? 'ゲスト' : user?.email ?? '不明')

  const [status,        setStatus]        = useState('connecting')
  const [showWifiModal, setShowWifiModal] = useState(false)
  const [selectedWifi,  setSelectedWifi]  = useState(null)
  const [error,         setError]         = useState(null)

  const { connected, remoteParticipant, remoteVideoTrack, connect, publishCamera, sendMessage } = liveKit

  // マウント時に接続・カメラ公開（切断は BattleSession が管理）
  useEffect(() => {
    let cancelled = false
    async function init() {
      try {
        await connect(roomName)
        if (cancelled) return
        // ──── gbCanvasからTrackを取り出す処理 ────
        let customTrack = null
        if (gbCanvas) {
          // 相手側のデコード負荷を抑えるため、待機中の配信fpsを少し下げる
          const stream = gbCanvas.captureStream(12)
          customTrack = stream.getVideoTracks()[0]
        }

        // 改造した publishCamera にカスタムトラックを渡す
        await publishCamera(customTrack)
        setStatus('waiting')
      } catch (e) {
        if (!cancelled) setError('接続に失敗しました: ' + e.message)
      }
    }
    init()
    return () => { cancelled = true }
  }, [roomName, gbCanvas]) // eslint-disable-line

  const opponentJoined = !!remoteParticipant
  const canStart       = isHost && opponentJoined && !!selectedWifi

  // ホストがゲームを開始する
  const handleStart = () => {
    if (!canStart) return
    const waveParams = getWaveParams({
      downlink: selectedWifi.fast,
      strength: selectedWifi.fast,
      ssid: selectedWifi.ssid,
    })
    sendMessage({ type: MSG.START, waveParams, wifiLabel: selectedWifi.ssid })
    onGameStart(waveParams, selectedWifi.ssid)
  }

  const handleLeave = () => onLeave()

  // WiFi 選択確定
  const handleWifiSelect = (wifi) => {
    setSelectedWifi(wifi)
    setShowWifiModal(false)
  }

  // ── 接続中 ──
  if (status === 'connecting') {
    return (
      <div style={s.root}>
        <div style={s.card}>
          <div style={s.title}>接続中...</div>
        </div>
      </div>
    )
  }

  // ── エラー ──
  if (error) {
    return (
      <div style={s.root}>
        <div style={s.card}>
          <div style={{ color: '#ff4444', marginBottom: 16 }}>{error}</div>
          <button style={s.btnSecondary} onClick={onLeave}>← ロビーに戻る</button>
        </div>
      </div>
    )
  }

  return (
    <div style={s.root}>
      <div style={s.card}>
        {/* ヘッダー */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div style={s.title}>待機中...</div>
          <button style={s.btnSecondary} onClick={handleLeave}>退出</button>
        </div>

        {/* 参加者表示 */}
        <div style={s.players}>
          {/* 自分 */}
          <div style={s.playerBox}>
            <div style={s.playerLabel}>あなた</div>
            <div style={s.playerName}>{userName}</div>
            <div style={{ ...s.dot, background: '#44ff88' }} />
          </div>

          <div style={{ color: '#444', fontSize: 22, fontWeight: 900 }}>VS</div>

          {/* 相手 */}
          <div style={s.playerBox}>
            <div style={s.playerLabel}>相手</div>
            {opponentJoined ? (
              <>
                <div style={s.playerName}>
                  {remoteParticipant?.name ?? '対戦相手'}
                </div>
                <div style={{ ...s.dot, background: '#44ff88' }} />
                {remoteVideoTrack && (
                  <RemoteVideo
                    track={remoteVideoTrack}
                    style={{ width: 120, height: 90, marginTop: 8, borderRadius: 8, background: '#000' }}
                  />
                )}
              </>
            ) : (
              <>
                <div style={{ ...s.playerName, color: '#555' }}>待機中...</div>
                <div style={{ ...s.dot, background: '#555' }} />
              </>
            )}
          </div>
        </div>

        {/* ホスト: WiFi選択 + 開始ボタン */}
        {isHost && (
          <div style={{ marginTop: 28 }}>
            <div style={s.sectionLabel}>ステージ選択（WiFi）</div>
            <button style={s.btnWifi} onClick={() => setShowWifiModal(true)}>
              {selectedWifi
                ? `${selectedWifi.ssid}（${getWaveParams({ downlink: selectedWifi.fast, strength: selectedWifi.fast, ssid: selectedWifi.ssid }).label}）`
                : 'WiFiを選択...'}
            </button>

            {!opponentJoined && (
              <div style={{ fontSize: 12, color: '#666', marginTop: 8 }}>
                相手の参加を待っています...
              </div>
            )}

            <button
              style={{ ...s.btnStart, opacity: canStart ? 1 : 0.4 }}
              onClick={handleStart}
              disabled={!canStart}
            >
              ゲーム開始
            </button>
          </div>
        )}

        {/* ゲスト: 待機メッセージ */}
        {!isHost && (
          <div style={{ marginTop: 28, textAlign: 'center', color: '#888', fontSize: 14 }}>
            ホストがゲームを開始するまでお待ちください...
          </div>
        )}
      </div>

      {/* WiFi 選択モーダル */}
      {showWifiModal && (
        <WifiSelectModal
          onSelect={handleWifiSelect}
          onClose={() => setShowWifiModal(false)}
        />
      )}
    </div>
  )
}

const s = {
  root: {
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#040c1a', fontFamily: 'system-ui, sans-serif', padding: '2rem',
  },
  card: {
    width: '100%', maxWidth: 520,
    background: '#0e1f3d', border: '1px solid #1e3a6a',
    borderRadius: 16, padding: '32px 28px', color: '#fff',
  },
  title:       { fontSize: 22, fontWeight: 900, color: '#fff' },
  sectionLabel:{ fontSize: 11, color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 },
  players: {
    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16,
    background: '#0a1628', borderRadius: 12, padding: '20px 24px',
  },
  playerBox:  { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 },
  playerLabel:{ fontSize: 11, color: '#666', textTransform: 'uppercase', letterSpacing: '0.08em' },
  playerName: { fontSize: 15, fontWeight: 700, color: '#fff', textAlign: 'center' },
  dot:        { width: 10, height: 10, borderRadius: '50%' },
  btnWifi: {
    width: '100%', padding: '12px 16px', borderRadius: 8,
    background: '#0a1628', border: '1px solid #1e3a6a',
    color: '#fff', fontSize: 14, textAlign: 'left', cursor: 'pointer', marginBottom: 8,
  },
  btnStart: {
    width: '100%', marginTop: 16, padding: '16px', borderRadius: 8, border: 'none',
    background: '#1a4fc4', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  btnSecondary: {
    padding: '8px 16px', borderRadius: 6, border: '1px solid #334',
    background: 'none', color: '#888', fontSize: 13, cursor: 'pointer',
  },
}
