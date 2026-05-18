import '../style_components/CategoryFilter.css'

const CATEGORY_FILTERS = [
  { id: 'all', name: 'Все' },
  { id: 'work', name: 'Работа', color: '#3498db' },
  { id: 'personal', name: 'Личное', color: '#2ecc71' },
  { id: 'shopping', name: 'Покупки', color: '#e74c3c' },
  { id: 'health', name: 'Здоровье', color: '#9b59b6' },
  { id: 'other', name: 'Другое', color: '#95a5a6' }
]

export const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="card">
      <h3 className="card-title">🏷️ Категории</h3>
      <div className="category-filters">
        {CATEGORY_FILTERS.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            style={{
              backgroundColor: selectedCategory === cat.id && cat.color ? cat.color : 'transparent',
              borderColor: cat.color || '#ddd',
              color: selectedCategory === cat.id && cat.color ? 'white' : (cat.color || '#333')
            }}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  )
}