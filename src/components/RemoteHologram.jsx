import React, { useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useVideoTexture } from '@react-three/drei'

export default function RemoteHologram({ videoTrack, position = [2, 1.6, 0.5], scale = [1.6, 2.4, 1] }) {
  const videoEl = useMemo(() => {
    if (!videoTrack) return null
    const el = document.createElement('video')
    el.muted = true
    el.playsInline = true
    el.autoplay = true
    el.style.display = 'none'
    try { videoTrack.attach?.(el) } catch (e) { /* some tracks return media stream, ignore */ }
    return el
  }, [videoTrack])

  useEffect(() => {
    return () => {
      try {
        if (videoTrack && videoEl) videoTrack.detach?.(videoEl)
      } catch (e) { /* ignore */ }
    }
  }, [videoTrack, videoEl])

  const texture = useVideoTexture(videoEl)
  if (!texture) return null

  const keyColor = new THREE.Color(0x00ff00)

  const chromaFragment = `
    uniform sampler2D map;
    uniform vec3 keyColor;
    uniform float threshold;
    uniform float slope;
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(map, vUv);
      float diff = length(color.rgb - keyColor);
      float alpha = smoothstep(threshold - slope, threshold + slope, diff);
      if (alpha < 0.02) discard;
      gl_FragColor = vec4(color.rgb, alpha);
    }
  `

  const chromaVertex = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  return (
    <mesh position={position} scale={scale} renderOrder={20}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        uniforms={{
          map: { value: texture },
          keyColor: { value: keyColor },
          threshold: { value: 0.45 },
          slope: { value: 0.08 },
        }}
        vertexShader={chromaVertex}
        fragmentShader={chromaFragment}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
