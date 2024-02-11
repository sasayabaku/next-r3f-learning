'use client';

import { useAnimations, useGLTF } from '@react-three/drei';

import { useRef } from 'react';
import { MeshStandardMaterial } from 'three';
import useModelAnimation from './hooks/useModelAnimation';

export default function Model(props) {
  const group = useRef();
  const gltf = useGLTF('./models/Soldier.glb');

  // useModelAnimation(gltf, group);

  const { nodes, materials, animations } = gltf;

  const { actions } = useAnimations(animations, group);

  console.log(actions);

  console.log(gltf);
  console.log(materials);

  return (
    <group name="Scene">
      <group name="Armature">
        <primitive object={nodes.mixamorigHips} />
        <primitive object={nodes.Armature} />

        <mesh
          name="Head"
          castShadow
          geometry={nodes.Head.geometry}
          material={materials.Head}
          skeleton={nodes.Head.skeleton}
        />

        <mesh
          name="Middle_Part"
          castShadow
          geometry={nodes.Middle_Part.geometry}
          material={materials.Middle_Part}
          skeleton={nodes.Middle_Part.skeleton}
        />

        <mesh
          name="Bottom_Part"
          castShadow
          geometry={nodes.Bottom_Part.geometry}
          material={materials.Bottom_Part}
          skeleton={nodes.Bottom_Part.skeleton}
        />

        <mesh
          name="Eye"
          castShadow
          geometry={nodes.Eye.geometry}
          material={materials.Eye}
          skeleton={nodes.Eye.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('./models/Soldier.glb');
