"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars, Float } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from 'three';

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    // Smoothly interpolate scroll for 3D
    const targetY = scrollY * 0.01;
    if (groupRef.current) {
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
      groupRef.current.rotation.y += delta * 0.1;
    }
    if (meshRef1.current) {
      meshRef1.current.rotation.x += delta * 0.5;
      meshRef1.current.rotation.y += delta * 0.3;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x -= delta * 0.2;
      meshRef2.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef1} position={[3, 2, -2]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#ff6600" wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh ref={meshRef2} position={[-3, -4, -3]}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[2, -12, -4]}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial color="#10b981" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export function SceneBackground() {
  return (
    <div className="w-full h-screen bg-black fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <FloatingOrbs />
        </Suspense>
      </Canvas>
    </div>
  );
}
