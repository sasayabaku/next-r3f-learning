"use client"

import { useHelper, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import React, { StrictMode, useRef } from "react"

import { Perf } from "r3f-perf"

import * as THREE from "three"

export default function Page() {
  return <Main />
}

function Main() {
  return (
    <div className='w-full h-screen'>
      <StrictMode>
        <Canvas
          flat
          shadows
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
          <Scene />
        </Canvas>
      </StrictMode>
    </div>
  )
}

function Scene() {
  const directionalLight = useRef<THREE.DirectionalLight>(null)
  const boxRef = useRef<THREE.Mesh>(null)
  const octaRef = useRef<THREE.Mesh>(null)

  // Directional Lights Helper
  useHelper(directionalLight as React.MutableRefObject<THREE.DirectionalLight>, THREE.DirectionalLightHelper, 1, "red")

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime

    if (boxRef.current) {
      boxRef.current.position.x = Math.sin(time) + 1.5
      boxRef.current.rotation.y += delta
    }

    if (octaRef.current) {
      octaRef.current.position.y = Math.sin(time) + 1.6
      octaRef.current.rotation.y += delta * 0.8
    }
  })

  return (
    <>
      <OrbitControls makeDefault />

      <Perf position='top-left' />

      <color args={["ivory"]} attach='background' />

      <ambientLight castShadow intensity={0.5} />

      <directionalLight
        castShadow
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={0.5}
        shadow-mapSize={[1024, 1024]}
      />

      <group position={[0, -1, 0]}>
        <mesh castShadow position={[-1, 0.6, 0]} scale={0.6}>
          <sphereGeometry />
          <meshStandardMaterial color='orange' />
        </mesh>

        <mesh castShadow position={[-1, 0.6, 0]} ref={boxRef}>
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>

        <mesh castShadow position={[-3, 0.6, 0]} scale={0.3} ref={octaRef}>
          <octahedronGeometry />
          <meshStandardMaterial color='aquamarine' />
        </mesh>

        <mesh receiveShadow rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshStandardMaterial color='lightseagreen' />
        </mesh>
      </group>
    </>
  )
}
