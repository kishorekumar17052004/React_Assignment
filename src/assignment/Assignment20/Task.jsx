import { Route, Routes } from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import ProductRoutes from "./context/ProductRoutes"


const Task = () => {
  return (
    <>
    <Routes>
        <Route index element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="home" element={<ProductRoutes><Home/></ProductRoutes>}/>
    </Routes>
    
    </>
  )
}

export default Task
