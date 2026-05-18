import '../style_components/Statistics.css'

export const Statistics = ({ tasks }) => {
  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const active = total - completed
  
  const byCategory = tasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + 1
    return acc
  }, {})

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
      
      {Object.keys(byCategory).length > 0 && (
        <div className="category-stats">
          <h4>По категориям:</h4>
          <div className="category-bars">
            {Object.entries(byCategory).map(([cat, count]) => (
              <div key={cat} className="category-bar-item">
                <span className="category-name">{cat}</span>
                <div className="bar-container">
                  <div 
                    className="bar-fill"
                    style={{ width: `${(count / total) * 100}%` }}
                  ></div>
                </div>
                <span className="category-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}