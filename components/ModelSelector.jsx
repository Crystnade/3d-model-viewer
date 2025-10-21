const ModelSelector = ({ vehicles, currentVehicle, onVehicleChange }) => {
  const currentVehicleId = currentVehicle?.id

  return (
    <div className="model-selector">
      <h3>Select Vehicle ({vehicles.length} models)</h3>
      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <button
            key={vehicle.id}
            className={`vehicle-btn ${currentVehicleId === vehicle.id ? 'active' : ''}`}
            onClick={() => onVehicleChange(vehicle)}
          >
            <div className="vehicle-icon">🚗</div>
            <span>{vehicle.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ModelSelector