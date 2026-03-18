import * as THREE from 'three'
import { useVideoTexture } from '@react-three/drei'
import { useMemo, useEffect } from 'react'

export function RemoteHologram({ videoTrack }) {
  // LiveKitのTrackからVideo要素を生成して紐付け
  const videoEl = useMemo(() => {
    if (!videoTrack) return null
    const el = document.createElement('video')
    el.muted = true
    el.playsInline = true
    videoTrack.attach(el)
    return el
  }, [videoTrack])

  // クリーンアップ
  useEffect(() => {
    return () => { if (videoTrack && videoEl) videoTrack.detach(videoEl) }
  }, [videoTrack, videoEl])

  const texture = useVideoTexture(videoEl)

  if (!texture) return null

  // 緑色（#00FF00）を消し去るクロマキーシェーダー
  return (
    <mesh>
      <planeGeometry args={[16, 9]} />
      <shaderMaterial
        transparent={true}
        side={THREE.DoubleSide}
        uniforms={{
          map: { value: texture },
          keyColor: { value: new THREE.Color(0x00ff00) } // ここで抜く色を指定
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform sampler2D map;
          uniform vec3 keyColor;
          varying vec2 vUv;
          void main() {
            vec4 color = texture2D(map, vUv);
            // 緑色との差分を計算して、近ければ透明（破棄）
            float diff = length(color.rgb - keyColor);
            if (diff < 0.4) discard; 
            gl_FragColor = color;
          }
        `}
      />
    </mesh>
  )
}