import { useNavigate } from "react-router-dom"

const Assignment23 = () => {
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
          useCallback
        </p>
        <h1 className="mb-8 text-4xl font-bold">Assignment 23 - Tasks</h1>

        <button
          type="button"
          onClick={() => navigate("/assignment23/task1")}
          className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg sm:max-w-md"
        >
          <span className="block text-xl font-bold">Stable Counter Functions</span>
          <span className="mt-2 block text-sm text-slate-500">
            Avoid recreating child callback functions on every render.
          </span>
        </button>
      </div>
    </main>
  )
}

export default Assignment23
