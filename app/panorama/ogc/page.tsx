/* eslint-disable react/no-unknown-property */

'use client';

import { CameraControls, Html, Image, Sphere } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../_component/modal';
import { setModal } from '../../../redux/features/modal/modalSlices';
import { RootState } from '../../../redux/store';

interface DomeProps {
  img: string;
}

function Dome({ img }: DomeProps) {
  const texture = useLoader(THREE.TextureLoader, img);
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
  const dispatch = useDispatch();

  const whatModal = useSelector((state: RootState) => state.modal.modal);

  return (
    <div id="panorama">
      <Canvas flat camera={{ position: [-0.1, 0, 0] }}>
        {/* <OrbitControls makeDefault /> */}
        <CameraControls makeDefault azimuthRotateSpeed={-0.7} polarRotateSpeed={-0.7} />

        <Image
          url="/img/staff.png"
          position={[1.7, -1.0, -2.6]}
          zoom={0.5}
          scale={2}
          rotation={[0, -1, 0]}
          transparent
        />

        <Html sprite position={[1.7, -1.0, -2.6]} zIndexRange={[1, 20]}>
          <button
            type="button"
            className="chatButton"
            onClick={() => {
              dispatch(setModal('chatbot'));
            }}
          >
            <p>hello world</p>
          </button>
        </Html>

        <Dome img="/img/panorama/cafe_high.jpg" />
      </Canvas>
      {whatModal === 'chatbot' && (
        <Modal>
          <iframe
            src="http://localhost:8888"
            title="chatbot"
            className="chatbot"
            height="700px"
            width="800px"
            allow="microphone *;"
          />
        </Modal>
      )}
    </div>
  );
}
