import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface OrbProps {
  position: [number, number, number]
  color: string
  speed?: number
  scale?: number
}

function Orb({ position, color, speed = 1, scale = 1 }: OrbProps) {
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={2}
          roughness={0.1}
          metalness={0.6}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

export default function BackgroundScene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <>
      <color attach="background" args={['#050510']} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} color="#4080ff" intensity={30} />
      <pointLight position={[-10, -5, 5]} color="#ff4080" intensity={20} />
      <pointLight position={[0, -10, 0]} color="#80ff40" intensity={15} />

      <Stars radius={80} depth={60} count={5000} factor={3} saturation={0.5} fade speed={0.3} />

      <group ref={groupRef}>
        <Orb position={[-5, 2, -12]} color="#3366ff" speed={0.7} scale={1.2} />
        <Orb position={[5, -1.5, -8]} color="#ff3366" speed={1.1} scale={0.9} />
        <Orb position={[2, 4, -15]} color="#33ffcc" speed={0.5} scale={1.5} />
        <Orb position={[-3, -3, -6]} color="#ffcc33" speed={1.4} scale={0.7} />
        <Orb position={[7, 3, -10]} color="#cc33ff" speed={0.9} scale={1.0} />
        <Orb position={[-7, -1, -14]} color="#ff9933" speed={0.6} scale={1.1} />
      </group>
    </>
  )
}
