import { useNavigate } from "react-router-dom"


const Assignment13 = () => {
    const navigate = useNavigate()
  return (
    <>
       <div className="p-8">
      <button onClick={() => navigate("/")} className="mb-6 text-teal-600 transition duration-300 hover:text-teal-700">
        &larr; Back to Assignments
      </button>

      <h1 className="mb-10 text-4xl font-bold">Assignment 13 - Tasks</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          onClick={() => navigate("/assignment13/studentregister")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
         Student Form and StoreData into LocalStorage
        </button>

        <button
          onClick={() => navigate("/assignment13/employeemanagement")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Employee Management System
        </button>

        <button
          onClick={() => navigate("/assignment13/productmanagement")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Product Management System
        </button>

        <button
          onClick={() => navigate("/assignment13/userregistration")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          User Registration Form
        </button>

        <button
          onClick={() => navigate("/assignment13/contactbook")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Contact Book Application
        </button>

        <button
          onClick={() => navigate("/assignment13/courseenrollment")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Course Enrollment Form
        </button>

        
      </div>
    </div>
    </>
  )
}

export default Assignment13

