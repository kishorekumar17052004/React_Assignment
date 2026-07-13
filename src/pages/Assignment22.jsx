import { useNavigate } from "react-router-dom"


const Assignment22 = () => {
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
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">useMemo</p>
          <h1 className="text-4xl font-bold">Assignment 22 - Tasks</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <button
            onClick={() => navigate("/assignment22/task1")}
            className="rounded-lg border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            Search Products using UseMemo
          </button>
          <button
            onClick={() => navigate("/assignment22/task2")}
            className="rounded-lg border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            Shopping Cart Total Calculator
          </button>
          <button
            onClick={() => navigate("/assignment22/task3")}
            className="rounded-lg border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            Student Dashboard
          </button>
          <button
            onClick={() => navigate("/assignment22/task4")}
            className="rounded-lg border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            Employee Salary Dashboard
          </button>
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Assignment22
