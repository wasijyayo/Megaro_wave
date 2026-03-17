import { initializeApp, getApps } from 'firebase/app'
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  serverTimestamp,
} from 'firebase/firestore'
import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
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

let app  = null
let db   = null
let auth = null

if (isConfigured) {
  app  = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
  db   = getFirestore(app)
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  })
}

// ── Authentication ────────────────────────────────────────

/** 新規登録（usernameをdisplayNameとして保存） */
export async function register(email, password, username) {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  if (username) await updateProfile(cred.user, { displayName: username })
  return cred
}

/** ログイン */
export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

/** ゲストログイン（匿名認証） */
export async function loginAsGuest() {
  return signInAnonymously(auth)
}

/** ログアウト */
export async function logout() {
  return signOut(auth)
}

/** 認証状態の変化を監視（unsubscribe関数を返す） */
export function onAuth(callback) {
  if (!auth) return () => {}
  return onAuthStateChanged(auth, callback)
}

// ── defalt コレクション ──────────────────────────────────
// defalt/{uid}/wifi/{ssid}  フィールド: ssid, fast (Mbps)

export async function saveWifiInfo(uid, ssid, fast) {
  if (!isConfigured) return
  try {
    await setDoc(doc(db, 'defalt', uid, 'wifi', ssid), {
      ssid,
      fast,
      updatedAt: serverTimestamp(),
    })
  } catch (e) {
    console.error('[Firebase] saveWifiInfo failed:', e)
  }
}

export async function getWifiInfo(uid) {
  if (!isConfigured) return []
  try {
    const snap = await getDocs(collection(db, 'defalt', uid, 'wifi'))
    return snap.docs.map(d => d.data())
  } catch (e) {
    console.error('[Firebase] getWifiInfo failed:', e)
    return []
  }
}

// ── clea_date コレクション ───────────────────────────────

export async function saveScore(uid, score) {
  if (!isConfigured) return
  try {
    await setDoc(doc(db, 'clea_date', uid), {
      score,
      updatedAt: serverTimestamp(),
    }, { merge: true })
  } catch (e) {
    console.error('[Firebase] saveScore failed:', e)
  }
}

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
