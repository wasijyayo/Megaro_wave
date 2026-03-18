import { useMemo, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { getWaveHeight } from '../../utils/waveParams'

const ASPECT = 9 / 16
const PLANE_HEIGHT = 3.2

export default function OpponentPlane({
  videoTrack,
  position = [-2.5, 0, -1],
  waveParams,
  heightOffset = 0,
}: {
  videoTrack: any
  position?: [number, number, number]
  waveParams?: any
  heightOffset?: number
}) {
  const groupRef = useRef<THREE.Group>(null)

  // 1. LiveKitのTrackからVideo要素を生成
  const videoEl = useMemo(() => {
    if (!videoTrack) return null
    const el = document.createElement('video')
    el.muted = true
    el.playsInline = true
    videoTrack.attach(el)
    return el
  }, [videoTrack])

  useEffect(() => {
    return () => { if (videoTrack && videoEl) videoTrack.detach(videoEl) }
  }, [videoTrack, videoEl])

  // 2. Video要素をThree.jsのテクスチャに変換
  const texture = useMemo(() => {
    if (!videoEl) return null
    const tex = new THREE.VideoTexture(videoEl)
    tex.colorSpace = THREE.SRGBColorSpace
    // セルフィー用 水平ミラー反転（相手の映像を鏡合わせにするかはお好みで）
    tex.wrapS = THREE.RepeatWrapping
    tex.repeat.set(-1, 1)
    tex.offset.set(1, 0)
    return tex
  }, [videoEl])

  // 3. サーフボードの読み込み
  let gltf: any = null
  try { gltf = useGLTF('/wii_balance_board/scene.gltf') } catch(e) {}

  // 4. 波の上下運動に追従させる
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      const worldX = groupRef.current.position.x
      const worldZ = groupRef.current.position.z
      const { amplitude = 0.5, frequency = 1.0, speed = 1.0, heightPattern = [] } = waveParams || {}
      
      const y = getWaveHeight(worldX, worldZ, time, amplitude, frequency, speed, heightPattern)
      groupRef.current.position.y = y + heightOffset
      
      // 相手の重心(CoP)は現状わからないので、とりあえず波に合わせてフワフワさせておきます
      const targetZ = Math.sin(time * speed) * 0.1
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ, 0.1)
    }
  })

  if (!texture) return null

  return (
    <group ref={groupRef} position={position}>
      {/* 相手の映像（グリーンバックを透過） */}
      <mesh position={[0, 0.2, 0.1]}>
        <planeGeometry args={[ASPECT * PLANE_HEIGHT, PLANE_HEIGHT]} />
        <shaderMaterial
          transparent={true}
          side={THREE.DoubleSide}
          depthWrite={false}
          uniforms={{
            map: { value: texture },
            keyColor: { value: new THREE.Color('#00FF00') } // 緑色を抜く
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
              float diff = length(color.rgb - keyColor);
              if (diff < 0.4) discard; 
              gl_FragColor = color;
            }
          `}
        />
      </mesh>

      {/* サーフボード */}
      {gltf && gltf.scene && (
        <group position={[0, -PLANE_HEIGHT / 2 + 0.6, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
          {/* 自分のPersonPlaneとモデルを共有するため clone() を使います */}
          <primitive object={gltf.scene.clone()} scale={5} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      )}
    </group>
  )
}