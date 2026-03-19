import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import PersonPlane from './PersonPlane'
import { getWaveHeight } from '../../utils/waveParams'
import OpponentPlane from './OpponentPlane'

// --- サイバー空間風のパーティクル ---
const CyberParticles = ({ speed = 1.0 }: { speed?: number }) => {
  const count = 3000;
  const trailLength = 5; // 軌跡の長さ
  
  // 初期座標を生成
  const positions = useMemo(() => {
    // trailLength倍の座標配列を作り、残像を持たせる
    const arr = new Float32Array(count * trailLength * 3);
    for (let i = 0; i < count; i++) {
      const baseX = (Math.random() - 0.5) * 50;
      const baseY = Math.random() * 15;
      const baseZ = (Math.random() - 0.5) * 50;
      
      for (let t = 0; t < trailLength; t++) {
        const idx = (i * trailLength + t) * 3;
        arr[idx] = baseX;
        arr[idx + 1] = baseY;
        arr[idx + 2] = baseZ + (t * 0.5); // 各残像は少し後ろに配置
      }
    }
    return arr;
  }, [count, trailLength]);

  // 残像用に徐々に透明になるカラー情報を作成
  const colors = useMemo(() => {
    const arr = new Float32Array(count * trailLength * 3);
    for (let i = 0; i < count; i++) {
        for (let t = 0; t < trailLength; t++) {
            const idx = (i * trailLength + t) * 3;
            // 先頭(t=0)が一番明るく、後ろに行くほど暗くなるグラデーション
            const alpha = 1.0 - (t / trailLength);
            arr[idx] = 0.0 * alpha; // r
            arr[idx + 1] = 1.0 * alpha; // g
            arr[idx + 2] = 1.0 * alpha; // b
        }
    }
    return arr;
  }, [count, trailLength]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      const posAttr = pointsRef.current.geometry.attributes.position;
      
      for (let i = 0; i < count; i++) {
        //speedに倍率をかけて、全体の進行速度を調整
        const speedMultiplier = speed * 0.008; // 15はベースの速度調整用の定数
        // 先頭パーティクルの動きを計算
        // パーティクルの進行速度はspeedに準拠
        let leadZ = positions[(i * trailLength) * 3 + 2] + time * speedMultiplier;
        leadZ = ((leadZ + 25) % 50) - 25; 
        
        const leadX = positions[(i * trailLength) * 3] + Math.sin(time * 2 * speedMultiplier + i) * 0.2;
        
        // 軌跡（残像）を更新
        for (let t = 0; t < trailLength; t++) {
            const idx = i * trailLength + t;
            // 軌跡は先頭よりZ軸で少し奥(プラス方向)に配置し、Xの揺れも少し遅延させる
            posAttr.setZ(idx, leadZ + (t * 0.8));
            posAttr.setX(idx, leadX + Math.sin((time - t*0.05) * 2 + i) * 0.2);
        }
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        vertexColors={true}
        sizeAttenuation={true} 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending} 
        depthWrite={false}
      />
    </points>
  );
};

// ── 波シェーダー（頂点変位を GPU で計算） ──────────────────
const WAVE_VERT = /* glsl */`
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uWaveSpacing; // 直接渡される波の谷→谷の距離
  uniform float uSpeed;
  uniform float uPattern[32]; // 波の高さを配列で管理
  uniform int   uPatternLen;

  varying float vHeight;
  varying vec3  vNormal_w;

  float getPatternValue(int index) {
    int len = max(1, uPatternLen);
    int i = index % len;
    if (i < 0) i += len; // 負の剰余対応
    
    // WebGL で動的な配列インデックスアクセスを避けるための定数展開ループ
    for (int j = 0; j < 32; j++) {
      if (j == i) return uPattern[j];
    }
    return uPattern[0];
  }

  void main() {
    vec3 pos = position;
    // uWaveSpacing は「谷→谷の距離（波長）」を表すため、
    // 周期 2π を与えるためには 2π / wavelength を掛ける必要がある。
    float freq = 2.0 * 3.14159265 / max(0.001, uWaveSpacing);
    float arg  = pos.x * freq - uTime * uSpeed;

    // 現在の波（1サイクル = 2π）の位相インデックス
    float cycleIndex = arg / (2.0 * 3.14159265);
    
    float fIdx0 = floor(cycleIndex);
    int idx0 = int(fIdx0);
    int idx1 = idx0 + 1;

    float h0 = getPatternValue(idx0);
    float h1 = getPatternValue(idx1);

    // 小数部分を使って smoothstep (スプライン曲線近似) 補間
    float fractPart = cycleIndex - fIdx0;
    float t = smoothstep(0.0, 1.0, fractPart);
    float heightScale = mix(h0, h1, t);

    // 高さをスケールで変位させる
    pos.z      = sin(arg) * uAmplitude * heightScale;
    vHeight    = pos.z;

    // 解析法線 計算（スケールを加味した簡易な偏微分）
    float dzdx  = freq * uAmplitude * heightScale * cos(arg);
    vec3  n     = normalize(vec3(-dzdx, 0.0, 1.0));
    vNormal_w   = normalize(normalMatrix * n);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const WAVE_FRAG = /* glsl */`
  uniform vec3  uBaseColor;
  uniform float uAmplitude;

  varying float vHeight;
  varying vec3  vNormal_w;

  void main() {
    // 高さに応じて白化（波頭）
    float threshold = uAmplitude * 0.6;
    float falloff   = max(0.1, uAmplitude * 0.6);
    float t = clamp((vHeight - (threshold - falloff)) / (falloff * 2.0), 0.0, 1.0);
    vec3 color = mix(uBaseColor, vec3(1.0), t);

    // シンプル Lambert 照明
    vec3 lightDir = normalize(vec3(0.0, 1.0, 0.8));
    float diff = max(dot(vNormal_w, lightDir), 0.0);
    color *= (0.35 + 0.65 * diff);

    gl_FragColor = vec4(color, 1.0);
  }
`;

// ワイヤーフレームは同じ頂点変位、単色フラグメント
const WIRE_FRAG = /* glsl */`
  void main() {
    gl_FragColor = vec4(0.0, 1.0, 1.0, 0.3);
  }
`;

// 波のメッシュ（シェーダー版）
const Ocean = ({ amplitude = 0.5, waveSpacing = 1.0, speed = 1.0, heightPattern = [], yOffset = 0 }: any) => {
  // エイリアシング（空間解像度不足による波の逆行現象）を防ぐために十分な分割数にする
  const geometry = useMemo(() => new THREE.PlaneGeometry(30, 35, 64, 64), []);

  const { patternArray, patternLen } = useMemo(() => {
    const arr = Array.isArray(heightPattern) && heightPattern.length > 0 ? heightPattern : [1];
    const pArray = new Float32Array(32).fill(1.0);
    const pLen = Math.min(arr.length, 32);
    for (let i = 0; i < pLen; i++) {
        pArray[i] = Math.max(1, Number(arr[i]) || 1);
    }
    return { patternArray: pArray, patternLen: pLen };
  }, [heightPattern]);

  const waveUniforms = useMemo(() => ({
    uTime:        { value: 0 },
    uAmplitude:   { value: amplitude },
    uWaveSpacing: { value: waveSpacing },
    uSpeed:       { value: speed },
    uBaseColor:   { value: new THREE.Color('#0066ff') },
    uPattern:     { value: patternArray },
    uPatternLen:  { value: patternLen },
  }), []);

  const wireUniforms = useMemo(() => ({
    uTime:        { value: 0 },
    uAmplitude:   { value: amplitude },
    uWaveSpacing: { value: waveSpacing },
    uSpeed:       { value: speed },
    uPattern:     { value: patternArray },
    uPatternLen:  { value: patternLen },
  }), []);

  // waveParams が変わったら uniform を同期
  useEffect(() => {
    waveUniforms.uAmplitude.value   = amplitude;
    waveUniforms.uWaveSpacing.value = waveSpacing;
    waveUniforms.uSpeed.value       = speed;
    waveUniforms.uPattern.value     = patternArray;
    waveUniforms.uPatternLen.value  = patternLen;

    wireUniforms.uAmplitude.value   = amplitude;
    wireUniforms.uWaveSpacing.value = waveSpacing;
    wireUniforms.uSpeed.value       = speed;
    wireUniforms.uPattern.value     = patternArray;
    wireUniforms.uPatternLen.value  = patternLen;
  }, [amplitude, waveSpacing, speed, patternArray, patternLen, waveUniforms, wireUniforms]);
  // 毎フレームは uTime の float 1つだけ更新
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    waveUniforms.uTime.value = t;
    wireUniforms.uTime.value = t;
  });

  return (
    <group position={[0, yOffset, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh geometry={geometry}>
        <shaderMaterial
          vertexShader={WAVE_VERT}
          fragmentShader={WAVE_FRAG}
          uniforms={waveUniforms}
        />
      </mesh>
      <mesh geometry={geometry}>
        <shaderMaterial
          vertexShader={WAVE_VERT}
          fragmentShader={WIRE_FRAG}
          uniforms={wireUniforms}
          wireframe
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};


export default function BackgroundScene({
  waveParams,
  personCanvas,
  remoteVideoTrack,
  remoteVideoElement,
  personTransform,
  calibratedRef,
}: {
  waveParams?: { amplitude?: number; frequency?: number; speed?: number; heightPattern?: number[] };
  personCanvas?: HTMLCanvasElement;
  remoteVideoTrack?: any;
  remoteVideoElement?: HTMLVideoElement | null;
  personTransform?: { position?: [number, number, number]; rotation?: [number, number, number]; scale?: [number, number, number] };
  calibratedRef?: any;
}) {
  const OCEAN_Y_OFFSET = -1.0

  const params = waveParams || {
    // デフォルトの波のパラメータ
    amplitude: 0.8,     // 波の高さ
    frequency: 1.5,     // 波の密度(大きいほど細かい波になる)
    waveSpacing: 1.5,   // 波の間隔（谷→谷の距離）
    speed: 1.0,         // 波の速さ
  };

  return (
    <>
      {/* 遠くを暗くフェードさせて空間の広がりとサイバー感を強調するフォグ */}
      <fog attach="fog" args={['#071428', 5, 25]} />
      
      {/* ブルーム効果（光の溢れ出し）を追加 */}
      <EffectComposer enableNormalPass>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={2.0} />
      </EffectComposer>

      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 10, 5]} intensity={1.5} color="#00ffcc" />
      <directionalLight position={[-5, 5, -5]} intensity={2.0} color="#ff00ff" />
      <directionalLight position={[5, -5, 5]} intensity={1.0} color="#0055ff" />
      
      {/* 飛び交うサイバーデータ（パーティクル） */}
      <CyberParticles speed={params.speed ?? 1.0} />
      
      {/* ネオンの反射を水面に落とすための環境マップ */}
      <Environment preset="night" />

      {/* 海面 */}
      <Ocean {...params} yOffset={OCEAN_Y_OFFSET} />

      {personCanvas && (
        <PersonPlane
          canvas={personCanvas}
          mode="translate"
          enableControls={false}
          position={personTransform?.position ?? [0, -0.35, 0.25]}
          rotation={personTransform?.rotation ?? [0, 0, 0]}
          scale={personTransform?.scale ?? [1.15, 1.15, 1.15]}
          followWave={true}
          waveParams={params}
          heightOffset={2}
          calibratedRef={calibratedRef}
        />
      )}
      {remoteVideoTrack && (
        <OpponentPlane
          videoTrack={remoteVideoTrack}
          videoElement={remoteVideoElement}
          position={[-2.5, -0.35, -1]}
          waveParams={params}
          heightOffset={2}
        />
      )}

    </>
  );
}
