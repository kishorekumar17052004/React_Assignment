

import { lazy, Suspense } from "react"
import { Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom"

const UsersPage = lazy(() => import("./pages/UsersPage"))
const PostsPage = lazy(() => import("./pages/PostsPage"))
const TodosPage = lazy(() => import("./pages/TodosPage"))

const links = [
  { path: "users", label: "Users" },
  { path: "posts", label: "Posts" },
  { path: "todos", label: "Todos" },
]

const PageFallback = () => (
  <div
    className="flex min-h-64 items-center justify-center rounded-2xl border border-slate-200 bg-white"
    role="status"
  >
    <div className="text-center">
      <div className="mx-auto mb-3 h-9 w-9 animate-spin rounded-full border-4 border-teal-100 border-t-teal-600" />
      <p className="font-semibold text-slate-600">Loading page...</p>
    </div>
  </div>
)

const Task1 = () => {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-10 text-slate-950">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={() => navigate("/assignment25")}
          className="mb-8 text-sm font-semibold text-teal-700 transition hover:text-teal-600"
        >
          &larr; Back to Assignment 25
        </button>

        <section className="mb-6 rounded-2xl bg-slate-900 p-6 text-white shadow-lg sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">
            React.lazy + Suspense
          </p>
          <h1 className="mt-2 text-3xl font-bold">Lazy-loaded API pages</h1>
          <p className="mt-3 text-sm text-slate-300">
            API base URL: {import.meta.env.VITE_API_URL}
          </p>
        </section>

        <nav className="mb-6 flex flex-wrap gap-3" aria-label="API pages">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `rounded-lg px-5 py-2.5 font-semibold transition ${
                  isActive
                    ? "bg-teal-600 text-white shadow"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route index element={<Navigate to="users" replace />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="todos" element={<TodosPage />} />
          </Routes>
        </Suspense>
      </div>
    </main>
  )
}

export default Task1
