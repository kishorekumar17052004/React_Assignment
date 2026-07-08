import { useNavigate } from "react-router-dom"

const Assignment20 = () => {
  const navigate = useNavigate()

  return (
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
          <h1 className="text-4xl font-bold">Assignment 20 - Tasks</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <button
            onClick={() => navigate("/assignment20/task")}
            className="rounded-lg border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            <span className="mb-4 inline-flex rounded bg-teal-600 px-3 py-1 text-sm font-semibold text-white">Task 1</span>
            <h2 className="mb-2 text-xl font-bold text-zinc-950">Auth Flow</h2>
            <p className="text-sm leading-6 text-zinc-600">Register, login, and visit a protected home page.</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Assignment20
