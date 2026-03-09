import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingCrystals } from './FloatingCrystals';
import { LuxuryParticles } from './LuxuryParticles';

interface LuxurySceneProps {
  className?: string;
  showParticles?: boolean;
  showCrystals?: boolean;
}

export const LuxuryScene = ({ 
  className = "w-full h-full", 
  showParticles = true, 
  showCrystals = true 
}: LuxurySceneProps) => {
  return (
    <div className={className}>
      <Canvas 
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} />
          
          {showParticles && <LuxuryParticles />}
          {showCrystals && <FloatingCrystals />}
        </Suspense>
      </Canvas>
    </div>
  );
};


