import { useState, useEffect, useRef } from 'react'
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, Animated, useWindowDimensions, StyleSheet,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getWaveParams } from '../utils/waveParams'
import { getTopScores } from '../firebase'

// ── Wave アニメーション ──────────────────────────────────
function WaveBar({ amplitude, index }) {
  const anim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, { toValue: 1, duration: 800 + index * 120, useNativeDriver: true }),
        Animated.timing(anim, { toValue: 0, duration: 800 + index * 120, useNativeDriver: true }),
      ])
    ).start()
  }, [])
  const height = 20 + amplitude * 18
  const translateY = anim.interpolate({ inputRange: [0, 1], outputRange: [0, -(height * 0.6)] })
  return (
    <Animated.View
      style={[s.waveBar, { height, transform: [{ translateY }] }]}
    />
  )
}

// ── ランキング行 ─────────────────────────────────────────
function RankRow({ rank, name, score }) {
  const color = rank === 1 ? '#ffd700' : rank === 2 ? '#c0c0c0' : rank === 3 ? '#cd7f32' : '#aaa'
  return (
    <View style={s.rankRow}>
      <Text style={[s.rankNum, { color }]}>{rank}位</Text>
      <Text style={s.rankName} numberOfLines={1}>{name}</Text>
      <Text style={s.rankScore}>{score}</Text>
    </View>
  )
}

// ── HomeScreen ───────────────────────────────────────────
export default function HomeScreen({ navigation, route }) {
  const { width } = useWindowDimensions()
  const insets    = useSafeAreaInsets()
  const isTablet  = width >= 768

  const [userName,   setUserName]   = useState('')
  const [wifiInfo,   setWifiInfo]   = useState(null)   // { ssid, fast }
  const [rankings,   setRankings]   = useState([])

  useEffect(() => {
    getTopScores(10).then(setRankings)
  }, [])

  // WifiSelectScreenから戻ったとき、選択されたWiFiをセット
  useEffect(() => {
    if (route.params?.selectedWifi) {
      setWifiInfo(route.params.selectedWifi)
      navigation.setParams({ selectedWifi: undefined })
    }
  }, [route.params?.selectedWifi])

  const params = wifiInfo ? getWaveParams(wifiInfo.fast) : getWaveParams(0)

  // タブレット: 横並び / スマホ: 縦並び
  const layout = isTablet ? s.rowLayout : s.colLayout

  return (
    <View style={[s.root, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* ヘッダー */}
      <View style={s.header}>
        <Text style={s.title}>MEGARO WAVE</Text>
        <Text style={s.subtitle}>Wii Balance Board × MediaPipe サーフィンゲーム</Text>
      </View>

      <ScrollView contentContainerStyle={[s.body, layout]}>

        {/* ── ステージカード ── */}
        <View style={[s.card, isTablet && { flex: 1, marginRight: 12 }]}>
          <Text style={s.cardLabel}>今日のステージ</Text>
          <Text style={s.stageLabel}>{params.label}</Text>

          {wifiInfo ? (
            <View style={s.wifiInfoBox}>
              <Text style={s.wifiRow}>
                <Text style={s.wifiKey}>WiFi SSID　</Text>
                <Text style={s.wifiVal}>{wifiInfo.ssid}</Text>
              </Text>
              <Text style={s.wifiRow}>
                <Text style={s.wifiKey}>通信速度　</Text>
                <Text style={s.wifiVal}>{wifiInfo.fast} Mbps</Text>
              </Text>
              <Text style={s.wifiRow}>
                <Text style={s.wifiKey}>スコア倍率</Text>
                <Text style={[s.wifiVal, { color: '#00aaff' }]}>
                  x{params.difficultyMultiplier.toFixed(1)}
                </Text>
              </Text>
            </View>
          ) : (
            <Text style={s.noWifi}>WiFi未取得 — デフォルト難易度で動作</Text>
          )}

          {/* ユーザー名入力 */}
          <TextInput
            value={userName}
            onChangeText={setUserName}
            placeholder="プレイヤー名を入力"
            placeholderTextColor="#555"
            maxLength={20}
            style={s.input}
          />

          <TouchableOpacity style={s.startBtn} activeOpacity={0.8}>
            <Text style={s.startBtnText}>Game Start</Text>
          </TouchableOpacity>
        </View>

        {/* ── 波アニメーション ── */}
        <View style={[s.waveBox, isTablet && { flex: 0.6 }]}>
          <View style={s.waveBars}>
            {Array.from({ length: 12 }).map((_, i) => (
              <WaveBar key={i} amplitude={params.amplitude} index={i} />
            ))}
          </View>
        </View>

        {/* ── ランキング ── */}
        <View style={[s.card, isTablet && { flex: 1, marginLeft: 12 }]}>
          <Text style={s.cardLabel}>ランキング</Text>
          {rankings.length === 0 ? (
            <Text style={s.noWifi}>データなし</Text>
          ) : (
            rankings.map((r, i) => (
              <RankRow key={r.id} rank={i + 1} name={r.id} score={r.score} />
            ))
          )}
        </View>
      </ScrollView>

      {/* ── ボトムナビ ── */}
      <View style={[s.bottomNav, { paddingBottom: insets.bottom || 8 }]}>
        {[
          { label: 'WiFi取得',   screen: 'Wifi'       },
          { label: 'WiFi選択',   screen: 'WifiSelect' },
          { label: 'Wii Board接続', screen: null      },
          { label: 'Wii Board確認', screen: null      },
        ].map(({ label, screen }) => (
          <TouchableOpacity
            key={label}
            style={s.navBtn}
            onPress={() => screen && navigation.navigate(screen)}
            activeOpacity={0.7}
          >
            <Text style={s.navBtnText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  root:        { flex: 1, backgroundColor: '#071428' },
  header:      { alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#1e3a6a' },
  title:       { fontSize: 28, fontWeight: '900', color: '#fff', letterSpacing: 2 },
  subtitle:    { fontSize: 11, color: '#666', marginTop: 2 },
  body:        { padding: 12, flexGrow: 1 },
  rowLayout:   { flexDirection: 'row', alignItems: 'flex-start' },
  colLayout:   { flexDirection: 'column' },

  card: {
    backgroundColor: '#0e1f3d',
    borderWidth: 1, borderColor: '#1e3a6a',
    borderRadius: 12, padding: 16, marginBottom: 12,
  },
  cardLabel:   { fontSize: 10, color: '#666', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 },
  stageLabel:  { fontSize: 22, fontWeight: '800', color: '#fff', marginBottom: 10 },
  wifiInfoBox: { marginBottom: 12 },
  wifiRow:     { fontSize: 13, color: '#ccc', marginBottom: 4 },
  wifiKey:     { color: '#666' },
  wifiVal:     { color: '#fff', fontWeight: '700' },
  noWifi:      { fontSize: 12, color: '#555', marginBottom: 12 },

  input: {
    backgroundColor: '#071428', borderWidth: 1, borderColor: '#334',
    borderRadius: 8, padding: 10, color: '#fff', fontSize: 14, marginBottom: 10,
  },
  startBtn: {
    backgroundColor: '#1a4fc4', borderRadius: 8,
    paddingVertical: 12, alignItems: 'center',
    shadowColor: '#1a4fc4', shadowOpacity: 0.5, shadowRadius: 10, elevation: 6,
  },
  startBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },

  waveBox:  { justifyContent: 'flex-end', alignItems: 'center', height: 120, marginBottom: 12 },
  waveBars: { flexDirection: 'row', alignItems: 'flex-end', gap: 4 },
  waveBar:  { width: 14, backgroundColor: '#1a9eba', borderRadius: 3 },

  rankRow:  { flexDirection: 'row', alignItems: 'center', paddingVertical: 4, borderBottomWidth: 1, borderBottomColor: '#1a2e50' },
  rankNum:  { width: 36, fontSize: 12, fontWeight: '700' },
  rankName: { flex: 1, fontSize: 13, color: '#ccc' },
  rankScore:{ fontSize: 13, color: '#fff', fontWeight: '700' },

  bottomNav: {
    flexDirection: 'row', backgroundColor: '#040c1a',
    borderTopWidth: 1, borderTopColor: '#1e3a6a',
  },
  navBtn:     { flex: 1, paddingVertical: 12, alignItems: 'center', backgroundColor: '#1a4fc4', margin: 2, borderRadius: 4 },
  navBtnText: { color: '#fff', fontSize: 11, fontWeight: '600' },
})
