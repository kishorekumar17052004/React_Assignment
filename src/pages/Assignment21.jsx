import { useNavigate } from "react-router-dom"


const Assignment21 = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => navigate("/")}
          className="mb-8 rounded border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition duration-300 hover:border-teal-600 hover:text-teal-700"
        >
          &larr; Back to Assignments
        </button>

        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">Protected Routes</p>
          <h1 className="text-4xl font-bold">Assignment 21 - Tasks</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <button
            onClick={() => navigate("/assignment21/task1")}
            className="rounded-lg border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            useCount Hook
          </button>
          <button
            onClick={() => navigate("/assignment21/task2")}
            className="rounded-lg border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            useToggle Hook
          </button>
          <button
            onClick={() => navigate("/assignment21/task3")}
            className="rounded-lg border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            useFetch Hook
          </button>
          <button
            onClick={() => navigate("/assignment21/task4")}
            className="rounded-lg border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            useLocalStorage Hook
          </button>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Assignment21
