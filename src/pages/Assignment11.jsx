import { useNavigate } from "react-router-dom"

const Assignment11 = () => {
    const navigate = useNavigate();
  return (
 <>
 <div className="p-8">
      <button onClick={() => navigate("/")} className="mb-6 text-teal-600 transition duration-300 hover:text-teal-700">
        &larr; Back to Assignments
      </button>

      <h1 className="mb-10 text-4xl font-bold">Assignment 11 - Tasks</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          onClick={() => navigate("/assignment11/studentform")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Student Form Handling
        </button>

        <button
          onClick={() => navigate("/assignment11/employeeform")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700 "
        >
          Employee Form Handling
        </button>

        <button
          onClick={() => navigate("/assignment11/productform")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Product Form Handling
        </button>

        <button
          onClick={() => navigate("/assignment11/userprofileform")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          User Profile Form Handling
        </button>

        <button
          onClick={() => navigate("/assignment11/schoolform")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          School Form Handling
        </button>
        
      </div>
    </div>
 
 
 </>
  )
}

export default Assignment11

