const UI = ({ viewMode, currentVehicle }) => {
  return (
    <div className="ui-overlay">
      <div className="view-label">
        {viewMode === 'orthographic' ? 'Orthographic' : 'Perspective'}
      </div>
      <div className="vehicle-info">
        <h2>{currentVehicle?.name || 'No Vehicle Selected'}</h2>
        <p>{currentVehicle?.description || 'Please select a vehicle'}</p>
      </div>
    </div>
  )
}

export default UI