import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Background3D } from './Background3D';

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ 
          background: 'transparent',
          pointerEvents: 'none'
        }}
      >
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      </Canvas>
    </div>
  );
};