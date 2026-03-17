import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'
import BackgroundScene from '../r3f/BackgroundScene.tsx'

const PERSON_TRANSFORM = {
  position: [0, -0.6, 0.25],
  rotation: [-Math.atan2(2.8 - (-0.35), 7 - 0.25), 0, 0], // カメラの角度(見下ろし)に合わせて傾ける
  scale: [3.4, 3.4, 3.4],
}

const CAMERA_TARGET = [0, -0.35, 0.25]


function CameraLookAt({ target, targetName = 'PersonPlane' }) {
  const { camera, scene } = useThree()
  // 毎フレーム、シーン内のオブジェクトを検索して追従
  useFrame(() => {
    const obj = scene.getObjectByName(targetName)
    if (obj) {
      const pos = new THREE.Vector3()
      obj.getWorldPosition(pos)
      camera.lookAt(pos.x, pos.y, pos.z)
    } else if (target) {
      camera.lookAt(target[0], target[1], target[2])
    }
    camera.updateProjectionMatrix()
  })

  return null
}

function CameraController() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 2.8, 7)
    camera.lookAt(CAMERA_TARGET[0], CAMERA_TARGET[1], CAMERA_TARGET[2])
    camera.updateProjectionMatrix()
  }, [camera])

  return null
}

export default function R3FGameCanvas({ waveParams, personCanvas, onElapsedTime }) {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0 }}
      camera={{ position: [-0.5, 5, 10], fov: 60, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
    >
      <CameraController />
      <color attach="background" args={['#071428']} />
      <BackgroundScene waveParams={waveParams} personCanvas={personCanvas} personTransform={PERSON_TRANSFORM} />
    </Canvas>
  )
}

