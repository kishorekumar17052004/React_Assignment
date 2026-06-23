import { useNavigate } from "react-router-dom"

const Assignment9 = () => {
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <button onClick={() => navigate("/")} className="mb-6 text-blue-500">
        &larr; Back to Assignments
      </button>

      <h1 className="mb-10 text-4xl font-bold">Assignment 9 - Tasks</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          onClick={() => navigate("/assignment9/task1")}
          className="rounded bg-green-600 p-8 text-white"
        >
          withBackgroundColor HOC
        </button>
         <button
          onClick={() => navigate("/assignment9/task2")}
          className="rounded bg-green-600 p-8 text-white"
        >
          withIteration HOC
        </button>
      </div>
    </div>
  )
}

export default Assignment9
