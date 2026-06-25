import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import DashBoard from "./DashBoard"

const AppRoute = () => {
  return (
   <>
   <BrowserRouter>
      <Routes>
         <Route  path="/" element={<Register/>} />
         <Route  path="/login" element={<Login/>} />
         <Route  path="/dashboard" element={<DashBoard/>} />
             
      </Routes>
   
   </BrowserRouter>
   
   
   </>
  )
}

export default AppRoute
