import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import * as THREE from 'three';

interface ParticleSystemProps {
  count?: number;
}

export const ParticleSystem = ({ count = 50 }: ParticleSystemProps) => {
  const meshRef = useRef<Mesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ),
        speed: Math.random() * 0.02 + 0.005,
        rotation: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={meshRef}>
      {particles.map((particle, index) => (
        <FloatingParticle key={index} {...particle} index={index} />
      ))}
    </group>
  );
};

const FloatingParticle = ({ position, speed, rotation, index }: any) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position.y + Math.sin(time * speed + index) * 2;
      meshRef.current.position.x = position.x + Math.cos(time * speed * 0.5 + index) * 1;
      meshRef.current.rotation.x = time * 0.2 + rotation;
      meshRef.current.rotation.y = time * 0.1 + rotation;
    }
  });

  const geometry = useMemo(() => {
    const shapes = [
      () => new THREE.SphereGeometry(0.02, 8, 8),
      () => new THREE.BoxGeometry(0.03, 0.03, 0.03),
      () => new THREE.OctahedronGeometry(0.025),
    ];
    return shapes[index % 3]();
  }, [index]);

  const material = useMemo(() => {
    const colors = ['#8b5cf6', '#06b6d4', '#d946ef', '#10b981', '#f59e0b'];
    return new THREE.MeshStandardMaterial({
      color: colors[index % colors.length],
      transparent: true,
      opacity: 0.6,
      emissive: colors[index % colors.length],
      emissiveIntensity: 0.1,
    });
  }, [index]);

  return (
    <mesh ref={meshRef} position={position} geometry={geometry} material={material} />
  );
};

export const GeometricShapes = () => {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);
  const group3 = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (group1.current) {
      group1.current.rotation.x = time * 0.1;
      group1.current.rotation.y = time * 0.15;
      group1.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    
    if (group2.current) {
      group2.current.rotation.y = time * 0.2;
      group2.current.rotation.z = time * 0.1;
      group2.current.position.x = Math.cos(time * 0.3) * 1;
    }
    
    if (group3.current) {
      group3.current.rotation.x = time * 0.15;
      group3.current.rotation.z = time * 0.25;
      group3.current.position.z = Math.sin(time * 0.4) * 0.8;
    }
  });

  return (
    <>
      <group ref={group1} position={[-8, 2, -5]}>
        <mesh>
          <icosahedronGeometry args={[0.5]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            transparent 
            opacity={0.15}
            wireframe
          />
        </mesh>
      </group>
      
      <group ref={group2} position={[8, -2, -8]}>
        <mesh>
          <dodecahedronGeometry args={[0.6]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            transparent 
            opacity={0.12}
            wireframe
          />
        </mesh>
      </group>
      
      <group ref={group3} position={[0, 4, -10]}>
        <mesh>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial 
            color="#d946ef" 
            transparent 
            opacity={0.18}
            wireframe
          />
        </mesh>
      </group>
    </>
  );
};

export const Background3D = () => {
  return (
    <>
      <ParticleSystem count={30} />
      <GeometricShapes />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />
    </>
  );
};