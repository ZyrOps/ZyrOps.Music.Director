import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { DoubleSide, TextureLoader, type Group } from 'three';

type CompactDiscSceneProps = {
  textureUrl: string;
  interactive?: boolean;
};

function DiscMesh({ textureUrl, interactive = false }: CompactDiscSceneProps) {
  const group = useRef<Group>(null);
  const texture = useLoader(TextureLoader, textureUrl);
  const [dragging, setDragging] = useState(false);
  const baseTilt = Math.PI / 2;

  useFrame((_, delta) => {
    if (!group.current) return;
    if (!dragging) {
      group.current.rotation.y += delta * 0.72;
    }
    group.current.rotation.x = baseTilt + Math.sin(performance.now() * 0.001) * 0.12;
    group.current.position.y = Math.sin(performance.now() * 0.0012) * 0.08;
  });

  return (
    <group
      ref={group}
      rotation={[baseTilt, -0.18, 0]}
      onPointerDown={(event) => {
        if (!interactive) return;
        event.stopPropagation();
        setDragging(true);
      }}
      onPointerMove={(event) => {
        if (!interactive || !dragging || !group.current) return;
        event.stopPropagation();
        group.current.rotation.y += event.movementX * 0.012;
        group.current.rotation.x += event.movementY * 0.01;
      }}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      <mesh>
        <cylinderGeometry args={[1.42, 1.42, 0.08, 160]} />
        <meshStandardMaterial color="#111111" metalness={1} roughness={0.13} />
      </mesh>
      <mesh position={[0, 0.047, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.28, 160]} />
        <meshBasicMaterial map={texture} side={DoubleSide} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.052, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 1.37, 160]} />
        <meshStandardMaterial color="#f0a64f" transparent opacity={0.14} metalness={0.9} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.061, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.34, 0.72, 160]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.22} side={DoubleSide} />
      </mesh>
      <mesh position={[0, 0.064, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.78, 1.22, 160]} />
        <meshBasicMaterial color="#f0a64f" transparent opacity={0.2} side={DoubleSide} />
      </mesh>
      <mesh position={[0, 0.058, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.18, 80]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh>
        <torusGeometry args={[1.43, 0.016, 12, 160]} />
        <meshStandardMaterial color="#f0a64f" emissive="#2b1503" metalness={0.65} roughness={0.18} />
      </mesh>
      <mesh>
        <torusGeometry args={[0.23, 0.01, 10, 80]} />
        <meshStandardMaterial color="#ffffff" emissive="#101010" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

export function CompactDisc({ textureUrl, interactive = false }: CompactDiscSceneProps) {
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-[9%] rounded-full bg-[radial-gradient(circle,rgba(30,215,96,0.18),transparent_58%)] blur-3xl" />
      <Canvas
        className="relative z-10"
        camera={{ position: [0, 0, 4.5], fov: 42 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.34} />
        <pointLight position={[2.5, 3, 3]} intensity={48} color="#f0a64f" />
        <pointLight position={[-2.5, -1.5, 2.2]} intensity={24} color="#ffffff" />
        <directionalLight position={[0, 0, 4]} intensity={1.4} />
        <Suspense fallback={null}>
          <DiscMesh textureUrl={textureUrl} interactive={interactive} />
        </Suspense>
      </Canvas>
    </div>
  );
}
