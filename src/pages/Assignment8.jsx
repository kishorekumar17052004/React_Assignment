import { useNavigate } from "react-router-dom"


const Assignment8 = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="p-8">
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 mb-6"
      >
       ← Back to Assignments
      </button>

      <h1 className="text-4xl font-bold mb-10">
        Assignment 8 - Tasks
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment8/task1")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Todo List
        </button>
      </div>
    </div>
    
    
    </>
  )
}

export default Assignment8