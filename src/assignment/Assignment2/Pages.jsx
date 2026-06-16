import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "./Login"
import Register from "./Register"
import Layout from "./Layout"
const Pages = () => {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
    </Routes>
    
    </>
  )
}

export default Pages
