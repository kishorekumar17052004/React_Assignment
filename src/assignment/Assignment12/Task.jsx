import { Route, Routes } from "react-router-dom"
import DashBoard from "./DashBoard"
import Login from "./Login"
import Register from "./Register"

const Task = () => {
  return (
    <>
    <Routes>
      <Route index element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<DashBoard />} />
    </Routes>
     
    </>
  )
}

export default Task
