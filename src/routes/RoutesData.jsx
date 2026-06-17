//Assignment 1
import Assignment1 from "../pages/Assignment1"
import Assignment2 from "../pages/Assignment2"
import Home from "../pages/Home"
import Assignment3 from "../pages/Assignment3"
import Assignment6 from "../pages/Assignment6"
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
    



  
  

];
