import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { TransformControls } from '@react-three/drei'
import * as THREE from 'three'
import { getWaveHeight } from '../../utils/waveParams'

const ASPECT = 16 / 9
const PLANE_HEIGHT = 3.2 // units in scene

export type TransformMode = 'translate' | 'rotate' | 'scale'

interface PersonPlaneProps {
  canvas: HTMLCanvasElement
  mode?: TransformMode
  enableControls?: boolean
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]
  // 波に追従させるオプション
  followWave?: boolean
  waveParams?: { amplitude?: number; frequency?: number; speed?: number }
  heightOffset?: number
  // オブジェクト名　カメラがシーン内のオブジェクトを検索するために使用
  objectName?: string
}

export default function PersonPlane({
  canvas,
  mode = 'translate',
  enableControls = true,
  position = [0, 0, 0.1],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  followWave = false,
  waveParams = { amplitude: 0.5, frequency: 1.0, speed: 1.0 },
  heightOffset = 0,
  objectName,
}: PersonPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  const texture = useMemo(() => {
    const t = new THREE.CanvasTexture(canvas)
    // セルフィー用 水平ミラー反転
    t.wrapS = THREE.RepeatWrapping
    t.repeat.set(-1, 1)
    t.offset.set(1, 0)
    return t
  }, [canvas])

  // 毎フレーム canvas の内容を GPU に転送
  useFrame((state) => {
    texture.needsUpdate = true

    if (followWave && meshRef.current) {
      const time = state.clock.getElapsedTime()
      const pos = meshRef.current.position
      const x = pos.x
      const z = pos.z
      const { amplitude = 0.5, frequency = 1.0, speed = 1.0 } = waveParams || {}
      const y = getWaveHeight(x, z, time, amplitude, frequency, speed)
      meshRef.current.position.y = y + heightOffset
    }
  })

  const plane = (
    <mesh name={objectName ?? 'PersonPlane'} ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[ASPECT * PLANE_HEIGHT, PLANE_HEIGHT]} />
      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )

  if (!enableControls) return plane

  return <TransformControls mode={mode}>{plane}</TransformControls>
}
