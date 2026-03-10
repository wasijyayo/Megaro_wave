import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import * as THREE from 'three'

// ── シェーダー ────────────────────────────────────────────
const vertexShader = /* glsl */`
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uFrequency;
  uniform float uSpeed;
  uniform float uTurbulence;

  varying vec2  vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float w1 = sin(pos.x * uFrequency        + uTime * uSpeed         ) * uAmplitude;
    float w2 = sin(pos.x * uFrequency * 1.7  - uTime * uSpeed * 0.9 + 2.1) * uAmplitude * 0.5;
    float w3 = sin(pos.z * uFrequency * 0.6  + uTime * uSpeed * 1.1  ) * uAmplitude * 0.3;
    float wt = sin((pos.x * 0.7 + pos.z) * uFrequency * 2.0 + uTime * uSpeed * 1.8)
               * uAmplitude * 0.2 * uTurbulence;

    pos.y    = w1 + w2 + w3 + wt;
    vElevation = pos.y;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = /* glsl */`
  uniform vec3  uDeepColor;
  uniform vec3  uSurfaceColor;
  uniform float uAmplitude;

  varying vec2  vUv;
  varying float vElevation;

  void main() {
    float mix_t = clamp((vElevation / max(uAmplitude, 0.01)) * 0.5 + 0.5, 0.0, 1.0);
    vec3 color  = mix(uDeepColor, uSurfaceColor, mix_t);

    // 波の頂点に白い泡
    float foam  = smoothstep(uAmplitude * 0.65, uAmplitude, vElevation);
    color       = mix(color, vec3(1.0, 1.0, 1.0), foam * 0.85);

    gl_FragColor = vec4(color, 0.92);
  }
`

// ─────────────────────────────────────────────────────────
const WaveCanvas = forwardRef(function WaveCanvas({ waveParams }, ref) {
  const canvasRef = useRef(null)
  const stateRef  = useRef({})   // { uniforms, clock }

  // 波の傾きを外部に公開 (ゲームロジック用)
  useImperativeHandle(ref, () => ({
    getElapsedTime: () => stateRef.current.clock?.getElapsedTime() ?? 0,
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const w = canvas.clientWidth  || window.innerWidth
    const h = canvas.clientHeight || window.innerHeight

    // ── Three.js セットアップ ──
    const scene    = new THREE.Scene()
    scene.background = new THREE.Color('#071428')
    scene.fog        = new THREE.Fog('#071428', 18, 40)

    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100)
    camera.position.set(0, 2.8, 7)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // ── 波 (Plane + ShaderMaterial) ──
    const geometry = new THREE.PlaneGeometry(32, 32, 256, 256)
    geometry.rotateX(-Math.PI / 2)

    const uniforms = {
      uTime:         { value: 0 },
      uAmplitude:    { value: 0.5 },
      uFrequency:    { value: 0.5 },
      uSpeed:        { value: 1.0 },
      uTurbulence:   { value: 0.0 },
      uDeepColor:    { value: new THREE.Color('#0d4f8c') },
      uSurfaceColor: { value: new THREE.Color('#1a9eba') },
    }

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    })

    const wave = new THREE.Mesh(geometry, material)
    scene.add(wave)

    // ── 空 (グラデーション背景用平面) ──
    const skyGeo = new THREE.PlaneGeometry(80, 40)
    const skyMat = new THREE.MeshBasicMaterial({ color: '#112244', side: THREE.DoubleSide })
    const sky    = new THREE.Mesh(skyGeo, skyMat)
    sky.position.set(0, 6, -20)
    scene.add(sky)

    // ── 光源 ──
    scene.add(new THREE.AmbientLight('#ffffff', 0.6))
    const dir = new THREE.DirectionalLight('#c8e0ff', 1.2)
    dir.position.set(5, 10, 8)
    scene.add(dir)

    const clock = new THREE.Clock()
    stateRef.current = { uniforms, clock }

    // ── リサイズ ──
    const onResize = () => {
      const nw = canvas.clientWidth  || window.innerWidth
      const nh = canvas.clientHeight || window.innerHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    // ── アニメーション ──
    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      uniforms.uTime.value = clock.getElapsedTime()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  // waveParams 変化時にユニフォームを更新
  useEffect(() => {
    const { uniforms } = stateRef.current
    if (!uniforms || !waveParams) return
    uniforms.uAmplitude.value  = waveParams.amplitude
    uniforms.uFrequency.value  = waveParams.frequency
    uniforms.uSpeed.value      = waveParams.speed
    uniforms.uTurbulence.value = waveParams.turbulence
    uniforms.uDeepColor.value.set(waveParams.color.deep)
    uniforms.uSurfaceColor.value.set(waveParams.color.surface)
  }, [waveParams])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  )
})

export default WaveCanvas
