import { useNavigate } from "react-router-dom"


const Assignment15 = () => {
    const navigate = useNavigate()
  return (
    <>
     <div className="p-8">
      <button onClick={() => navigate("/")} className="mb-6 text-teal-600 transition duration-300 hover:text-teal-700">
        &larr; Back to Assignments
      </button>

      <h1 className="mb-10 text-4xl font-bold">Assignment 15 - Tasks</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          onClick={() => navigate("/assignment15/task1")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Task 1
        </button>
        <button
          onClick={() => navigate("/assignment15/task2")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Task 2
        </button>
        <button
          onClick={() => navigate("/assignment15/task3")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Task 3
        </button>
        <button
          onClick={() => navigate("/assignment15/task4")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Task 4
        </button>
        
        
      </div>
    </div>
    
    </>
  )
}

export default Assignment15
