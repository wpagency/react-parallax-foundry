import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingCrystalProps {
  position: [number, number, number];
  scale: number;
  speed: number;
}

const FloatingCrystal = ({ position, scale, speed }: FloatingCrystalProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial
        transmission={0.9}
        thickness={0.1}
        roughness={0.1}
        metalness={0.1}
        transparent={true}
        opacity={0.8}
        color="#ffffff"
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
};

export const FloatingCrystals = () => {
  return (
    <>
      <FloatingCrystal position={[-3, 0, -2]} scale={0.5} speed={0.8} />
      <FloatingCrystal position={[3, 1, -1]} scale={0.3} speed={1.2} />
      <FloatingCrystal position={[0, -1, -3]} scale={0.4} speed={0.6} />
      <FloatingCrystal position={[-1, 2, 0]} scale={0.2} speed={1.5} />
      <FloatingCrystal position={[2, -0.5, -2]} scale={0.6} speed={0.9} />
    </>
  );
};


