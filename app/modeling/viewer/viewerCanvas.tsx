'use client';

import React from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';

export function ViewerCanvas() {
  const { nodes, materials } = useGLTF('/models/stage.glb', true) as any;

  return (
    <Canvas gl={{ antialias: true }} camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 4] }}>
      <OrbitControls makeDefault />
      <Perf position="top-left" />
      <color args={[50, 50, 50]} attach="background" />

      <ambientLight intensity={0.9} />

      <group dispose={null}>
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.001']}
          scale={nodes.Cylinder.scale}
        />
      </group>
    </Canvas>
  );
}

export default ViewerCanvas;

useGLTF.preload('/models/stage.glb');
