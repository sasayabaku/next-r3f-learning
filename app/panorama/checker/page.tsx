/* eslint-disable react/no-unknown-property */

'use client';

import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';

import { Canvas, useLoader } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import { Modal } from '../_component/modal';
import { AnotherFooter } from '../_component/footer';

import './styles.scss';
import { RootState } from '../../../redux/store';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isModal, setModal] = useState('');

  const whatModal = useSelector((state: RootState) => state.modal.modal);

  return (
    <div id="panorama">
      <Canvas flat camera={{ position: [-0.1, 0, 0] }}>
        <OrbitControls makeDefault />

        <Suspense fallback={<Dome performance="low" />}>
          <Dome performance="high" />
        </Suspense>
      </Canvas>

      {/* <Footer /> */}
      <AnotherFooter />

      {whatModal === 'about' && (
        <Modal>
          <div />
        </Modal>
      )}
    </div>
  );
}
