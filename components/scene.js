import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const VehicleModel = ({ vehicle }) => {
  const { scene } = useGLTF(vehicle.modelPath)
  
  const wireframeScene = scene.clone()
  
  wireframeScene.traverse((child) => {
    if (child.isMesh) {
      child.material.wireframe = true
      child.material.transparent = true
      child.material.opacity = 0.8
      child.material.color.set('#0088ff')
    }
  })
  
  // Apply rotation only to specific vehicle (e.g., BMW M5 with ID 2)
  let rotation = [0, 0, 0] // Default no rotation
  
  if (vehicle.id === 2) { // Only rotate the vehicle with ID 2
    rotation = [0, Math.PI , 0] // 45 degrees on Y axis
  }
  
  return (
    <>
      <primitive 
        object={wireframeScene} 
        scale={vehicle.scale || 1}
        position={vehicle.position || [0, 0, 0]}
        rotation={rotation} // Apply the rotation
      />
      
      <primitive 
        object={wireframeScene.clone()} 
        scale={(vehicle.scale || 1) * 1.02}
        position={vehicle.position || [0, 0, 0]}
        rotation={rotation} // Apply the same rotation to outline
      >
        <meshBasicMaterial 
          wireframe={true}
          color="#003366"
          transparent={true}
          opacity={0.6}
        />
      </primitive>
    </>
  )
}

// Rest of your scene component remains the same...

// Loading fallback
const LoadingModel = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#666" wireframe />
    </mesh>
  )
}

const Scene = ({ viewMode, currentVehicle }) => {
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
      <Suspense fallback={<LoadingModel />}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        
        {/* Current vehicle model with safety */}
        <VehicleModel vehicle={currentVehicle} />
        
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={1}
          maxDistance={50}
        />
        
        <gridHelper args={[20, 20, '#555', '#333']} />
        <axesHelper args={[5]} />
      </Suspense>
    </Canvas>
  )
}

export default Scene