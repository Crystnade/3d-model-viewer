import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, OrthographicCamera, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const SplineModel = () => {
  const { scene } = useGLTF('/models/bmw_m_5_f_10.gltf')
  
  const mainScene = scene.clone()
  const outlineScene = scene.clone()
  
  // Apply materials to both scenes
  mainScene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: '#0088ff', // Bright blue
        transparent: true,
        opacity: 1
      })
    }
  })
  
  outlineScene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: '#002244', // Dark blue outline
        transparent: true,
        opacity: 0.8
      })
    }
  })
  
  return (
    <group>
      {/* Outline - rendered first (behind) */}
      <primitive 
        object={outlineScene} 
        scale={1.03} // Outline size
        position={[0, 0, 0]}
      />
      
      {/* Main wireframe - rendered on top */}
      <primitive 
        object={mainScene} 
        scale={1}
        position={[0, 0, 0]}
      />
    </group>
  )
}

const Scene = ({ viewMode }) => {
  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        background: '#2a2a2a'
      }}
      gl={{ antialias: true }}
      camera={viewMode === 'perspective' ? 
        { position: [5, 5, 5], fov: 50 } : 
        { position: [5, 5, 5], zoom: 30 }
      }
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        
        <SplineModel />
        
        <OrbitControls />
        <gridHelper args={[20, 20, '#555', '#333']} />
        <axesHelper args={[5]} />
      </Suspense>
    </Canvas>
  )
}

export default Scene