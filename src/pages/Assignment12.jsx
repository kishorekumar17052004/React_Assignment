import { useNavigate } from "react-router-dom"

const Assignment12 = () => {
    const navigate = useNavigate()
  return (
    <div className="p-8">
      <button onClick={() => navigate("/")} className="mb-6 text-blue-500">
        &larr; Back to Assignments
      </button>

      <h1 className="mb-10 text-4xl font-bold">Assignment 12 - Tasks</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          onClick={() => navigate("/assignment12/task")}
          className="rounded bg-green-600 p-8 text-white"
        >
          FormHandling and StoreData into LocalStorage
        </button>

        
      </div>
    </div>
  )
}

export default Assignment12