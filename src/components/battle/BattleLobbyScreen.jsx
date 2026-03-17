import { useState, useEffect, useCallback } from 'react'
import { createLiveKitRoom, listLiveKitRooms } from '../../firebase.js'

/**
 * 対戦ロビー画面
 * - ルーム一覧表示（3秒ごとに自動更新）
 * - ルーム作成（ホスト）
 * - ルーム参加（ゲスト）
 */
export default function BattleLobbyScreen({ wiiBoard, onEnterRoom, onBack }) {
  const [rooms,   setRooms]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)
  const [joining, setJoining] = useState(false)

  // Wii Board 未接続ガード
  if (!wiiBoard.connected) {
    return (
      <div style={s.root}>
        <div style={s.card}>
          <div style={s.title}>対戦モード</div>
          <div style={{ color: '#ff4444', marginBottom: 24, fontSize: 15 }}>
            Wii Balance Board が未接続です。<br />
            ホーム画面で接続してから入室してください。
          </div>
          <button style={s.btnSecondary} onClick={onBack}>← ホームに戻る</button>
        </div>
      </div>
    )
  }

  // ルーム一覧取得
  const fetchRooms = useCallback(async () => {
    try {
      const list = await listLiveKitRooms()
      setRooms(list)
      setError(null)
    } catch (e) {
      setError('ルーム一覧の取得に失敗しました')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRooms()
    const id = setInterval(fetchRooms, 3000)
    return () => clearInterval(id)
  }, [fetchRooms])

  // ルーム作成（ホスト）
  const handleCreate = async () => {
    setJoining(true)
    try {
      const roomName = await createLiveKitRoom()
      onEnterRoom(roomName, true) // isHost = true
    } catch (e) {
      setError('ルームの作成に失敗しました')
      setJoining(false)
    }
  }

  // ルーム参加（ゲスト）
  const handleJoin = async (roomName) => {
    setJoining(true)
    try {
      onEnterRoom(roomName, false) // isHost = false
    } catch (e) {
      setError('ルームへの参加に失敗しました')
      setJoining(false)
    }
  }

  return (
    <div style={s.root}>
      <div style={s.card}>
        {/* ヘッダー */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div style={s.title}>対戦ロビー</div>
          <button style={s.btnSecondary} onClick={onBack}>← 戻る</button>
        </div>

        {error && <div style={s.errorMsg}>{error}</div>}

        {/* ルーム作成 */}
        <button style={{ ...s.btnPrimary, width: '100%', marginBottom: 24 }} onClick={handleCreate} disabled={joining}>
          {joining ? '作成中...' : '+ ルームを作成する（ホスト）'}
        </button>

        {/* ルーム一覧 */}
        <div style={s.sectionLabel}>参加可能なルーム</div>

        {loading ? (
          <div style={s.emptyMsg}>読み込み中...</div>
        ) : rooms.length === 0 ? (
          <div style={s.emptyMsg}>現在参加可能なルームはありません</div>
        ) : (
          <div style={s.roomList}>
            {rooms.map((room) => (
              <div key={room.roomName} style={s.roomRow}>
                <div style={s.roomInfo}>
                  <span style={s.roomHost}>{room.hostName}</span>
                  <span style={s.roomMeta}>
                    {room.numParticipants}/2人
                  </span>
                </div>
                <button
                  style={s.btnJoin}
                  onClick={() => handleJoin(room.roomName)}
                  disabled={joining}
                >
                  参加
                </button>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'right', marginTop: 8, fontSize: 11, color: '#444' }}>
          3秒ごとに自動更新
        </div>
      </div>
    </div>
  )
}

const s = {
  root: {
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#040c1a', fontFamily: 'system-ui, sans-serif', padding: '2rem',
  },
  card: {
    width: '100%', maxWidth: 480,
    background: '#0e1f3d', border: '1px solid #1e3a6a',
    borderRadius: 16, padding: '32px 28px',
  },
  title: { fontSize: 24, fontWeight: 900, color: '#fff' },
  sectionLabel: { fontSize: 11, color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 },
  emptyMsg:     { color: '#555', fontSize: 14, padding: '16px 0', textAlign: 'center' },
  errorMsg:     { color: '#ff4444', fontSize: 13, marginBottom: 12 },
  roomList: { display: 'flex', flexDirection: 'column', gap: 8 },
  roomRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    background: '#0a1628', borderRadius: 8, padding: '12px 16px',
    border: '1px solid #1a2e50',
  },
  roomInfo: { display: 'flex', flexDirection: 'column', gap: 4 },
  roomHost: { fontSize: 15, fontWeight: 700, color: '#fff' },
  roomMeta: { fontSize: 12, color: '#888' },
  btnPrimary: {
    padding: '14px 24px', borderRadius: 8, border: 'none',
    background: '#1a4fc4', color: '#fff', fontSize: 15, fontWeight: 700,
    cursor: 'pointer',
  },
  btnSecondary: {
    padding: '8px 16px', borderRadius: 6, border: '1px solid #334',
    background: 'none', color: '#888', fontSize: 13, cursor: 'pointer',
  },
  btnJoin: {
    padding: '8px 20px', borderRadius: 6, border: 'none',
    background: '#1a4fc4', color: '#fff', fontSize: 13, fontWeight: 700,
    cursor: 'pointer',
  },
}
