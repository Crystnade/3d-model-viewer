// No useState needed here since it only receives props
const Controls = ({ viewMode, onViewChange }) => {
  return (
    <div className="controls-panel">
      <div className="view-toggle">
        <button
          className={`view-btn ${viewMode === 'orthographic' ? 'active' : ''}`}
          onClick={() => onViewChange('orthographic')}
        >
          Orthographic
        </button>
        <button
          className={`view-btn ${viewMode === 'perspective' ? 'active' : ''}`}
          onClick={() => onViewChange('perspective')}
        >
          Perspective
        </button>
      </div>
    </div>
  )
}

export default Controls