import { initializeApp, getApps } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  orderBy,
  query,
  limit,
  serverTimestamp,
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

const isConfigured = !!firebaseConfig.projectId

let db   = null
let auth = null

if (isConfigured) {
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
  db   = getFirestore(app)
  auth = getAuth(app)
}

// ── Authentication ────────────────────────────────────────

export async function register(email, password, username) {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  if (username) await updateProfile(cred.user, { displayName: username })
  return cred
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export async function loginAsGuest() {
  return signInAnonymously(auth)
}

export async function logout() {
  return signOut(auth)
}

export function onAuth(callback) {
  if (!auth) return () => {}
  return onAuthStateChanged(auth, callback)
}

// ── WiFi一覧 ─────────────────────────────────────────────
// defalt/{userName}/wifi/{ssid}  フィールド: ssid, fast

/**
 * 保存済みWiFi一覧を取得
 * @param {string} userName
 * @returns {{ ssid: string, fast: number }[]}
 */
export async function getWifiList(userName = 'guest') {
  if (!isConfigured) return []
  try {
    const snap = await getDocs(collection(db, 'defalt', userName, 'wifi'))
    return snap.docs.map(d => d.data())
  } catch (e) {
    console.error('[Firebase] getWifiList failed:', e)
    return []
  }
}

// ── スコア ───────────────────────────────────────────────
// clea_date/{userName}  フィールド: score

/**
 * スコアを保存
 * @param {string} name
 * @param {number} score
 */
export async function submitScore(name, score) {
  if (!isConfigured) {
    console.warn('[Firebase] 未設定のためスコアは保存されません')
    return
  }
  try {
    await setDoc(doc(db, 'clea_date', name), {
      score,
      updatedAt: serverTimestamp(),
    }, { merge: true })
  } catch (e) {
    console.error('[Firebase] submitScore failed:', e)
  }
}

/**
 * ランキング上位N件を取得
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
