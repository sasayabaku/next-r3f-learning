'use client';

import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';

export function ViewerCanvas() {
  return (
    <Canvas gl={{ antialias: true }} camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 4] }}>
      <OrbitControls makeDefault />
      <Perf position="top-left" />
      <color args={[0, 80, 120]} attach="background" />
    </Canvas>
  );
}

export default ViewerCanvas;
