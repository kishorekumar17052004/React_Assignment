import { useNavigate } from "react-router-dom"

const Assignment12 = () => {
    const navigate = useNavigate()
  return (
    <div className="p-8">
      <button onClick={() => navigate("/")} className="mb-6 text-teal-600 transition duration-300 hover:text-teal-700">
        &larr; Back to Assignments
      </button>

      <h1 className="mb-10 text-4xl font-bold">Assignment 12 - Tasks</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          onClick={() => navigate("/assignment12/task")}
          className="rounded bg-teal-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          FormHandling and StoreData into LocalStorage
        </button>

        
      </div>
    </div>
  )
}

export default Assignment12
