import { createSlice } from '@reduxjs/toolkit'

// Начальное состояние с тестовыми задачами
const initialState = [
  {
    id: 1,
    text: 'Изучить React',
    completed: false,
    category: 'work',
    createdAt: new Date('2024-01-15T10:00:00').toISOString(),
  },
  {
    id: 2,
    text: 'Купить продукты',
    completed: true,
    category: 'shopping',
    createdAt: new Date('2024-01-16T14:30:00').toISOString(),
  },
  {
    id: 3,
    text: 'Сходить к врачу',
    completed: false,
    category: 'health',
    createdAt: new Date('2024-01-17T09:00:00').toISOString(),
  },
  {
    id: 4,
    text: 'Закончить проект по Redux',
    completed: false,
    category: 'work',
    createdAt: new Date('2024-01-18T11:00:00').toISOString(),
  },
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Добавление задачи
    addTask: (state, action) => {
      state.push(action.payload)
    },
    
    // Переключение статуса задачи
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    
    // Удаление задачи
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload)
    },
    
    // Очистка всех выполненных задач
    clearCompletedTasks: (state) => {
      return state.filter(task => !task.completed)
    },
  },
})

// Экспорт action creators
export const { addTask, toggleTask, deleteTask, clearCompletedTasks } = tasksSlice.actions

// Экспорт редьюсера
export default tasksSlice.reducer