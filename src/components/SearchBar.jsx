import '../style_components/SearchBar.css'

export const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="card">
      <h3 className="card-title">🔍 Поиск</h3>
      <input
        type="text"
        className="search-input"
        placeholder="Поиск по названию задачи..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}