import { useNavigate } from "react-router-dom";


const Assignment4 = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="p-8">
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 mb-6 transition duration-300 hover:text-blue-700"
      >
        ← Back to Assignments
      </button>

      <h1 className="text-4xl font-bold mb-10">
        Assignment 4 - Tasks
      </h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment4/task1")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
           School Cards UI
        </button>
        <button
          onClick={() => navigate("/assignment4/task2")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
           School Courses Dashboard
        </button>
         <button
          onClick={() => navigate("/assignment4/task3")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          School Management Dashboard
        </button>

      
     


      </div>
      </div>
      </>
  )
}

export default Assignment4