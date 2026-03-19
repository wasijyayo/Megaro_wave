import { useMemo, useRef, MutableRefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import { TransformControls, useGLTF, Clone } from '@react-three/drei'
import * as THREE from 'three'
import { getWaveHeight, calcWaveTilt } from '../../utils/waveParams'

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
  waveParams?: { amplitude?: number; frequency?: number; speed?: number; turbulence?: number; heightPattern?: number[] }
  heightOffset?: number
  // サーフボード関連
  enableSurfboard?: boolean
  surfboardColor?: string
  surfboardGap?: number
  // 重心 (CoP) を参照する ref
  copRef?: MutableRefObject<{ x: number; y: number; total?: number } | null>
  // キャリブレーション済みの CoP を渡す ref (優先して使用)
  calibratedRef?: MutableRefObject<{ x: number; y: number; total?: number } | null>
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
  waveParams = { amplitude: 0.5, frequency: 1.0, speed: 1.0, turbulence: 0 },
  heightOffset = 0,
  objectName,
  enableSurfboard = true,
  surfboardColor = '#E8B77B',
  surfboardGap = 0.05,
  copRef,
  calibratedRef,
}: PersonPlaneProps) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const surfboardRef = useRef<any>(null)
  const appliedWaveOffsetRef = useRef(0)

  // GLTF model (try to load from public/wii_balance_board/board.gltf)
  let gltf: any = null
  try {
    // useGLTF will cache loaded models; load the scene.gltf placed in project root wii_balance_board
    gltf = useGLTF('/wii_balance_board/scene.gltf')
  } catch (e) {
    gltf = null
  }

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

    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      // ワールド座標を計算 (グループ位置 + メッシュ相対位置)
      const worldX = groupRef.current.position.x
      const worldZ = groupRef.current.position.z
      const { amplitude = 0.5, frequency = 1.0, speed = 1.0, turbulence = 0, heightPattern = [] } = waveParams || {}
      const y = getWaveHeight(worldX, worldZ, time, amplitude, frequency, speed, heightPattern)
      // 波に追従した高さをグループに適用
      if (followWave) groupRef.current.position.y = y + heightOffset

      // 重心(ref)が与えられていれば、波の目標傾きと重心の差分で傾きを決定
      if ((calibratedRef && calibratedRef.current) || (copRef && copRef.current)) {
        const cop = (calibratedRef && calibratedRef.current) ? calibratedRef.current : copRef!.current
        // 波の目標傾き（-1..1 に正規化）を計算
        const waveTarget = calcWaveTilt(amplitude, frequency, speed, turbulence, time)

        const rollDiff = waveTarget - (cop.x ?? 0)
        const amplifiedRoll = Math.sign(rollDiff) * Math.pow(Math.abs(rollDiff), 0.9) * 1.8
        const targetZ = amplifiedRoll
        const targetX = (cop.y ?? 0) * 0.35

        const gr = groupRef.current.rotation
        gr.z = THREE.MathUtils.lerp(gr.z, targetZ, 0.28)
        gr.x = THREE.MathUtils.lerp(gr.x, targetX, 0.18)

        if (surfboardRef.current) {
          const sr = surfboardRef.current.rotation
          const baseX = -Math.PI / 2
          sr.x = THREE.MathUtils.lerp(sr.x, baseX + targetX * 1.1, 0.3)
          sr.z = THREE.MathUtils.lerp(sr.z, targetZ * 1.1, 0.3)
        }
      }
    }
  })

  // サーフボード寸法 (シンプルな箱で表現)
  const SURFBOARD_LENGTH = ASPECT * PLANE_HEIGHT * 0.9
  const SURFBOARD_WIDTH = PLANE_HEIGHT * 0.25
  const SURFBOARD_THICKNESS = 0.05
  const SURFBOARD_Y = (-PLANE_HEIGHT / 2 - SURFBOARD_THICKNESS / 2 - surfboardGap) + 0.05

  const group = (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <mesh name={objectName ?? 'PersonPlane'} ref={meshRef} position={[0, 0.2, 0.1]}>
        <planeGeometry args={[ASPECT * PLANE_HEIGHT, PLANE_HEIGHT]} />
        <meshBasicMaterial map={texture} transparent depthWrite={false} side={THREE.DoubleSide} />
      </mesh>

      {enableSurfboard && (
        // GLTF が読み込めていればそれを使い、なければ箱で代替
        gltf && gltf.scene ? (
          // scale を確実に反映させるため、primitive を group で包んで group 側に scale を適用
          <group
            ref={surfboardRef}
            name="Surfboard"
            position={[0, SURFBOARD_Y, 0.5]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            {/* clone() をやめて同じオブジェクト参照を使い、primitive に直接 scale を渡す */}
            {/* X軸に対して90度回転させる */}
            <Clone object={gltf.scene} scale={5} rotation={[Math.PI / 2, 0, 0]} />
          </group>
        ) : (
          <mesh
            ref={surfboardRef}
            name="Surfboard"
            position={[0, SURFBOARD_Y, 0.5]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <boxGeometry args={[SURFBOARD_LENGTH, SURFBOARD_THICKNESS, SURFBOARD_WIDTH]} />
            <meshStandardMaterial color={surfboardColor} metalness={0.2} roughness={0.6} />
          </mesh>
        )
      )}
    </group>
  )

  if (!enableControls) return group

  return <TransformControls mode={mode}>{group}</TransformControls>
}
