import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'
import BackgroundScene from '../r3f/BackgroundScene.tsx'

const CAMERA_POSITION = [0, 3.6, 7]
const CAMERA_TARGET = [0, -0.35, 0.25]

const PERSON_TRANSFORM = {
  position: [0, -0.6, 1.8],
  rotation: [-Math.atan2(CAMERA_POSITION[1] - CAMERA_TARGET[1], CAMERA_POSITION[2] - CAMERA_TARGET[2]), 0, 0],
  scale: [2.4, 1.7, 1.7],
}


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
    camera.position.set(...CAMERA_POSITION)
    camera.lookAt(CAMERA_TARGET[0], CAMERA_TARGET[1], CAMERA_TARGET[2])
    camera.updateProjectionMatrix()
  }, [camera])

  return null
}

function ElapsedTimeReporter({ onElapsedTime }) {
  useFrame((state) => {
    onElapsedTime?.(state.clock.getElapsedTime())
  })

  return null
}

export default function R3FGameCanvas({ waveParams, personCanvas, onElapsedTime, calibratedRef, remoteVideoTrack }) {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0 }}
      camera={{ position: CAMERA_POSITION, fov: 60, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
    >
      <CameraController />
      <ElapsedTimeReporter onElapsedTime={onElapsedTime} />
      <color attach="background" args={['#071428']} />
      <BackgroundScene 
      waveParams={waveParams}
      personCanvas={personCanvas}
      remoteVideoTrack={remoteVideoTrack}
      personTransform={PERSON_TRANSFORM}
      calibratedRef={calibratedRef} />
    </Canvas>
  )
}

