'use client'
import { Float } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface GeometryProps {
  r: number
  position: [number, number, number]
  geometry: THREE.BufferGeometry
  materials: THREE.Material[]
  audios: Array<() => HTMLAudioElement>
}

export const Geometry = ({ r, position, materials, geometry, audios }: GeometryProps): JSX.Element => {
  const getRandomMaterial = (): THREE.Material => gsap.utils.random(materials)

  const meshRef = useRef<THREE.Mesh>(null)
  const [visible, setVisible] = useState(false)
  const initialMaterial = getRandomMaterial()

  const updateMaterial = (e: ThreeEvent<MouseEvent>): void => {
    const mesh = e.object as THREE.Mesh

    void gsap.utils.random(audios)().play()

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: 'elastic.out(1,0.3)',
      yoyo: true
    })

    mesh.material = getRandomMaterial()
  }

  useEffect(() => {
    const context = gsap.context(() => {
      setVisible(true)
      gsap.from(meshRef.current?.scale ?? [], {
        x: 0,
        y: 0,
        z: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.3
      })
    })

    return () => context.revert()
  }, [])

  return (
    <group>
      <Float speed={6 * r} rotationIntensity={6 * r} floatIntensity={6 * r}>
        <mesh
          ref={meshRef}
          geometry={geometry}
          onClick={updateMaterial}
          visible={visible}
          material={initialMaterial}
          position={position}
        />
      </Float>
    </group>
  )
}

export const Geometries = (): JSX.Element => {
  const geometries = Object.freeze([
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3),
      name: 'Icosahedron'
    },
    {
      position: [3, 1, 4],
      r: 0.6,
      geometry: new THREE.OctahedronGeometry(1),
      name: 'Octahedron'
    },
    {
      position: [-3, 1.4, 4],
      r: 0.3,
      geometry: new THREE.TorusKnotGeometry(0.7, 0.3, 80, 16),
      name: 'TorusKnot'
    },
    {
      position: [2.75, -1.5, -4],
      r: 0.3,
      geometry: new THREE.TorusGeometry(0.4, 0.2, 80, 25),
      name: 'Torus'
    },
    {
      position: [-3, -1.5, -4],
      r: 0.3,
      geometry: new THREE.DodecahedronGeometry(0.7),
      name: 'DodeCahedron'
    }
  ])

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: '#ffff00', flatShading: true, metalness: 0.5 }),
    new THREE.MeshStandardMaterial({ color: '#ff00ff', flatShading: true, metalness: 0.5 }),
    new THREE.MeshStandardMaterial({ color: '#ff0000', flatShading: true, metalness: 0.5 }),
    new THREE.MeshStandardMaterial({ color: '#00ff00', flatShading: true, metalness: 0.5 }),
    new THREE.MeshStandardMaterial({ color: '#0000ff', flatShading: true, metalness: 0.5 }),
    new THREE.MeshStandardMaterial({ color: '#f3f5ff', flatShading: true, metalness: 0.5 }),
    new THREE.MeshStandardMaterial({ color: '#f0a3f0', flatShading: true, metalness: 0.5 }),
    new THREE.MeshStandardMaterial({ color: '#f5880b', flatShading: true, metalness: 0.5 })
  ]

  const soundEffects = [
    () => new Audio('/soundEffects/manhole.mp3'),
    () => new Audio('/soundEffects/paper.mp3'),
    () => new Audio('/soundEffects/shooting.mp3'),
    () => new Audio('/soundEffects/start.mp3'),
    () => new Audio('/soundEffects/tap-notification.mp3'),
    () => new Audio('/soundEffects/ui-click.mp3')
  ]

  return (
    <>
      {
        geometries.map(({ geometry, position, r, name }) => {
          return (
            <Geometry key={name} r={r} position={position as [number, number, number]} materials={materials} geometry={geometry} audios={soundEffects} />
          )
        })
      }
    </>
  )
}
