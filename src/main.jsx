import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './assignment/Assignment16/ProductContext.jsx'
import { TodoProvider } from './assignment/Assignment17/context/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ProductProvider>
    <TodoProvider>
    <App />
    </TodoProvider>
    </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
)
