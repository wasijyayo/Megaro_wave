import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef, useEffect } from 'react'
import * as THREE from 'three'
import BackgroundScene from '../r3f/BackgroundScene.tsx'
import PersonPlane from '../r3f/PersonPlane.tsx'

const PERSON_TRANSFORM = {
  position: [0, -0.35, 0.25],
  rotation: [0, 0, 0],
  scale: [1.15, 1.15, 1.15],
}

const CAMERA_TARGET = [0, -0.35, 0.25]

const vertexShader = /* glsl */`
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uFrequency;
  uniform float uSpeed;
  uniform float uTurbulence;

  varying float vElevation;

  void main() {
    vec3 pos = position;

    float w1 = sin(pos.x * uFrequency        + uTime * uSpeed         ) * uAmplitude;
    float w2 = sin(pos.x * uFrequency * 1.7  - uTime * uSpeed * 0.9 + 2.1) * uAmplitude * 0.5;
    float w3 = sin(pos.z * uFrequency * 0.6  + uTime * uSpeed * 1.1  ) * uAmplitude * 0.3;
    float wt = sin((pos.x * 0.7 + pos.z) * uFrequency * 2.0 + uTime * uSpeed * 1.8)
               * uAmplitude * 0.2 * uTurbulence;

    pos.y = w1 + w2 + w3 + wt;
    vElevation = pos.y;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = /* glsl */`
  uniform vec3  uDeepColor;
  uniform vec3  uSurfaceColor;
  uniform float uAmplitude;

  varying float vElevation;

  void main() {
    float mix_t = clamp((vElevation / max(uAmplitude, 0.01)) * 0.5 + 0.5, 0.0, 1.0);
    vec3 color  = mix(uDeepColor, uSurfaceColor, mix_t);

    float foam  = smoothstep(uAmplitude * 0.65, uAmplitude, vElevation);
    color       = mix(color, vec3(1.0, 1.0, 1.0), foam * 0.85);

    gl_FragColor = vec4(color, 0.92);
  }
`

function WaveSurface({ waveParams, onElapsedTime }) {
  const materialRef = useRef(null)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uAmplitude: { value: 0.5 },
    uFrequency: { value: 0.5 },
    uSpeed: { value: 1.0 },
    uTurbulence: { value: 0.0 },
    uDeepColor: { value: new THREE.Color('#0d4f8c') },
    uSurfaceColor: { value: new THREE.Color('#1a9eba') },
  }), [])

  useEffect(() => {
    if (!waveParams) return
    uniforms.uAmplitude.value = waveParams.amplitude
    uniforms.uFrequency.value = waveParams.frequency
    uniforms.uSpeed.value = waveParams.speed
    uniforms.uTurbulence.value = waveParams.turbulence
    uniforms.uDeepColor.value.set(waveParams.color.deep)
    uniforms.uSurfaceColor.value.set(waveParams.color.surface)
  }, [waveParams, uniforms])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    uniforms.uTime.value = t
    if (onElapsedTime) onElapsedTime(t)
  })

  return (
    <>
      <fog attach="fog" args={['#071428', 18, 40]} />
      <ambientLight color="#ffffff" intensity={0.6} />
      <directionalLight color="#c8e0ff" intensity={1.2} position={[5, 10, 8]} />

      <mesh position={[0, -1.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[32, 32, 256, 256]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

function CameraLookAt({ target }) {
  const { camera } = useThree()

  useEffect(() => {
    camera.lookAt(target[0], target[1], target[2])
    camera.updateProjectionMatrix()
  }, [camera, target])

  return null
}

export default function R3FGameCanvas({ waveParams, personCanvas, onElapsedTime }) {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0 }}
      camera={{ position: [0, 2.8, 7], fov: 60, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
    >
      <CameraLookAt target={CAMERA_TARGET} />
      <color attach="background" args={['#071428']} />
      <BackgroundScene />
      <WaveSurface waveParams={waveParams} onElapsedTime={onElapsedTime} />
      {personCanvas && (
        <PersonPlane
          canvas={personCanvas}
          mode="translate"
          enableControls={false}
          position={PERSON_TRANSFORM.position}
          rotation={PERSON_TRANSFORM.rotation}
          scale={PERSON_TRANSFORM.scale}
        />
      )}
    </Canvas>
  )
}
