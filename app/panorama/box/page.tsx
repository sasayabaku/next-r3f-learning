'use client';

import * as THREE from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { StrictMode, Suspense, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';

const PATH = '/img/panorama/';
const EXT = '.png';

const TEXTURES = ['01_right', '01_left', '01_top', '01_bottom', '01_front', '01_back'];
const IMAGEPATHES = TEXTURES.map((img) => PATH + img + EXT);

function useSkybox(path: Array<string>) {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new THREE.CubeTextureLoader();
    const mat = loader.load(path);
    scene.background = mat;
    scene.environment = mat;
  }, [path, scene, scene.background]);

  return null;
}

function Scene() {
  useSkybox(IMAGEPATHES);
  return null;
}

export default function Page() {
  return (
    <div className="w-full h-screen">
      <StrictMode>
        <Canvas
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding,
          }}
        >
          <OrbitControls makeDefault />

          <Suspense fallback={<p>Loading ...</p>}>
            <Scene />
          </Suspense>
        </Canvas>
      </StrictMode>
    </div>
  );
}
