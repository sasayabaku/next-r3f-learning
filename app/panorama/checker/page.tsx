/* eslint-disable react/no-unknown-property */

'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

import './styles.scss';

interface DomeProps {
  performance: string;
}

function Dome({ performance }: DomeProps) {
  let imgFile = '';

  if (performance === 'high') {
    imgFile = '/img/panorama/NY1950.png';
  } else if (performance === 'low') {
    imgFile = '/img/panorama/NY1950_low.png';
  } else {
    imgFile = '/img/panorama/NY1950_low.png';
  }

  const texture = useLoader(THREE.TextureLoader, imgFile);
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  return (
    <mesh>
      <Sphere args={[500, 60, 40]}>
        <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </Sphere>
    </mesh>
  );
}

export default function Page() {
  return (
    <div id="panorama">
      <Canvas flat camera={{ position: [-0.1, 0, 0] }}>
        <OrbitControls makeDefault />

        <Suspense fallback={<Dome performance="low" />}>
          <Dome performance="high" />
        </Suspense>
      </Canvas>
    </div>
  );
}
