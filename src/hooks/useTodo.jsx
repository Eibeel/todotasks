import { createContext, useContext, useReducer } from 'react'

const TodoContext = createContext()

const ADD = 'ADD'
const REMOVE = 'REMOVE'
const COMPLETED = 'COMPLETED'
const FILTER = 'FILTER'
const CLEAR_ALL = 'CLEAR'

function todoReducer (state, action) {
  if (action.type === ADD) {
    const { title } = action.payload
    const newTask = {
      // eslint-disable-next-line no-undef
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    return {
      ...state,
      tasks: [...state.tasks, newTask]
    }
  }

  if (action.type === REMOVE) {
    const { id } = action.payload
    return {
      ...state,
      tasks: state.tasks.filter(task => task.id !== id)
    }
  }

  if (action.type === COMPLETED) {
    const { id, completed } = action.payload
    return {
      ...state,
      tasks: state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed
          }
        }

        return task
      })
    }
  }

  if (action.type === FILTER) {
    const { filter } = action.payload
    return {
      ...state,
      filter
    }
  }

  if (action.type === CLEAR_ALL) {
    return {
      ...state,
      tasks: []
    }
  }

  return state
}

function filterTasks (tasks, filter) {
  if (filter === 'completed') {
    return tasks.filter(task => task.completed)
  }

  if (filter === 'active') {
    return tasks.filter(task => !task.completed)
  }

  return tasks
}

export function useTodo () {
  const { tasks, addTask, removeTask, completeTask, filterChange, filter, clearAll } = useContext(TodoContext)
  const filteredTasks = filterTasks(tasks, filter)
  return { tasks: filteredTasks, addTask, removeTask, completeTask, filterChange, clearAll }
}

export function TodoProvider ({ children }) {
  const [state, dispatch] = useReducer(todoReducer, { tasks: [], filter: 'all' })

  function addTask (task) {
    dispatch({ type: ADD, payload: task })
  }

  function removeTask (id) {
    dispatch({ type: REMOVE, payload: { id } })
  }

  function completeTask (id, completed) {
    dispatch({ type: COMPLETED, payload: { id, completed } })
  }

  function filterChange (filter) {
    dispatch({ type: FILTER, payload: { filter } })
  }

  function clearAll () {
    dispatch({ type: CLEAR_ALL })
  }

  const value = {
    tasks: state.tasks,
    addTask,
    removeTask,
    completeTask,
    filter: state.filter,
    filterChange,
    clearAll
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
