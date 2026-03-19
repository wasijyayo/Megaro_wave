import { useMemo, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF ,Clone} from '@react-three/drei'
import * as THREE from 'three'
import { getWaveHeight } from '../../utils/waveParams'

const ASPECT = 9 / 16
const PLANE_HEIGHT = 3.2

export default function OpponentPlane({
  videoTrack,
  videoElement,
  position = [-2.5, 0, -1],
  waveParams,
  heightOffset = 0,
}: {
  videoTrack: any
  videoElement?: HTMLVideoElement | null
  position?: [number, number, number]
  waveParams?: any
  heightOffset?: number
}) {
  const groupRef = useRef<THREE.Group>(null)

  // 左上パネルから video 要素が共有されない場合のみ、ここで attach する
  const attachedVideoEl = useMemo(() => {
    if (!videoTrack || videoElement) return null
    const el = document.createElement('video')
    el.muted = true
    el.playsInline = true
    videoTrack.attach(el)
    return el
  }, [videoTrack, videoElement])

  const sourceVideoEl = videoElement ?? attachedVideoEl

  useEffect(() => {
    return () => { if (videoTrack && attachedVideoEl) videoTrack.detach(attachedVideoEl) }
  }, [videoTrack, attachedVideoEl])

  // 2. Video要素をThree.jsのテクスチャに変換
  const texture = useMemo(() => {
    if (!sourceVideoEl) return null
    const tex = new THREE.VideoTexture(sourceVideoEl)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.generateMipmaps = false
    tex.minFilter = THREE.LinearFilter
    tex.magFilter = THREE.LinearFilter
    tex.wrapT = THREE.ClampToEdgeWrapping
    // セルフィー用 水平ミラー反転（相手の映像を鏡合わせにするかはお好みで）
    tex.wrapS = THREE.RepeatWrapping
    tex.repeat.set(-1, 1)
    tex.offset.set(1, 0)
    return tex
  }, [sourceVideoEl])

  useEffect(() => {
    return () => {
      texture?.dispose()
    }
  }, [texture])

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
      
      // 相手の重心(CoP)は現状わからないので、とりあえず波に合わせてフワフワさせるだけ
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
            keyColor: { value: new THREE.Color('#00FF00') }, // 緑色を抜く
            keyThreshold: { value: 0.9 },
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
            uniform float keyThreshold;
            varying vec2 vUv;
            void main() {
              vec4 color = texture2D(map, vUv);
              // sqrt を使わない距離近似でクロマキー判定を軽量化
              vec3 diff = abs(color.rgb - keyColor);
              float chromaDiff = diff.r + diff.g + diff.b;
              if (chromaDiff < keyThreshold) discard;
              gl_FragColor = color;
            }
          `}
        />
      </mesh>

      {/* サーフボード */}
      {gltf && gltf.scene && (
        <group position={[0, -PLANE_HEIGHT / 2 + 0.6, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
          {/* 自分のPersonPlaneとモデルを共有するため clone() を使います */}
          <Clone object={gltf.scene} scale={5} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      )}
    </group>
  )
}