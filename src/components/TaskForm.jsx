import { useState } from 'react'
import '../style_components/TaskForm.css'

const CATEGORIES = [
  { id: 'work', name: 'Работа', color: '#3498db' },
  { id: 'personal', name: 'Личное', color: '#2ecc71' },
  { id: 'shopping', name: 'Покупки', color: '#e74c3c' },
  { id: 'health', name: 'Здоровье', color: '#9b59b6' },
  { id: 'other', name: 'Другое', color: '#95a5a6' }
]

export const TaskForm = ({ onAddTask }) => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('work')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTask({
        id: Date.now(),
        text: text.trim(),
        completed: false,
        category: category,
        createdAt: new Date().toISOString()
      })
      setText('')
      setCategory('work')
    }
  }

  return (
    <div className="task-form-card">
      <h3 className="form-title">Добавить новую задачу</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="task-input"
            placeholder="Что нужно сделать?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="category-label">Категория:</label>
          <div className="category-buttons">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`category-btn ${category === cat.id ? 'active' : ''}`}
                style={{
                  backgroundColor: category === cat.id ? cat.color : '#f0f0f0',
                  color: category === cat.id ? 'white' : '#333'
                }}
                onClick={() => setCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="add-btn">
          + Добавить задачу
        </button>
      </form>
    </div>
  )
}