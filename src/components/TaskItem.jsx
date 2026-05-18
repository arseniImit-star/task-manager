

const CATEGORY_COLORS = {
  work: '#3498db',
  personal: '#2ecc71',
  shopping: '#e74c3c',
  health: '#9b59b6',
  other: '#95a5a6'
}

const CATEGORY_NAMES = {
  work: 'Работа',
  personal: 'Личное',
  shopping: 'Покупки',
  health: 'Здоровье',
  other: 'Другое'
}

export const TaskItem = ({ task, onToggle, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
      </div>
      <div className="task-content">
        <p className="task-text">{task.text}</p>
        <div className="task-meta">
          <span 
            className="task-category"
            style={{ backgroundColor: CATEGORY_COLORS[task.category] }}
          >
            {CATEGORY_NAMES[task.category]}
          </span>
          <span className="task-date">📅 {formatDate(task.createdAt)}</span>
        </div>
      </div>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        🗑️
      </button>
    </div>
  )
}