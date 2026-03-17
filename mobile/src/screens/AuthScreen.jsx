import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { login, register, loginAsGuest } from "../firebase";

export default function AuthScreen() {
  const insets = useSafeAreaInsets();

  const [mode,     setMode]     = useState("login"); // 'login' | 'register'
  const [username, setUsername] = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [loading,      setLoading]      = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);
  const [errorMsg,     setErrorMsg]     = useState("");

  const isLogin = mode === "login";

  const handleSubmit = async () => {
    if (!email || !password) {
      setErrorMsg("メールアドレスとパスワードを入力してください");
      return;
    }
    if (!isLogin && !username) {
      setErrorMsg("ユーザー名を入力してください");
      return;
    }
    setLoading(true);
    setErrorMsg("");
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(email, password, username);
      }
      // onAuth コールバックが App.js でユーザーをセットするので画面遷移不要
    } catch (e) {
      const ERROR_MESSAGES = {
        "auth/invalid-email": "メールアドレスの形式が正しくありません",
        "auth/user-not-found": "メールアドレスまたはパスワードが違います",
        "auth/wrong-password": "メールアドレスまたはパスワードが違います",
        "auth/invalid-credential": "メールアドレスまたはパスワードが違います",
        "auth/email-already-in-use":
          "このメールアドレスはすでに使用されています",
        "auth/weak-password": "パスワードは6文字以上にしてください",
        "auth/network-request-failed": "ネットワークエラーが発生しました",
      };
      setErrorMsg(ERROR_MESSAGES[e.code] ?? `エラー: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = async () => {
    setGuestLoading(true);
    setErrorMsg("");
    try {
      await loginAsGuest();
    } catch (e) {
      const GUEST_ERRORS = {
        "auth/operation-not-allowed": "Firebase ConsoleでAnonymous認証を有効にしてください",
        "auth/network-request-failed": "ネットワークエラーが発生しました",
      };
      setErrorMsg(GUEST_ERRORS[e.code] ?? `エラー: ${e.code}`);
    } finally {
      setGuestLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[s.root, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={s.inner}>
        <Text style={s.title}>MEGARO WAVE</Text>
        <Text style={s.subtitle}>{isLogin ? "ログイン" : "新規登録"}</Text>

        {!isLogin && (
          <TextInput
            style={s.input}
            placeholder="ユーザー名"
            placeholderTextColor="#555"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={20}
          />
        )}

        <TextInput
          style={s.input}
          placeholder="メールアドレス"
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={s.input}
          placeholder="パスワード (6文字以上)"
          placeholderTextColor="#555"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {errorMsg !== "" && <Text style={s.error}>{errorMsg}</Text>}

        <TouchableOpacity
          style={[s.btn, loading && s.btnDisabled]}
          onPress={handleSubmit}
          activeOpacity={0.8}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={s.btnText}>{isLogin ? "ログイン" : "登録する"}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={s.switchBtn}
          onPress={() => {
            setMode(isLogin ? "register" : "login");
            setErrorMsg("");
            setUsername("");
          }}
        >
          <Text style={s.switchText}>
            {isLogin ? "アカウントを作成する →" : "ログインはこちら →"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.guestBtn, guestLoading && s.btnDisabled]}
          onPress={handleGuest}
          activeOpacity={0.8}
          disabled={guestLoading}
        >
          {guestLoading ? (
            <ActivityIndicator color="#aaa" />
          ) : (
            <Text style={s.guestText}>ゲストとして続ける</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#071428" },
  inner: { flex: 1, justifyContent: "center", paddingHorizontal: 32 },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#fff",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#7aadff",
    textAlign: "center",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#0e1f3d",
    borderWidth: 1,
    borderColor: "#1e3a6a",
    borderRadius: 10,
    padding: 14,
    color: "#fff",
    fontSize: 15,
    marginBottom: 14,
  },

  error: {
    color: "#e05050",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 12,
  },

  btn: {
    backgroundColor: "#1a4fc4",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#1a4fc4",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 20,
  },
  btnDisabled: { opacity: 0.6 },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "700" },

  switchBtn: { alignItems: "center" },
  switchText: { color: "#7aadff", fontSize: 14 },

  guestBtn: {
    marginTop: 24,
    borderWidth: 1, borderColor: "#333",
    borderRadius: 10, paddingVertical: 12,
    alignItems: "center",
  },
  guestText: { color: "#666", fontSize: 14 },
});
