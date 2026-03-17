import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Sky } from '@react-three/drei';
import * as THREE from 'three';
import PersonPlane from './PersonPlane'
import { getWaveHeight } from '../../utils/waveParams'

// 波のメッシュ
const Ocean = ({ amplitude = 0.5, frequency = 1.0, speed = 1.0 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // ジオメトリを準備
  const geometry = useMemo(() => new THREE.PlaneGeometry(100, 100, 128, 128), []);
  
  // 初期位置を保存しておく
  const initialPositions = useMemo(() => {
    const positions = geometry.attributes.position;
    const array = new Float32Array(positions.array.length);
    for (let i = 0; i < positions.array.length; i++) {
      array[i] = positions.array[i];
    }
    return array;
  }, [geometry]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = initialPositions[i * 3];
      const z = initialPositions[i * 3 + 1]; // PlaneGeometryは初期X-Y平面なので、2番目が実質Z軸方向
      
      const y = getWaveHeight(x, z, time, amplitude, frequency, speed);
      positions.setZ(i, y); // 回転させる前なのでZを更新
    }
    positions.needsUpdate = true;
    geometry.computeVertexNormals(); // これをやらないと光が変になる
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
      <meshPhysicalMaterial 
        color="#0066ff" 
        transmission={0.8}
        opacity={1} 
        metalness={0.2} 
        roughness={0.1} 
        ior={1.33} 
        thickness={1.5} 
        attenuationColor="#003399"
        attenuationDistance={2}
        envMapIntensity={1.0}
      />
    </mesh>
  );
};

// 指定座標の高さを動的に取得して追従する浮き(テスト用)
type TrackerProps = {
  targetX: number;
  amplitude?: number;
  frequency?: number;
  speed?: number;
};

const Tracker = ({ targetX, amplitude = 0.5, frequency = 1.0, speed = 1.0 }: TrackerProps) => {
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const radius = 0.22; // 球の半径と同程度のオフセットを適用して埋まりを防止

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // ここで動的に指定座標(targetX, targetZ)の波の高さを取得
    // (targetZ を廃止したため Z=0を使う)
    const currentY = getWaveHeight(targetX, 0, time, amplitude, frequency, speed);
    
    if (sphereRef.current) {
      // 波面に完全に埋まらないように、球の半径分だけ少し浮かせる
      sphereRef.current.position.set(targetX, currentY + radius, 0);
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default function BackgroundScene({
  waveParams,
  personCanvas,
  personTransform,
}: {
  waveParams?: { amplitude?: number; frequency?: number; speed?: number };
  personCanvas?: HTMLCanvasElement;
  personTransform?: { position?: [number, number, number]; rotation?: [number, number, number]; scale?: [number, number, number] };
}) {
  const params = waveParams || {
    // デフォルトの波のパラメータ
    amplitude: 0.8,// 波の高さ
    frequency: 1.5,// 波の密度(大きいほど細かい波になる)
    speed: 1.0,// 波の速さ
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#00ffff" />
      
      <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} turbidity={8} rayleigh={2} mieCoefficient={0.005} mieDirectionalG={0.8} />
      <Environment preset="city" />

      {/* 海面 */}
      <Ocean {...params} />

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
        />
      )}

      {/* 追加のサンプルトラッカー（残すか削除するかは任意） */}
      <Tracker targetX={2} {...params} />
    </>
  );
}