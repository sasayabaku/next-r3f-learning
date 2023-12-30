/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unknown-property */

'use client';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { StrictMode, useRef } from 'react';

import { useControls } from 'leva';

// @ts-ignore
import { Perf } from 'r3f-perf';

function Office() {
  const { nodes, materials } = useGLTF('/models/office.glb', true) as any;

  const ref: any = useRef();

  return (
    <group dispose={null} ref={ref}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <mesh
        geometry={nodes['02_library'].geometry}
        material={materials['02']}
        position={[2.1, 0, 0]}
        rotation={[0, -(Math.PI / 2), 0]}
      />
    </group>
  );
}

export default function Page() {
  const { intensity, backgroundColor } = useControls({
    intensity: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.1,
    },
    backgroundColor: [255, 255, 240],
  });

  return (
    <div className="w-full h-full">
      <StrictMode>
        <Canvas
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding,
          }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [0, 0, 4],
          }}
        >
          <OrbitControls makeDefault />
          <Perf position="top-left" />

          <color args={backgroundColor} attach="background" />

          <ambientLight intensity={intensity} />

          <Office />
          <axesHelper args={[10]} />
        </Canvas>
      </StrictMode>
    </div>
  );
}

// function Office() {
//   const { scene } = useGLTF('/models/Cozy_Room_ALL.glb');

//   const ref: any = useRef();

//   console.log(scene);

//   return (
//     <group dispose={null} ref={ref}>
//       <primitive object={scene} />
//     </group>
//   );
// }

useGLTF.preload('/models/office.glb');
useGLTF.preload('/models/Cozy_Room_ALL.glb');
