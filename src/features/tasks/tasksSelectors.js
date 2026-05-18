// Базовый селектор для получения всех задач
export const selectAllTasks = (state) => state.tasks

// Селектор для получения активных задач (не выполненных)
export const selectActiveTasks = (state) => 
  state.tasks.filter(task => !task.completed)

// Селектор для получения выполненных задач
export const selectCompletedTasks = (state) => 
  state.tasks.filter(task => task.completed)

// Селектор для получения статистики
export const selectTasksStats = (state) => {
  const total = state.tasks.length
  const completed = state.tasks.filter(task => task.completed).length
  const active = total - completed
  return { total, active, completed }
}

// Селектор для получения задач с фильтрацией по поиску и категории
export const selectFilteredTasks = (state, searchTerm, selectedCategory) => {
  return state.tasks.filter(task => {
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory
    return matchesSearch && matchesCategory
  })
}

// Селектор для получения задач по категориям (для статистики)
export const selectTasksByCategory = (state) => {
  const categories = {
    work: 0,
    personal: 0,
    shopping: 0,
    health: 0,
    other: 0
  }
  
  state.tasks.forEach(task => {
    if (categories[task.category] !== undefined) {
      categories[task.category]++
    } else {
      categories.other++
    }
  })
  
  return categories
}