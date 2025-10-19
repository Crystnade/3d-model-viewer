import { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Dynamic import for 3D components
const Scene = dynamic(() => import('../components/scene.js'), { 
  ssr: false,
  loading: () => (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '18px'
    }}>
      Loading 3D Viewer...
    </div>
  )
})

import Controls from '../components/controls.js'
import UI from '../components/UI.js'

export default function Home() {
  const [viewMode, setViewMode] = useState('perspective')

  return (
    <div className="container">
      <Head>
        <title>3D Model Viewer</title>
        <meta name="description" content="Interactive 3D model viewer" />
      </Head>

      <div className="viewer-container">
        {/* Scene takes full screen */}
        <Scene viewMode={viewMode} />
        
        {/* UI elements overlay on top */}
        <UI viewMode={viewMode} />
        <Controls viewMode={viewMode} onViewChange={setViewMode} />
      </div>
    </div>
  )
}