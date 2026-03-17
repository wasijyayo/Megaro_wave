import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import PersonPlane from './PersonPlane'
import { getWaveHeight } from '../../utils/waveParams'

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

// 波のメッシュ
const Ocean = ({ amplitude = 0.5, frequency = 1.0, speed = 1.0 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // ジオメトリを準備
  const geometry = useMemo(() => new THREE.PlaneGeometry(30, 35, 64, 64), []);
  
  // ベース色と頂点カラー配列を準備
  const baseColor = useMemo(() => new THREE.Color('#0066ff'), []);
  const colorArray = useMemo(() => {
    const count = geometry.attributes.position.count;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = baseColor.r;
      arr[i * 3 + 1] = baseColor.g;
      arr[i * 3 + 2] = baseColor.b;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    return arr;
  }, [geometry, baseColor]);
  
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
    const colors = geometry.attributes.color as THREE.BufferAttribute;
    
    for (let i = 0; i < positions.count; i++) {
      const x = initialPositions[i * 3];
      const z = initialPositions[i * 3 + 1]; // PlaneGeometryは初期X-Y平面なので、2番目が実質Z軸方向
      
      const y = getWaveHeight(x, z, time, amplitude, frequency, speed);
      positions.setZ(i, y); // 回転させる前なのでZを更新
    }
    positions.needsUpdate = true;
    geometry.computeVertexNormals(); // これをやらないと光が変になる

    // 頂点カラーを高さに応じて更新（波の上部を白くする）
    if (colors) {
      // 閾値とフェード幅（振幅に依存）
      const peakThreshold = amplitude * 0.6; // ここを超えると白くなり始める
      const falloff = Math.max(0.1, amplitude * 0.6);
      for (let i = 0; i < positions.count; i++) {
        const y = positions.getZ(i);
        // スムースステップ的な補間: 0..1
        let t = (y - (peakThreshold - falloff)) / (falloff * 2);
        t = Math.max(0, Math.min(1, t));

        // 線形補間で白へ近づける
        const r = THREE.MathUtils.lerp(baseColor.r, 1.0, t);
        const g = THREE.MathUtils.lerp(baseColor.g, 1.0, t);
        const b = THREE.MathUtils.lerp(baseColor.b, 1.0, t);
        colors.setXYZ(i, r, g, b);
      }
      colors.needsUpdate = true;
    }
  });

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {/* ベースとなる波のメッシュ（頂点カラーを使用） */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial 
          vertexColors={true}
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
      
      {/* デジタルなグリッド線（ワイヤーフレーム）を波に重ねる */}
      <mesh geometry={geometry}>
        <meshBasicMaterial 
          color="#00ffff" /* シアンの電脳風カラー */
          wireframe={true} 
          transparent={true} 
          opacity={0.3} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false}
        />
      </mesh>
    </group>
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