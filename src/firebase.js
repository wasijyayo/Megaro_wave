import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  limit,
  serverTimestamp,
} from 'firebase/firestore'

// -------------------------------------------------------
// TODO: Firebase コンソールで作成したプロジェクトの設定に置き換えてください
// https://console.firebase.google.com/
// プロジェクト設定 → マイアプリ → SDK の設定と構成
// -------------------------------------------------------
const firebaseConfig = {
  apiKey:            'YOUR_API_KEY',
  authDomain:        'YOUR_AUTH_DOMAIN',
  projectId:         'YOUR_PROJECT_ID',
  storageBucket:     'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId:             'YOUR_APP_ID',
}

const isConfigured = firebaseConfig.projectId !== 'YOUR_PROJECT_ID'

let db = null
if (isConfigured) {
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
}

export async function submitScore(name, score) {
  if (!isConfigured) {
    console.warn('[Firebase] 未設定のためスコアは保存されません')
    return
  }
  try {
    await addDoc(collection(db, 'scores'), {
      name,
      score,
      createdAt: serverTimestamp(),
    })
  } catch (e) {
    console.error('[Firebase] submitScore failed:', e)
  }
}

export async function getTopScores(n = 10) {
  if (!isConfigured) return []
  try {
    const q = query(collection(db, 'scores'), orderBy('score', 'desc'), limit(n))
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
  } catch (e) {
    console.error('[Firebase] getTopScores failed:', e)
    return []
  }
}
