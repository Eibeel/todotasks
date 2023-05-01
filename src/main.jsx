import React from 'react'
import { createRoot } from 'react-dom/client'
import { TodoProvider } from './hooks/useTodo.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
)
