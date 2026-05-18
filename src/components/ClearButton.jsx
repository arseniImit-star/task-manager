import '../style_components/ClearButton.css'

export const ClearButton = ({ onClearCompleted, hasCompletedTasks }) => {
  if (!hasCompletedTasks) return null
  
  return (
    <div className="card">
      <button className="clear-btn" onClick={onClearCompleted}>
        🗑️ Очистить выполненные задачи
      </button>
    </div>
  )
}