//Assignment 1
import Assignment1 from "../pages/Assignment1"
import Assignment2 from "../pages/Assignment2"
import Home from "../pages/Home"
import Assignment5 from "../pages/Assignment5"
import StudentProfile from "../assignment/Assignment1/StudentProfile"
import EmployeeCard from "../assignment/Assignment1/EmployeeCard"
import ProductCard from "../assignment/Assignment1/ProductCard"
import MovieDetails from "../assignment/Assignment1/MovieDetails"
import CompanyInfo from "../assignment/Assignment1/CompanyInfo"
import Task6 from "../assignment/Assignment1/Task6"
//Assignment 2
import Assignment2Task1 from "../assignment/Assignment2/Task1"
//Assignment 4
import Assignment4 from "../pages/Assignment4"
import Assignment4Task1 from "../assignment/Assignment4/Task1"
import Assignment4Task2 from "../assignment/Assignment4/Task2"
import Assignment4Task3 from "../assignment/Assignment4/Task3"
//Assignment 5
import Assignment5Task1 from "../assignment/Assignment5/Task1"
import Assignment5Task2 from "../assignment/Assignment5/Task2"
import Assignment5Task3 from "../assignment/Assignment5/Task3"
import Assignment5Task4 from "../assignment/Assignment5/Task4"
import Assignment5Task5 from "../assignment/Assignment5/Task5"
import Assignment5Task6 from "../assignment/Assignment5/Task6"


export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/assignment1",
    element: <Assignment1 />,
  },
  {
    path: "/assignment2",
    element: <Assignment2 />,
  },
  {
    path: "/assignment4",
    element: <Assignment4 />,
  },
  {
    path: "/assignment5",
    element: <Assignment5 />,
  },

  // Assignment 1 Tasks
  {
    path: "/assignment1/task1",
    element: <StudentProfile />,
  },
  {
    path: "/assignment1/task2",
    element: <EmployeeCard />,
  },
  {
    path: "/assignment1/task3",
    element: <ProductCard />,
  },
  {
    path: "/assignment1/task4",
    element: <MovieDetails />,
  },
  {
    path: "/assignment1/task5",
    element: <CompanyInfo />,
  },
  {
    path: "/assignment1/task6",
    element: <Task6 />,
  },

  // Assignment 2 Tasks
  {
    path: "/assignment2/task1/*",
    element: <Assignment2Task1 />,
  },

  // Assignment 4 Tasks
  {
    path: "/assignment4/task1/*",
    element: <Assignment4Task1 />,
  },
  {
    path: "/assignment4/task2/*",
    element: <Assignment4Task2 />,
  },
  {
    path: "/assignment4/task3/*",
    element: <Assignment4Task3 />,
  },
  // Assignment 5
    {
    path: "/assignment5/task1/*",
    element: <Assignment5Task1 />,
  },
  {
    path: "/assignment5/task2/*",
    element: <Assignment5Task2 />,
  },
   {
    path: "/assignment5/task3/*",
    element: <Assignment5Task3 />,
  },
  {
    path: "/assignment5/task4/*",
    element: <Assignment5Task4 />,
  },
{
    path: "/assignment5/task5/*",
    element: <Assignment5Task5 />,
  },
{
    path: "/assignment5/task6/*",
    element: <Assignment5Task6 />,
  },


  
  

];
