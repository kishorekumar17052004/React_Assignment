import { useNavigate } from "react-router-dom"


const Assignment25 = () => {
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
          Environment variables and code splitting
        </p>
        <h1 className="mb-8 text-4xl font-bold">Assignment 25 - Tasks</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <button
            type="button"
            onClick={() => navigate("/assignment25/task1")}
            className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
          >
            <span className="block text-xl font-bold">Lazy-loaded API pages</span>
            <span className="mt-2 block text-sm text-slate-500">
              Load three pages with React.lazy and Suspense, using an API URL from .env.
            </span>
          </button>

        </div>
      </div>
    </main>
  )
}

export default Assignment25
