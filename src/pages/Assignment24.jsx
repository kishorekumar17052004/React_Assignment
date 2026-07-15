import { useNavigate } from "react-router-dom"

const Assignment24 = () => {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-950">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mb-8 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
        >
          &larr; Back to Assignments
        </button>

        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-700">
          useReducer
        </p>
        <h1 className="mb-8 text-4xl font-bold">Assignment 24 - Tasks</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <button
            type="button"
            onClick={() => navigate("/assignment24/task1")}
            className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            <span className="block text-xl font-bold">Counter with useReducer</span>
            <span className="mt-2 block text-sm text-slate-500">
              Manage increment, decrement, and reset actions with a reducer.
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/assignment24/task2")}
            className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            <span className="block text-xl font-bold">Student Management System</span>
            <span className="mt-2 block text-sm text-slate-500">
              Add, edit, update, and delete students in a table.
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/assignment24/task3")}
            className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            <span className="block text-xl font-bold">Todo Application</span>
            <span className="mt-2 block text-sm text-slate-500">
              Add, complete, delete, and reset todos through reducer actions.
            </span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Assignment24
