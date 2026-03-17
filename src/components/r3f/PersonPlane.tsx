import { useMemo, useRef, MutableRefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import { TransformControls } from '@react-three/drei'
import * as THREE from 'three'
import { getWaveHeight } from '../../utils/waveParams'

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
  // 波に追従させるオプション
  followWave?: boolean
  waveParams?: { amplitude?: number; frequency?: number; speed?: number }
  heightOffset?: number
  // サーフボード関連
  enableSurfboard?: boolean
  surfboardColor?: string
  surfboardGap?: number
  // 重心 (CoP) を参照する ref
  copRef?: MutableRefObject<{ x: number; y: number; total?: number } | null>
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
  enableSurfboard = true,
  surfboardColor = '#E8B77B',
  surfboardGap = 0.05,
  copRef,
}: PersonPlaneProps) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const surfboardRef = useRef<THREE.Mesh>(null)

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

    if (followWave && groupRef.current) {
      const time = state.clock.getElapsedTime()
      // ワールド座標を計算 (グループ位置 + メッシュ相対位置)
      const worldX = groupRef.current.position.x
      const worldZ = groupRef.current.position.z
      const { amplitude = 0.5, frequency = 1.0, speed = 1.0 } = waveParams || {}
      const y = getWaveHeight(worldX, worldZ, time, amplitude, frequency, speed)
      groupRef.current.position.y = y + heightOffset
    }

    // 重心(ref)が与えられていれば傾きを反映
    if (copRef && copRef.current && groupRef.current) {
      const cop = copRef.current
      // X: 左右 (-1..1) -> rotation around Z (tilt left/right)
      // Y: 前後 (-1..1) -> rotation around X (tilt forward/back)
      const targetZ = (cop.x ?? 0) * 0.5 // ラジアン: 調整可能
      const targetX = (cop.y ?? 0) * 0.25

      // スムーズに補間
      const gr = groupRef.current.rotation
      gr.z = THREE.MathUtils.lerp(gr.z, targetZ, 0.08)
      gr.x = THREE.MathUtils.lerp(gr.x, targetX, 0.08)

      // サーフボードは少し角度を大きめに反映
      if (surfboardRef.current) {
        const sr = surfboardRef.current.rotation
        // surfboard was initially rotated -Math.PI/2 on X; we keep that base and add small roll
        const baseX = -Math.PI / 2
        sr.x = THREE.MathUtils.lerp(sr.x, baseX + targetX * 0.9, 0.12)
        sr.z = THREE.MathUtils.lerp(sr.z, targetZ * 0.9, 0.12)
      }
    }
  })

  // サーフボード寸法 (シンプルな箱で表現)
  const SURFBOARD_LENGTH = ASPECT * PLANE_HEIGHT * 0.9
  const SURFBOARD_WIDTH = PLANE_HEIGHT * 0.25
  const SURFBOARD_THICKNESS = 0.05

  const group = (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <mesh name={objectName ?? 'PersonPlane'} ref={meshRef} position={[0, 0, 0.1]}>
        <planeGeometry args={[ASPECT * PLANE_HEIGHT, PLANE_HEIGHT]} />
        <meshBasicMaterial map={texture} transparent depthWrite={false} side={THREE.DoubleSide} />
      </mesh>

      {enableSurfboard && (
        <mesh
          ref={surfboardRef}
          name="Surfboard"
          // plane の下に配置（plane は中心が原点なので半分の高さ + ボード厚 + gap）
          position={[0, (-PLANE_HEIGHT / 2 - SURFBOARD_THICKNESS / 2 - surfboardGap)+0.7, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <boxGeometry args={[SURFBOARD_LENGTH, SURFBOARD_THICKNESS, SURFBOARD_WIDTH]} />
          <meshStandardMaterial color={surfboardColor} metalness={0.2} roughness={0.6} />
        </mesh>
      )}
    </group>
  )

  if (!enableControls) return group

  return <TransformControls mode={mode}>{group}</TransformControls>
}
