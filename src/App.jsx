import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { SearchBar } from './components/SearchBar'
import { CategoryFilter } from './components/CategoryFilter'
import { Statistics } from './components/Statistics'
import { ClearButton } from './components/ClearButton'
import { selectFilteredTasks } from './features/tasks/tasksSelectors'
import { clearCompletedTasks } from './features/tasks/tasksSlice'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const dispatch = useDispatch()
  
  // Используем селектор для получения отфильтрованных задач
  const filteredTasks = useSelector((state) => 
    selectFilteredTasks(state, searchTerm, selectedCategory)
  )
  
  // Проверяем наличие выполненных задач для отображения кнопки очистки
  const hasCompletedTasks = useSelector((state) => 
    state.tasks.some(task => task.completed)
  )

  const handleClearCompleted = () => {
    dispatch(clearCompletedTasks())
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>📝 Менеджер задач</h1>
      </div>
      
      <div className="container">
        <div className="sidebar">
          <TaskForm />
          <Statistics />
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
          <ClearButton 
            onClearCompleted={handleClearCompleted} 
            hasCompletedTasks={hasCompletedTasks}
          />
        </div>
        
        <div className="main-content">
          <TaskList tasks={filteredTasks} />
        </div>
      </div>
    </div>
  )
}

export default App