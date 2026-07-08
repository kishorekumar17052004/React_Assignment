import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "./context/AuthContext"

const Home = () => {
  const navigate = useNavigate()
  const {logout , user} = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    navigate("/assignment20/task")
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-950">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-3xl items-center">
        <div className="w-full rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">Protected Page</p>
          <h1 className="mb-4 text-3xl font-bold">Welcome, {user?.userName || "User"}!</h1>
          <p className="mb-8 max-w-xl text-sm leading-6 text-zinc-600">
            You are logged in successfully. This page is visible only when current user data exists in local storage.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Name</p>
              <p className="mt-2 font-semibold text-zinc-900">{user?.userName || "Not available"}</p>
            </div>
            <div className="rounded border border-zinc-200 bg-zinc-50 p-4 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Email</p>
              <p className="mt-2 break-words font-semibold text-zinc-900">{user?.userEmail || "Not available"}</p>
            </div>
          </div>

          <button onClick={handleLogout} className="mt-8 rounded bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-rose-700">
            Logout
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
