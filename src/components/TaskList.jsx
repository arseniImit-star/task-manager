import { TaskItem } from './TaskItem'
import '../style_components/TaskList.css'

export const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return (
      <div className="card">
        <div className="empty-state">
          <p>📭 Нет задач</p>
          <small>Добавьте свою первую задачу!</small>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <h3 className="card-title">Список задач ({tasks.length})</h3>
      <div className="tasks-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}