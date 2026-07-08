
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './assignment/Assignment16/ProductContext.jsx'
import { TodoProvider } from './assignment/Assignment17/context/TodoContext.jsx'
import { UserProvider } from './assignment/Assignment19/context/UserContext.jsx'
import { ProductProvider1 } from './assignment/Assignment19/context/ProductContext.jsx'
import { StudentProvider } from './assignment/Assignment19/context/StudentContext.jsx'
import { DashboardProvider } from './assignment/Assignment19/context/DashboardContext.jsx'
import { AuthProvider } from './assignment/Assignment20/context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <ProductProvider>
    <TodoProvider>
   <UserProvider>
     <ProductProvider1>
        <StudentProvider>
            <DashboardProvider>
              <AuthProvider>
    <App />
              </AuthProvider>
    </DashboardProvider>
    </StudentProvider>
    </ProductProvider1>
    </UserProvider>

    </TodoProvider>
    </ProductProvider>
    </BrowserRouter>

)
