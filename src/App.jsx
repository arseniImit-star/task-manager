import { useState, useEffect } from 'react'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { SearchBar } from './components/SearchBar'
import { CategoryFilter } from './components/CategoryFilter'
import { Statistics } from './components/Statistics'
import { ClearButton } from './components/ClearButton'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const hasCompletedTasks = tasks.some(task => task.completed)

  return (
    <div className="app">
      <div className="app-header">
        <h1>📝 Менеджер задач</h1>
      </div>
      
      <div className="container">
        <div className="sidebar">
          <TaskForm onAddTask={addTask} />
          <Statistics tasks={tasks} />
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
          <ClearButton 
            onClearCompleted={clearCompletedTasks} 
            hasCompletedTasks={hasCompletedTasks}
          />
        </div>
        
        <div className="main-content">
          <TaskList 
            tasks={filteredTasks} 
            onToggle={toggleTask} 
            onDelete={deleteTask}
          />
        </div>
      </div>
    </div>
  )
}

export default App