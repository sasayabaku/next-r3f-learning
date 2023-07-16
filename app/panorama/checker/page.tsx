/* eslint-disable react/no-unknown-property */

'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { Suspense, DragEvent, useState } from 'react';
import * as THREE from 'three';

import './styles.css';

interface DomeProps {
  performance: string;
  backgroundImage?: string;
}

function Dome({ performance, backgroundImage }: DomeProps) {
  let imgFile = '/img/panorama/NY1950.png';

  if (backgroundImage === null || backgroundImage === undefined) {
    if (performance === 'high') {
      imgFile = '/img/panorama/NY1950.png';
    } else if (performance === 'low') {
      imgFile = '/img/panorama/NY1950_low.png';
    } else {
      imgFile = '/img/panorama/NY1950_low.png';
    }
  } else {
    imgFile = backgroundImage;
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
  const [textureImg, setTextureImg] = useState(null) as any;

  function createImageUrl(buffer: any, type: any) {
    const blob = new Blob([buffer], { type });
    const urlCreater = window.URL || window.webkitURL;
    const imageUrl = urlCreater.createObjectURL(blob);
    return imageUrl;
  }

  async function changeBackground(e: DragEvent) {
    e.preventDefault();
    if (e.dataTransfer.files !== null && e.dataTransfer?.files.length > 0) {
      if (e.dataTransfer?.files.length === 1) {
        // setTextureImg(e.dataTransfer.files[0]);
        const file = e.dataTransfer.files[0];
        const { type } = file;
        const buffer = await file.arrayBuffer();
        const imageUrl = createImageUrl(buffer, type);
        setTextureImg(imageUrl);
      }
    }
  }

  return (
    <div id="panorama" onDragOver={(e) => e.preventDefault()} onDrop={changeBackground}>
      <Canvas flat camera={{ position: [-0.1, 0, 0] }}>
        <OrbitControls makeDefault />

        <Suspense fallback={<Dome performance="low" />}>
          <Dome performance="high" backgroundImage={textureImg} />
        </Suspense>
      </Canvas>
    </div>
  );
}
