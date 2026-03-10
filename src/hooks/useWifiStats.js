import { useState, useEffect } from 'react'

const FALLBACK_DOWNLINK = 10 // Mbps (navigator.connection 非対応ブラウザ用)

export function useWifiStats(pollInterval = 3000) {
  const [stats, setStats] = useState(() => {
    const conn = navigator.connection
    return {
      downlink:      conn?.downlink      ?? FALLBACK_DOWNLINK,
      effectiveType: conn?.effectiveType ?? 'unknown',
      rtt:           conn?.rtt           ?? 0,
      supported:     !!conn,
    }
  })

  useEffect(() => {
    const conn = navigator.connection
    if (!conn) return

    const update = () => {
      setStats({
        downlink:      conn.downlink      ?? FALLBACK_DOWNLINK,
        effectiveType: conn.effectiveType ?? 'unknown',
        rtt:           conn.rtt           ?? 0,
        supported:     true,
      })
    }

    conn.addEventListener('change', update)
    const timer = setInterval(update, pollInterval)

    return () => {
      conn.removeEventListener('change', update)
      clearInterval(timer)
    }
  }, [pollInterval])

  return stats
}
