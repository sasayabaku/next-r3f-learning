'use client';

/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import React, { StrictMode } from 'react';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function Page() {
  return (
    <div className="w-full h-full">
      <StrictMode>
        <Canvas
          gl={{
            antialias: true,
          }}
        >
          <Perf position="bottom-left" />
          <color attach="background" args={['#c2d2e2']} />
          <OrbitControls makeDefault enableRotate />

          <ambientLight intensity={3} />

          <React.Suspense>
            <Model />
          </React.Suspense>
        </Canvas>
      </StrictMode>
    </div>
  );
}
