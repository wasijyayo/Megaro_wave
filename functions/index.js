const { onCall, HttpsError } = require('firebase-functions/v2/https')
const { setGlobalOptions }   = require('firebase-functions/v2')
const { defineSecret }       = require('firebase-functions/params')

setGlobalOptions({ region: 'asia-northeast1' })

const livekitApiKey    = defineSecret('LIVEKIT_API_KEY')
const livekitApiSecret = defineSecret('LIVEKIT_API_SECRET')
const livekitUrl       = defineSecret('LIVEKIT_URL')

const SECRETS = { secrets: [livekitApiKey, livekitApiSecret, livekitUrl] }

// ── 共通: RoomServiceClient を生成 ───────────────────────
function makeRoomService() {
  const { RoomServiceClient } = require('livekit-server-sdk')
  return new RoomServiceClient(
    livekitUrl.value(),
    livekitApiKey.value(),
    livekitApiSecret.value(),
  )
}

// ── 1. トークン生成 ──────────────────────────────────────
exports.generateLiveKitToken = onCall(SECRETS, async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'ログインが必要です')

  const { roomName } = request.data ?? {}
  if (!roomName) throw new HttpsError('invalid-argument', 'roomName が必要です')

  const { AccessToken } = require('livekit-server-sdk')
  const identity    = request.auth.uid
  const displayName = request.auth.token.name ?? request.auth.token.email ?? 'ゲスト'

  const at = new AccessToken(
    livekitApiKey.value(),
    livekitApiSecret.value(),
    { identity, name: displayName, ttl: '2h' },
  )
  at.addGrant({ roomJoin: true, room: roomName, canPublish: true, canSubscribe: true, canPublishData: true })

  return { token: await at.toJwt(), url: livekitUrl.value() }
})

// ── 2. ルーム作成（ホスト用） ────────────────────────────
// roomName = host の uid を使用
exports.createLiveKitRoom = onCall(SECRETS, async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'ログインが必要です')

  const displayName = request.auth.token.name ?? request.auth.token.email ?? 'ゲスト'
  const roomName    = request.auth.uid  // uid をルーム名として使用

  const svc      = makeRoomService()
  const metadata = JSON.stringify({ hostName: displayName, status: 'waiting' })

  await svc.createRoom({ name: roomName, metadata, emptyTimeout: 300 })
  return { roomName }
})

// ── 3. ルーム一覧取得 ────────────────────────────────────
exports.listLiveKitRooms = onCall(SECRETS, async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'ログインが必要です')

  const svc   = makeRoomService()
  const rooms = await svc.listRooms()

  return rooms
    .filter((r) => r.numParticipants < 2)   // 満員は除外
    .map((r) => {
      let meta = {}
      try { meta = JSON.parse(r.metadata ?? '{}') } catch { /* ignore */ }
      return {
        roomName:        r.name,
        hostName:        meta.hostName    ?? '不明',
        status:          meta.status      ?? 'waiting',
        numParticipants: r.numParticipants,
      }
    })
})
