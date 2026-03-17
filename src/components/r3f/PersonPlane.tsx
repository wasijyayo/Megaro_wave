import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { TransformControls } from '@react-three/drei'
import * as THREE from 'three'

const ASPECT = 9 / 16
const PLANE_HEIGHT = 3.2 // units in scene

export type TransformMode = 'translate' | 'rotate' | 'scale'

interface PersonPlaneProps {
  canvas: HTMLCanvasElement
  mode?: TransformMode
  enableControls?: boolean
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]
}

export default function PersonPlane({
  canvas,
  mode = 'translate',
  enableControls = true,
  position = [0, 0, 0.1],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
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
  useFrame(() => {
    texture.needsUpdate = true
  })

  const plane = (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
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
