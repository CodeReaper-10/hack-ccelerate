import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import Redcar from './Redcar';

export default function CarModel() {
  const ref = useRef();
  useFrame(()=>(ref.current.rotation.y +=0.01))
  return (
    <>
    <OrbitControls />
    <ambientLight />
    <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
      <mesh ref={ref}>
        <Redcar />
      </mesh>
    </>
  )
}
