import { useSelector } from 'react-redux'
import { selectTasksStats, selectTasksByCategory } from '../features/tasks/tasksSelectors'
import '../style_components/Statistics.css'

export const Statistics = () => {
  const { total, active, completed } = useSelector(selectTasksStats)
  const tasksByCategory = useSelector(selectTasksByCategory)

  const categoryNames = {
    work: 'Работа',
    personal: 'Личное',
    shopping: 'Покупки',
    health: 'Здоровье',
    other: 'Другое'
  }

  return (
    <div className="card">
      <h3 className="card-title">📊 Статистика</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{total}</div>
          <div className="stat-label">Всего задач</div>
        </div>
        <div className="stat-card active-stat">
          <div className="stat-value">{active}</div>
          <div className="stat-label">Активных</div>
        </div>
        <div className="stat-card completed-stat">
          <div className="stat-value">{completed}</div>
          <div className="stat-label">Выполненных</div>
        </div>
      </div>
      
      {total > 0 && (
        <div className="category-stats">
          <h4>По категориям:</h4>
          <div className="category-bars">
            {Object.entries(tasksByCategory).map(([cat, count]) => (
              count > 0 && (
                <div key={cat} className="category-bar-item">
                  <span className="category-name">{categoryNames[cat] || cat}</span>
                  <div className="bar-container">
                    <div 
                      className="bar-fill"
                      style={{ width: `${(count / total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="category-count">{count}</span>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  )
}