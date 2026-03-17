import { useState } from 'react'
import { login, register, loginAsGuest } from '../firebase.js'

const ERROR_MESSAGES = {
  'auth/invalid-email':          'メールアドレスの形式が正しくありません',
  'auth/user-not-found':         'メールアドレスまたはパスワードが違います',
  'auth/wrong-password':         'メールアドレスまたはパスワードが違います',
  'auth/invalid-credential':     'メールアドレスまたはパスワードが違います',
  'auth/email-already-in-use':   'このメールアドレスはすでに使用されています',
  'auth/weak-password':          'パスワードは6文字以上にしてください',
  'auth/network-request-failed': 'ネットワークエラーが発生しました',
  'auth/operation-not-allowed':  'この認証方法は有効化されていません',
}

export default function AuthScreen() {
  const [mode,         setMode]         = useState('login') // 'login' | 'register'
  const [username,     setUsername]     = useState('')
  const [email,        setEmail]        = useState('')
  const [password,     setPassword]     = useState('')
  const [loading,      setLoading]      = useState(false)
  const [guestLoading, setGuestLoading] = useState(false)
  const [errorMsg,     setErrorMsg]     = useState('')

  const isLogin = mode === 'login'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isLogin && !username) { setErrorMsg('ユーザー名を入力してください'); return }
    setLoading(true)
    setErrorMsg('')
    try {
      if (isLogin) {
        await login(email, password)
      } else {
        await register(email, password, username)
      }
    } catch (err) {
      setErrorMsg(ERROR_MESSAGES[err.code] ?? `エラー: ${err.code}`)
    } finally {
      setLoading(false)
    }
  }

  const handleGuest = async () => {
    setGuestLoading(true)
    setErrorMsg('')
    try {
      await loginAsGuest()
    } catch (err) {
      setErrorMsg(ERROR_MESSAGES[err.code] ?? `エラー: ${err.code}`)
    } finally {
      setGuestLoading(false)
    }
  }

  const switchMode = () => {
    setMode(isLogin ? 'register' : 'login')
    setErrorMsg('')
    setUsername('')
  }

  return (
    <div style={s.root}>
      <div style={s.card}>
        <h1 style={s.title}>MEGARO WAVE</h1>
        <p style={s.subtitle}>{isLogin ? 'ログイン' : '新規登録'}</p>

        <form onSubmit={handleSubmit} style={s.form}>
          {!isLogin && (
            <input
              style={s.input}
              type="text"
              placeholder="ユーザー名"
              value={username}
              onChange={e => setUsername(e.target.value)}
              maxLength={20}
              autoComplete="username"
            />
          )}
          <input
            style={s.input}
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            style={s.input}
            type="password"
            placeholder="パスワード (6文字以上)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete={isLogin ? 'current-password' : 'new-password'}
          />

          {errorMsg && <p style={s.error}>{errorMsg}</p>}

          <button style={{ ...s.btn, opacity: loading ? 0.6 : 1 }} disabled={loading}>
            {loading ? '処理中...' : isLogin ? 'ログイン' : '登録する'}
          </button>
        </form>

        <button style={s.switchBtn} onClick={switchMode}>
          {isLogin ? 'アカウントを作成する →' : 'ログインはこちら →'}
        </button>

        <button
          style={{ ...s.guestBtn, opacity: guestLoading ? 0.6 : 1 }}
          onClick={handleGuest}
          disabled={guestLoading}
        >
          {guestLoading ? '処理中...' : 'ゲストとして続ける'}
        </button>
      </div>
    </div>
  )
}

const s = {
  root: {
    width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#040c1a',
  },
  card: {
    width: 360,
    background: '#0e1f3d',
    border: '1px solid #1e3a6a',
    borderRadius: 16,
    padding: '40px 32px',
    display: 'flex', flexDirection: 'column', alignItems: 'stretch',
  },
  title: {
    margin: 0,
    fontSize: 26, fontWeight: 900, color: '#fff',
    letterSpacing: 2, textAlign: 'center', marginBottom: 4,
  },
  subtitle: {
    margin: 0, marginBottom: 28,
    fontSize: 15, color: '#7aadff', textAlign: 'center',
  },
  form: { display: 'flex', flexDirection: 'column', gap: 12 },
  input: {
    background: '#071428',
    border: '1px solid #1e3a6a',
    borderRadius: 8, padding: '12px 14px',
    color: '#fff', fontSize: 14, outline: 'none',
  },
  error: {
    margin: 0, fontSize: 13,
    color: '#e05050', textAlign: 'center',
  },
  btn: {
    background: '#1a4fc4', border: 'none',
    borderRadius: 8, padding: '13px 0',
    color: '#fff', fontSize: 15, fontWeight: 700,
    cursor: 'pointer', marginTop: 4,
  },
  switchBtn: {
    marginTop: 16,
    background: 'none', border: 'none',
    color: '#7aadff', fontSize: 13,
    cursor: 'pointer', textAlign: 'center',
  },
  guestBtn: {
    marginTop: 20,
    background: 'none',
    border: '1px solid #333',
    borderRadius: 8, padding: '11px 0',
    color: '#666', fontSize: 13,
    cursor: 'pointer',
  },
}
