import React, { useState, useEffect } from 'react'
import {
  View, Text, FlatList, TouchableOpacity, ActivityIndicator,
  useWindowDimensions, StyleSheet,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useWifiList } from '../hooks/useWifi'
import { getWaveParams, rssiToMbps } from '../utils/waveParams'
import { saveWifiInfo } from '../firebase'

// 難易度フィルター選択肢
const DIFFICULTY_OPTIONS = ['すべて', '湖のように穏やか', '穏やか', '普通', '荒れ', '嵐']

// 難易度に対応するカラー
const LABEL_COLOR = {
  '湖のように穏やか': '#4fc3f7',
  '穏やか':           '#81d4fa',
  '普通':             '#fff176',
  '荒れ':             '#ffb74d',
  '嵐':               '#ef5350',
}

function WifiRow({ item, onSelect }) {
  const mbps   = rssiToMbps(item.level)
  const params = getWaveParams(mbps)
  return (
    <TouchableOpacity style={s.row} onPress={() => onSelect(item, mbps, params)} activeOpacity={0.7}>
      <View style={s.rowLeft}>
        <Text style={s.rowSsid} numberOfLines={1}>{item.SSID}</Text>
        <Text style={s.rowSpeed}>{mbps} Mbps</Text>
      </View>
      <View style={s.rowCenter}>
        <Text style={[s.rowLabel, { color: LABEL_COLOR[params.label] ?? '#fff' }]}>
          {params.label}
        </Text>
      </View>
      <View style={s.rowRight}>
        <Text style={s.rowMulti}>x{params.difficultyMultiplier.toFixed(1)}倍</Text>
      </View>
    </TouchableOpacity>
  )
}

export default function WifiSelectScreen({ navigation }) {
  const { width } = useWindowDimensions()
  const insets    = useSafeAreaInsets()
  const isTablet  = width >= 768

  const { list, status, error, scan } = useWifiList()
  const [filter,   setFilter]   = useState('すべて')
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => { scan() }, [])

  const filtered = filter === 'すべて'
    ? list
    : list.filter(item => {
        const mbps   = rssiToMbps(item.level)
        const params = getWaveParams(mbps)
        return params.label === filter
      })

  const handleSelect = async (item, mbps) => {
    // TODO: ユーザー名をContextから取得する場合はContextを使用
    await saveWifiInfo('guest', item.SSID, mbps)
    navigation.goBack()
  }

  return (
    <View style={[s.root, { paddingTop: insets.top }]}>
      {/* ヘッダー */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={s.backBtn}>
          <Text style={s.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={s.title}>WiFi選択</Text>

        {/* 難易度フィルター */}
        <View>
          <TouchableOpacity style={s.filterBtn} onPress={() => setShowFilter(v => !v)}>
            <Text style={s.filterText}>{filter} ▾</Text>
          </TouchableOpacity>
          {showFilter && (
            <View style={[s.dropdown, isTablet && s.dropdownTablet]}>
              {DIFFICULTY_OPTIONS.map(opt => (
                <TouchableOpacity
                  key={opt}
                  style={[s.dropdownItem, filter === opt && s.dropdownItemActive]}
                  onPress={() => { setFilter(opt); setShowFilter(false) }}
                >
                  <Text style={[s.dropdownText, filter === opt && s.dropdownTextActive]}>
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      {/* カラム見出し */}
      <View style={[s.colHeader, isTablet && s.colHeaderTablet]}>
        <Text style={[s.colText, { flex: 2 }]}>SSID</Text>
        <Text style={[s.colText, { flex: 1 }]}>難易度</Text>
        <Text style={[s.colText, { flex: 1 }]}>通信速度</Text>
        <Text style={[s.colText, { flex: 1 }]}>得点倍率</Text>
      </View>

      {/* リスト */}
      {status === 'loading' && (
        <View style={s.center}>
          <ActivityIndicator color="#1a9eba" size="large" />
          <Text style={s.loadingText}>スキャン中...</Text>
        </View>
      )}
      {status === 'error' && (
        <View style={s.center}>
          <Text style={s.errorText}>{error}</Text>
          <TouchableOpacity style={s.retryBtn} onPress={scan}>
            <Text style={s.retryText}>再試行</Text>
          </TouchableOpacity>
        </View>
      )}
      {status === 'success' && (
        <FlatList
          data={filtered}
          keyExtractor={item => item.BSSID}
          renderItem={({ item }) => (
            <WifiRow item={item} onSelect={handleSelect} />
          )}
          ListEmptyComponent={
            <Text style={[s.center, s.loadingText]}>対象のWiFiが見つかりません</Text>
          }
          contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
        />
      )}

      {/* 再スキャンボタン */}
      {status === 'success' && (
        <TouchableOpacity
          style={[s.rescanBtn, { marginBottom: insets.bottom + 8 }]}
          onPress={scan}
          activeOpacity={0.8}
        >
          <Text style={s.rescanText}>再スキャン</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const s = StyleSheet.create({
  root:   { flex: 1, backgroundColor: '#071428' },
  header: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 12,
    borderBottomWidth: 1, borderBottomColor: '#1e3a6a',
  },
  backBtn:   { marginRight: 12 },
  backArrow: { color: '#fff', fontSize: 20 },
  title:     { flex: 1, fontSize: 20, fontWeight: '800', color: '#fff' },

  filterBtn:  {
    borderWidth: 1, borderColor: '#1e3a6a', borderRadius: 6,
    paddingHorizontal: 10, paddingVertical: 6, backgroundColor: '#0e1f3d',
  },
  filterText: { color: '#fff', fontSize: 12 },
  dropdown:   {
    position: 'absolute', right: 0, top: 36, zIndex: 100,
    backgroundColor: '#0e1f3d', borderWidth: 1, borderColor: '#1e3a6a',
    borderRadius: 8, minWidth: 130,
  },
  dropdownTablet: { minWidth: 160 },
  dropdownItem:   { paddingVertical: 8, paddingHorizontal: 14 },
  dropdownItemActive: { backgroundColor: '#1a3060' },
  dropdownText:   { color: '#aaa', fontSize: 13 },
  dropdownTextActive: { color: '#fff', fontWeight: '700' },

  colHeader: {
    flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 8,
    borderBottomWidth: 1, borderBottomColor: '#1a2e50',
  },
  colHeaderTablet: { paddingHorizontal: 32 },
  colText: { fontSize: 11, color: '#555', fontWeight: '600', letterSpacing: 1 },

  row: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 14,
    borderBottomWidth: 1, borderBottomColor: '#0e1f3d',
  },
  rowLeft:   { flex: 2 },
  rowCenter: { flex: 1, alignItems: 'center' },
  rowRight:  { flex: 1, alignItems: 'flex-end' },
  rowSsid:   { fontSize: 14, color: '#fff', fontWeight: '600' },
  rowSpeed:  { fontSize: 11, color: '#666', marginTop: 2 },
  rowLabel:  { fontSize: 12, fontWeight: '700' },
  rowMulti:  { fontSize: 13, color: '#00aaff', fontWeight: '700' },

  center:      { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
  loadingText: { color: '#666', marginTop: 12, fontSize: 14 },
  errorText:   { color: '#e05050', fontSize: 14, textAlign: 'center', marginBottom: 16 },
  retryBtn:    { backgroundColor: '#1a4fc4', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 24 },
  retryText:   { color: '#fff', fontWeight: '700' },

  rescanBtn: {
    marginHorizontal: 16, backgroundColor: '#1a4fc4', borderRadius: 8,
    paddingVertical: 12, alignItems: 'center',
  },
  rescanText: { color: '#fff', fontSize: 14, fontWeight: '700' },
})
