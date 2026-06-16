import { Route, Routes } from "react-router-dom"
import Assignment1 from "../pages/Assignment1"
import Assignment2 from "../pages/Assignment2"
import Home from "../pages/Home"

import StudentProfile from "../assignment/Assignment1/StudentProfile"
import EmployeeCard from "../assignment/Assignment1/EmployeeCard"
import Layout from "../layouts/Layout"
import ProductCard from "../assignment/Assignment1/ProductCard"
import MovieDetails from "../assignment/Assignment1/MovieDetails"
import CompanyInfo from "../assignment/Assignment1/CompanyInfo"
import Task6 from "../assignment/Assignment1/Task6"
import Assignment2Task1 from "../assignment/Assignment2/Task1"
import Assignment4 from "../pages/Assignment4"
import Assignment4Task1 from "../assignment/Assignment4/Task1"
import Assignment4Task2 from "../assignment/Assignment4/Task2"
import Assignment4Task3 from "../assignment/Assignment4/Task3"


const AppRoute = () => {
  return (
    <>
    
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        </Route>
        <Route path="/assignment1" element={<Assignment1 />} />
        <Route path="/assignment2" element={<Assignment2 />} />
        <Route path="/assignment4" element={<Assignment4 />} />

        <Route
          path="/assignment1/task1"
          element={<StudentProfile/>}
        />

        <Route
          path="/assignment1/task2"
          element={< EmployeeCard/>}
        />
        <Route
          path="/assignment1/task2"
          element={< EmployeeCard/>}
        />
          <Route
          path="/assignment1/task3"
          element={<ProductCard/>}
        />
          <Route
          path="/assignment1/task4"
          element={<MovieDetails/>}
        />
        <Route
          path="/assignment1/task5"
          element={<CompanyInfo/>}
        />
         <Route
          path="/assignment1/task6"
          element={<Task6/>}
          
        />
         <Route
          path="/assignment2/task1/*"
          element={<Assignment2Task1/>}
          
        />
         <Route
          path="/assignment4/task1/*"
          element={<Assignment4Task1/>}
          
        />
        <Route
          path="/assignment4/task2/*"
          element={<Assignment4Task2/>}
          
        />
        <Route
          path="/assignment4/task3/*"
          element={<Assignment4Task3/>}
          
        />
        

      </Routes>
    
    
    </>
    
    
  )
}

export default AppRoute
