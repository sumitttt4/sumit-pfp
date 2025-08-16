import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const FloatingShapes = () => {
  const meshRef1 = useRef<Mesh>(null);
  const meshRef2 = useRef<Mesh>(null);
  const meshRef3 = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef1.current) {
      meshRef1.current.rotation.x = time * 0.3;
      meshRef1.current.rotation.y = time * 0.2;
      meshRef1.current.position.y = Math.sin(time) * 0.5;
    }
    
    if (meshRef2.current) {
      meshRef2.current.rotation.x = time * 0.2;
      meshRef2.current.rotation.z = time * 0.4;
      meshRef2.current.position.x = Math.cos(time * 0.5) * 2;
    }
    
    if (meshRef3.current) {
      meshRef3.current.rotation.y = time * 0.5;
      meshRef3.current.position.z = Math.sin(time * 0.3) * 1;
    }
  });

  return (
    <>
      <mesh ref={meshRef1} position={[-2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.3}
          wireframe
        />
      </mesh>
      
      <mesh ref={meshRef2} position={[2, 1, -1]}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          transparent 
          opacity={0.4}
          wireframe
        />
      </mesh>
      
      <mesh ref={meshRef3} position={[0, -1, 1]}>
        <tetrahedronGeometry args={[0.6]} />
        <meshStandardMaterial 
          color="#d946ef" 
          transparent 
          opacity={0.5}
          wireframe
        />
      </mesh>
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};