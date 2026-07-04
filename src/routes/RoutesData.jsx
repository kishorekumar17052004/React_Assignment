//Assignment 1
import Assignment1 from "../pages/Assignment1"
import Assignment2 from "../pages/Assignment2"
import Home from "../pages/Home"
import Assignment3 from "../pages/Assignment3"
import Assignment6 from "../pages/Assignment6"
import Assignment5 from "../pages/Assignment5"
import Assignment7 from "../pages/Assignment7"
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
//Assignment 6
import Assignment6Task1 from "../assignment/Assignment6/Task1"
import Assignment6Task2 from "../assignment/Assignment6/Task2"
import Assignment6Task3 from "../assignment/Assignment6/Task3"
import Assignment6Task4 from "../assignment/Assignment6/Task4"
import Assignment6Task5 from "../assignment/Assignment6/Task5"
import Assignment6Task6 from "../assignment/Assignment6/Task6"
import Assignment6Task7 from "../assignment/Assignment6/Task7"
import Assignment6Task8 from "../assignment/Assignment6/Task8"
import Assignment6Task9 from "../assignment/Assignment6/Task9"
import Assignment6Task10 from "../assignment/Assignment6/Task10"
import Assignment6Task11 from "../assignment/Assignment6/Task11"
import Assignment6Task12 from "../assignment/Assignment6/Task12"
import Assignment6Task13 from "../assignment/Assignment6/Task13"
import Assignment6Task14 from "../assignment/Assignment6/Task14"
import Assignment6Task15 from "../assignment/Assignment6/Task15"
//Assignment 7
import Assignment7Task1 from "../assignment/Assignment7/Task1"
//Assignment 8 
import Assignment8task1 from "../assignment/Assignment8/Task1"
import Assignment8 from "../pages/Assignment8"
// Assignment 9 
import Assignment9 from "../pages/Assignment9"
import Assignment9task1 from "../assignment/Assignment9/Task1"
import Assignment9task2 from "../assignment/Assignment9/Task2"
// Assignment 10
import Assignment10 from "../pages/Assignment10"
import Assignment10studentform from "../assignment/Assignment10/StudentForm"
// Assignment 11
import Assignment11 from "../pages/Assignment11"
import Assignment11Student from "../assignment/Assignment11/Student"
import Assignment11Employee from "../assignment/Assignment11/Employee"
import Assignment11Product from "../assignment/Assignment11/Product"
import Assignment11UserProfile from "../assignment/Assignment11/UserProfile"
import Assignment11School from "../assignment/Assignment11/School"
// Assignment 12
import Assignment12 from "../pages/Assignment12"
import Assignment12Task from "../assignment/Assignment12/Task"
// Assignment 13
import Assignment13 from "../pages/Assignment13"
import StudentRegister from "../assignment/Assignment13/StudentRegister"
import EmployeeManagement from "../assignment/Assignment13/EmployeeManagement"
import ProductManagement from "../assignment/Assignment13/ProductManagement"
import UserRegistration from "../assignment/Assignment13/UserRegistration"
import ContactBook from "../assignment/Assignment13/ContactBook"
import CourseEnrollment from "../assignment/Assignment13/CourseEnrollment"
// Assignment 14
import Assignment14 from "../pages/Assignment14"
import Assignment14Task1 from "../assignment/Assignment14/Task1"
import Assignment14Task2 from "../assignment/Assignment14/Task2"
import Assignment14Task3 from "../assignment/Assignment14/Task3"
import Assignment14Task4 from "../assignment/Assignment14/Task4"
import Assignment14Task5 from "../assignment/Assignment14/Task5"
import Assignment14Task6 from "../assignment/Assignment14/Task6"
// Assignment 15
import Assignment15 from "../pages/Assignment15"
import Assignment15Task1 from "../assignment/Assignment15/Task1"
import Assignment15Task2 from "../assignment/Assignment15/Task2"
import Assignment15Task3 from "../assignment/Assignment15/Task3"
import Assignment15Task4 from "../assignment/Assignment15/Task4"
// Assignment 16
import Assignment16 from "../pages/Assignment16"
// Assignment 17
import Assignment17 from "../pages/Assignment17"



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
    path: "/assignment3",
    element: <Assignment3 />,
  },
  {
    path: "/assignment4",
    element: <Assignment4 />,
  },
  {
    path: "/assignment5",
    element: <Assignment5 />,
  },
  {
    path: "/assignment6",
    element: <Assignment6 />,
  },
  {
    path: "/assignment7",
    element: <Assignment7 />,
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
    // Assignment 6
    {
     path:"/assignment6/task1/*",
     element:<Assignment6Task1/>

    },
      {
     path:"/assignment6/task2/*",
     element:<Assignment6Task2/>

    },
       {
     path:"/assignment6/task3/*",
     element:<Assignment6Task3/>

    },   {
     path:"/assignment6/task4/*",
     element:<Assignment6Task4/>

    },   {
     path:"/assignment6/task5/*",
     element:<Assignment6Task5/>

    },   {
     path:"/assignment6/task6/*",
     element:<Assignment6Task6/>

    },   {
     path:"/assignment6/task7/*",
     element:<Assignment6Task7/>

    },   {
     path:"/assignment6/task8/*",
     element:<Assignment6Task8/>

    },   {
     path:"/assignment6/task9/*",
     element:<Assignment6Task9/>

    },   {
     path:"/assignment6/task10/*",
     element:<Assignment6Task10/>

    },   {
     path:"/assignment6/task11/*",
     element:<Assignment6Task11/>

    },   {
     path:"/assignment6/task12/*",
     element:<Assignment6Task12/>

    },   {
     path:"/assignment6/task13/*",
     element:<Assignment6Task13/>

    },   {
     path:"/assignment6/task14/*",
     element:<Assignment6Task14/>

    },   {
     path:"/assignment6/task15/*",
     element:<Assignment6Task15/>

    }, 
      {
     path:"/assignment7/task1/*",
     element:<Assignment7Task1/>

    },
    {
  path: "/assignment8",
  element: <Assignment8 />,
},
{
  path: "/assignment8/task1/*",
  element: <Assignment8task1 />,
},
{
  path: "/assignment9",
  element: <Assignment9 />,
},
{
  path: "/assignment9/task1/*",
  element: <Assignment9task1 />,
}, 
{
  path: "/assignment9/task2/*",
  element: <Assignment9task2 />,
},
{
  path: "/assignment10",
  element: <Assignment10 />,
},
{
  path: "/assignment10/studentform/*",
  element: <Assignment10studentform />,
},
{
  path: "/assignment11",
  element: <Assignment11 />,
},
{
  path: "/assignment11/studentform/*",
  element: <Assignment11Student />,
},
{
  path: "/assignment11/employeeform/*",
  element: <Assignment11Employee />,
},
{
  path: "/assignment11/productform/*",
  element: <Assignment11Product />,
},
{
  path: "/assignment11/userprofileform/*",
  element: <Assignment11UserProfile />,
},
{
  path: "/assignment11/schoolform/*",
  element: <Assignment11School />,
},
{
  path: "/assignment12",
  element: <Assignment12 />,
},
{
  path: "/assignment12/task/*",
  element: <Assignment12Task />,
},
{
  path: "/assignment13",
  element: <Assignment13 />,
},
{
  path: "/assignment13/studentregister/*",
  element: <StudentRegister />,
},
{
  path: "/assignment13/employeemanagement/*",
  element: <EmployeeManagement />,
},
{
  path: "/assignment13/productmanagement/*",
  element: <ProductManagement />,
},
{
  path: "/assignment13/userregistration/*",
  element: <UserRegistration />,
},
{
  path: "/assignment13/contactbook/*",
  element: <ContactBook />,
},
{
  path: "/assignment13/courseenrollment/*",
  element: <CourseEnrollment />,
},
{
  path: "/assignment14",
  element: <Assignment14 />,
},
{
  path: "/assignment14/task1/*",
  element: <Assignment14Task1 />,
},
{
  path: "/assignment14/task2/*",
  element: <Assignment14Task2 />,
},
{
  path: "/assignment14/task3/*",
  element: <Assignment14Task3 />,
},
{
  path: "/assignment14/task4/*",
  element: <Assignment14Task4 />,
},
{
  path: "/assignment14/task5/*",
  element: <Assignment14Task5 />,
},
{
  path: "/assignment14/task6/*",
  element: <Assignment14Task6 />,
},
{
  path: "/assignment15",
  element: <Assignment15 />,
},
{
  path: "/assignment15/task1/*",
  element: <Assignment15Task1 />,
},
{
  path: "/assignment15/task2/*",
  element: <Assignment15Task2 />,
},
{
  path: "/assignment15/task3/*",
  element: <Assignment15Task3 />,
},
{
  path: "/assignment15/task4/*",
  element: <Assignment15Task4 />,
},
{
  path: "/assignment16",
  element: <Assignment16 />,
},
{
  path: "/assignment17",
  element: <Assignment17 />,
},



  
  

];
