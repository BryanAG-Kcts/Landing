'use client'

import { Suspense } from 'react'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Geometries } from '../geometry'

export const Shapes = (): JSX.Element => {
  return (
    <div className='aspect-video overflow-hidden flex-1 md:flex-[1.5]'>
      <Canvas shadows gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 30, near: 1, far: 40 }}>

        <Suspense>
          <Geometries />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.65} scale={40} blur={1} far={9} />
        </Suspense>

        <Environment preset='studio' />
        <OrbitControls
          enableDamping
          enablePan={false}
          enableZoom={false}
          dampingFactor={0.1}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
