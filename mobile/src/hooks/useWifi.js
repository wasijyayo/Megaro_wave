import { useState, useCallback } from 'react'
import { Platform, PermissionsAndroid } from 'react-native'
import WifiManager from 'react-native-wifi-reborn'

/**
 * Android の位置情報権限を要求（SSID取得に必要）
 */
async function requestLocationPermission() {
  if (Platform.OS !== 'android') return true
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title:   'WiFi情報へのアクセス',
      message: 'WiFiのSSIDを取得するために位置情報の権限が必要です',
      buttonPositive: '許可',
      buttonNegative: 'キャンセル',
    }
  )
  return granted === PermissionsAndroid.RESULTS.GRANTED
}

/**
 * 現在接続中のWifi情報を取得するhook
 */
export function useWifi() {
  const [ssid,     setSsid]     = useState(null)   // 接続中のSSID
  const [linkSpeed, setLinkSpeed] = useState(null) // Mbps
  const [frequency, setFrequency] = useState(null) // MHz (2412=2.4GHz, 5xxx=5GHz)
  const [status,   setStatus]   = useState('idle') // idle | loading | success | error
  const [error,    setError]    = useState(null)

  const fetch = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const ok = await requestLocationPermission()
      if (!ok) {
        setError('位置情報の権限が拒否されました')
        setStatus('error')
        return
      }

      const [currentSsid, speed, freq] = await Promise.all([
        WifiManager.getCurrentWifiSSID(),
        WifiManager.getLinkSpeed(),      // Mbps
        WifiManager.getFrequency(),      // MHz
      ])

      setSsid(currentSsid)
      setLinkSpeed(Number(speed))
      setFrequency(Number(freq))
      setStatus('success')
    } catch (e) {
      setError(e.message ?? 'WiFi情報の取得に失敗しました')
      setStatus('error')
    }
  }, [])

  return { ssid, linkSpeed, frequency, status, error, fetch }
}

/**
 * 周囲のWifiネットワーク一覧を取得するhook
 */
export function useWifiList() {
  const [list,   setList]   = useState([])
  const [status, setStatus] = useState('idle')
  const [error,  setError]  = useState(null)

  const scan = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const ok = await requestLocationPermission()
      if (!ok) {
        setError('位置情報の権限が拒否されました')
        setStatus('error')
        return
      }

      const networks = await WifiManager.loadWifiList()
      // 重複SSIDを除去し、信号強度でソート
      const seen = new Set()
      const unique = networks
        .filter(n => {
          if (!n.SSID || seen.has(n.SSID)) return false
          seen.add(n.SSID)
          return true
        })
        .sort((a, b) => b.level - a.level)

      setList(unique)
      setStatus('success')
    } catch (e) {
      setError(e.message ?? 'WiFiリストの取得に失敗しました')
      setStatus('error')
    }
  }, [])

  return { list, status, error, scan }
}
