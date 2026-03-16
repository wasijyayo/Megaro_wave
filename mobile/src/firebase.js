import { initializeApp, getApps } from 'firebase/app'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  serverTimestamp,
} from 'firebase/firestore'
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from '@env'

const firebaseConfig = {
  apiKey:            FIREBASE_API_KEY,
  authDomain:        FIREBASE_AUTH_DOMAIN,
  projectId:         FIREBASE_PROJECT_ID,
  storageBucket:     FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId:             FIREBASE_APP_ID,
}

const isConfigured = !!FIREBASE_PROJECT_ID

let db = null
if (isConfigured) {
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
  db = getFirestore(app)
}

// ── defalt コレクション ──────────────────────────────────
// ドキュメントID = user_name, フィールド: ssid, fast (Mbps)

/**
 * WiFi情報を保存
 * @param {string} userName
 * @param {string} ssid
 * @param {number} fast  通信速度 (Mbps)
 */
export async function saveWifiInfo(userName, ssid, fast) {
  if (!isConfigured) {
    console.warn('[Firebase] 未設定のためWifi情報は保存されません')
    return
  }
  try {
    await setDoc(doc(db, 'defalt', userName), {
      ssid,
      fast,
      updatedAt: serverTimestamp(),
    }, { merge: true })
  } catch (e) {
    console.error('[Firebase] saveWifiInfo failed:', e)
  }
}

/**
 * ユーザーのWifi情報を取得
 * @param {string} userName
 * @returns {{ ssid: string, fast: number } | null}
 */
export async function getWifiInfo(userName) {
  if (!isConfigured) return null
  try {
    const snap = await getDoc(doc(db, 'defalt', userName))
    return snap.exists() ? snap.data() : null
  } catch (e) {
    console.error('[Firebase] getWifiInfo failed:', e)
    return null
  }
}

// ── clea_date コレクション ───────────────────────────────
// ドキュメントID = user_name, フィールド: score

/**
 * スコアを保存
 * @param {string} userName
 * @param {number} score
 */
export async function saveScore(userName, score) {
  if (!isConfigured) {
    console.warn('[Firebase] 未設定のためスコアは保存されません')
    return
  }
  try {
    await setDoc(doc(db, 'clea_date', userName), {
      score,
      updatedAt: serverTimestamp(),
    }, { merge: true })
  } catch (e) {
    console.error('[Firebase] saveScore failed:', e)
  }
}

/**
 * スコアランキング上位N件を取得
 * @param {number} n
 * @returns {{ id: string, score: number }[]}
 */
export async function getTopScores(n = 10) {
  if (!isConfigured) return []
  try {
    const q = query(collection(db, 'clea_date'), orderBy('score', 'desc'), limit(n))
    const snap = await getDocs(q)
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (e) {
    console.error('[Firebase] getTopScores failed:', e)
    return []
  }
}
