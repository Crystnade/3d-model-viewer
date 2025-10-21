import { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { vehicles } from '../data/vehicles'
import Controls from '../components/controls.js'
import UI from '../components/UI.js'
import ModelSelector from '../components/ModelSelector.jsx'

const Scene = dynamic(() => import('../components/scene.js'), { 
  ssr: false,
  loading: () => (
    <div className="loading">Loading 3D Viewer...</div>
  )
})

export default function Home() {
  const [viewMode, setViewMode] = useState('perspective')
  const [currentVehicle, setCurrentVehicle] = useState(vehicles[0])

  return (
    <div className="container">
      <Head>
        <title>3D Vehicle Viewer</title>
        <meta name="description" content="Interactive 3D vehicle model viewer" />
      </Head>

      <div className="viewer-container">
        <Scene viewMode={viewMode} currentVehicle={currentVehicle} />
        <UI viewMode={viewMode} currentVehicle={currentVehicle} />
        <Controls viewMode={viewMode} onViewChange={setViewMode} />
        
        {/* Model Selector - Clean version */}
        <div className="debug-container">
          <ModelSelector 
            vehicles={vehicles}
            currentVehicle={currentVehicle}
            onVehicleChange={setCurrentVehicle}
          />
        </div>
        
        {/* Debug Panel - Move it down */}
        <div style={{
          position: 'absolute',
          top: '320px',  // Moved down to not overlap
          right: '30px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '15px',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.2)',
          zIndex: 1000,
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{margin: '0 0 10px 0', fontSize: '14px'}}>Debug Panel</h3>
          <p style={{margin: '5px 0', fontSize: '12px'}}>ID: {currentVehicle?.id}</p>
          <p style={{margin: '5px 0', fontSize: '12px'}}>Name: {currentVehicle?.name}</p>
          <div style={{ marginTop: '10px' }}>
            {vehicles.map(vehicle => (
              <button 
                key={vehicle.id}
                onClick={() => setCurrentVehicle(vehicle)}
                style={{
                  margin: '2px', 
                  padding: '4px 6px',
                  background: 'transparent',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '10px'
                }}
              >
                {vehicle.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}