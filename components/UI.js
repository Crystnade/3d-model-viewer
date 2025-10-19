// No React imports needed here since it's a simple component
const UI = ({ viewMode }) => {
  return (
    <div className="view-label">
      {viewMode === 'orthographic' ? 'Orthographic' : 'Perspective'}
    </div>
  )
}

export default UI