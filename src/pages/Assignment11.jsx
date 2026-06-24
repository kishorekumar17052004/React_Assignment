import { useNavigate } from "react-router-dom"

const Assignment11 = () => {
    const navigate = useNavigate();
  return (
 <>
 <div className="p-8">
      <button onClick={() => navigate("/")} className="mb-6 text-blue-500">
        &larr; Back to Assignments
      </button>

      <h1 className="mb-10 text-4xl font-bold">Assignment 11 - Tasks</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          onClick={() => navigate("/assignment11/studentform")}
          className="rounded bg-green-600 p-8 text-white"
        >
          Student Form Handling
        </button>

        <button
          onClick={() => navigate("/assignment11/employeeform")}
          className="rounded  bg-green-600 p-8 text-white "
        >
          Employee Form Handling
        </button>

        <button
          onClick={() => navigate("/assignment11/productform")}
          className="rounded bg-green-600 p-8 text-white"
        >
          Product Form Handling
        </button>

        <button
          onClick={() => navigate("/assignment11/userprofileform")}
          className="rounded bg-green-600 p-8 text-white"
        >
          User Profile Form Handling
        </button>

        <button
          onClick={() => navigate("/assignment11/schoolform")}
          className="rounded bg-green-600 p-8 text-white"
        >
          School Form Handling
        </button>
        
      </div>
    </div>
 
 
 </>
  )
}

export default Assignment11
