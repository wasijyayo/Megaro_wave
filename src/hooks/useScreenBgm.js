import { useEffect, useMemo, useRef } from 'react'

const homeTracks = Object.values(
  import.meta.glob('../assets/bgm/home/*.{mp3,ogg,wav,m4a,aac,flac}', {
    eager: true,
    import: 'default',
  }),
).sort()

const gameTracks = Object.values(
  import.meta.glob('../assets/bgm/game/*.{mp3,ogg,wav,m4a,aac,flac}', {
    eager: true,
    import: 'default',
  }),
).sort()

const SCREEN_BGM = {
  home: homeTracks,
  game: gameTracks,
}

export function useScreenBgm(screen) {
  const audioRef = useRef(null)
  const trackIndexRef = useRef(0)
  const interactionHandlerRef = useRef(null)

  const playlist = useMemo(() => SCREEN_BGM[screen] ?? [], [screen])

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.preload = 'auto'
      audioRef.current.volume = 0.35
    }

    const audio = audioRef.current

    const cleanupInteraction = () => {
      const handler = interactionHandlerRef.current
      if (!handler) return
      window.removeEventListener('pointerdown', handler)
      window.removeEventListener('keydown', handler)
      interactionHandlerRef.current = null
    }

    const playCurrentTrack = async () => {
      if (playlist.length === 0) {
        audio.pause()
        audio.removeAttribute('src')
        audio.load()
        cleanupInteraction()
        return
      }

      const nextSrc = playlist[trackIndexRef.current] ?? playlist[0]
      if (audio.src !== new URL(nextSrc, window.location.href).href) {
        audio.src = nextSrc
        audio.currentTime = 0
      }

      try {
        await audio.play()
        cleanupInteraction()
      } catch {
        if (!interactionHandlerRef.current) {
          interactionHandlerRef.current = () => {
            playCurrentTrack()
          }
          window.addEventListener('pointerdown', interactionHandlerRef.current, { passive: true })
          window.addEventListener('keydown', interactionHandlerRef.current)
        }
      }
    }

    const handleEnded = () => {
      if (playlist.length === 0) return
      trackIndexRef.current = (trackIndexRef.current + 1) % playlist.length
      playCurrentTrack()
    }

    trackIndexRef.current = 0
    audio.pause()
    audio.removeEventListener('ended', handleEnded)
    audio.addEventListener('ended', handleEnded)
    playCurrentTrack()

    return () => {
      cleanupInteraction()
      audio.pause()
      audio.currentTime = 0
      audio.removeEventListener('ended', handleEnded)
    }
  }, [playlist])
}
