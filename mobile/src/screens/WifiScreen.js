import React, { useState } from 'react'
import {
  View, Text, TouchableOpacity, ActivityIndicator,
  useWindowDimensions, StyleSheet, Alert,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useWifi } from '../hooks/useWifi'
import { saveWifiInfo } from '../firebase'

export default function WifiScreen({ navigation }) {
  const { width }  = useWindowDimensions()
  const insets     = useSafeAreaInsets()
  const isTablet   = width >= 768

  const { ssid, linkSpeed, frequency, status, error, fetch } = useWifi()
  const [saving, setSaving] = useState(false)

  const band = frequency
    ? (frequency >= 5000 ? '5 GHz' : '2.4 GHz')
    : '---'

  const handleSave = async () => {
    if (!ssid) return
    setSaving(true)
    // TODO: ユーザー名をアプリ全体のstateから取得する場合はContextを使用
    await saveWifiInfo('guest', ssid, linkSpeed ?? 0)
    setSaving(false)
    Alert.alert('保存完了', `${ssid} の情報を保存しました`, [
      { text: 'OK', onPress: () => navigation.goBack() },
    ])
  }

  return (
    <View style={[s.root, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* 戻るボタン */}
      <TouchableOpacity style={s.backBtn} onPress={() => navigation.goBack()}>
        <Text style={s.backArrow}>←</Text>
      </TouchableOpacity>

      <View style={[s.content, isTablet && s.contentTablet]}>
        {/* 現在のWiFi */}
        <Text style={s.currentLabel}>現在のwifi</Text>
        <Text style={s.ssidText}>
          {status === 'success' ? ssid : 'xxxxxxxx'}
        </Text>

        {/* 詳細情報 */}
        <View style={s.infoBox}>
          <View style={s.infoRow}>
            <Text style={s.infoKey}>通信速度</Text>
            <Text style={s.infoVal}>
              {status === 'success' && linkSpeed != null ? `${linkSpeed} Mbps` : 'x bps'}
            </Text>
          </View>
          <View style={s.infoRow}>
            <Text style={s.infoKey}>通信方式</Text>
            <Text style={s.infoVal}>
              {status === 'success' ? band : 'xxxxx'}
            </Text>
          </View>
        </View>

        {/* ステータス */}
        <View style={s.statusBox}>
          {status === 'loading' && (
            <ActivityIndicator color="#1a9eba" size="small" style={{ marginRight: 8 }} />
          )}
          <Text style={[
            s.statusText,
            status === 'success' && s.statusSuccess,
            status === 'error'   && s.statusError,
          ]}>
            {status === 'idle'    && '通信状態: 未取得'}
            {status === 'loading' && '取得中...'}
            {status === 'success' && '通信状態: wifi取得成功'}
            {status === 'error'   && `エラー: ${error}`}
          </Text>
        </View>

        {/* WiFi取得ボタン */}
        <TouchableOpacity
          style={s.fetchBtn}
          onPress={fetch}
          activeOpacity={0.8}
          disabled={status === 'loading'}
        >
          <Text style={s.fetchBtnText}>wifiを取得</Text>
        </TouchableOpacity>

        {/* 保存ボタン（取得成功時のみ表示） */}
        {status === 'success' && (
          <TouchableOpacity
            style={[s.saveBtn, saving && s.saveBtnDisabled]}
            onPress={handleSave}
            activeOpacity={0.8}
            disabled={saving}
          >
            {saving
              ? <ActivityIndicator color="#fff" size="small" />
              : <Text style={s.saveBtnText}>Firebaseに保存</Text>
            }
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  root:    { flex: 1, backgroundColor: '#071428' },
  backBtn: {
    position: 'absolute', top: 52, left: 16, zIndex: 10,
    width: 40, height: 40, borderRadius: 8,
    borderWidth: 1, borderColor: '#1e3a6a',
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#0e1f3d',
  },
  backArrow: { color: '#fff', fontSize: 18 },

  content: {
    flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32,
  },
  contentTablet: { paddingHorizontal: 80 },

  currentLabel: { fontSize: 13, color: '#666', letterSpacing: 2, marginBottom: 6 },
  ssidText:     { fontSize: 26, fontWeight: '800', color: '#fff', marginBottom: 24 },

  infoBox: {
    width: '100%', backgroundColor: '#0e1f3d',
    borderWidth: 1, borderColor: '#1e3a6a',
    borderRadius: 12, padding: 16, marginBottom: 24,
  },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  infoKey: { fontSize: 13, color: '#666' },
  infoVal: { fontSize: 13, color: '#fff', fontWeight: '600' },

  statusBox:     { flexDirection: 'row', alignItems: 'center', marginBottom: 32 },
  statusText:    { fontSize: 14, color: '#555' },
  statusSuccess: { color: '#1a9eba' },
  statusError:   { color: '#e05050' },

  fetchBtn: {
    backgroundColor: '#1a4fc4', borderRadius: 24,
    paddingVertical: 12, paddingHorizontal: 40,
    shadowColor: '#1a4fc4', shadowOpacity: 0.5, shadowRadius: 10, elevation: 6,
    marginBottom: 12,
  },
  fetchBtnText: { color: '#fff', fontSize: 15, fontWeight: '700' },

  saveBtn: {
    backgroundColor: '#0e7aa0', borderRadius: 24,
    paddingVertical: 12, paddingHorizontal: 40,
    minWidth: 160, alignItems: 'center',
  },
  saveBtnDisabled: { opacity: 0.6 },
  saveBtnText:     { color: '#fff', fontSize: 15, fontWeight: '700' },
})
