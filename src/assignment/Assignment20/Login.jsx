import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "./context/AuthContext"

const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  const [loginInput, setLoginInput] = useState({ userEmail: "", userPassword: "" })

  const handleLoginInput = (e) => {
    const { name, value } = e.target
    setLoginInput({ ...loginInput, [name]: value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem("userdata"))

    if (user && user.userEmail === loginInput.userEmail && user.userPassword === loginInput.userPassword) {
      login(user)
      alert("Login Successfully")
      navigate("../home")
    } else {
      alert("Invalid Email or Password")
    }
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-950">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center">
        <div className="w-full rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-700">Welcome Back</p>
          <h1 className="mb-2 text-3xl font-bold">Login</h1>
          <p className="mb-8 text-sm leading-6 text-zinc-600">Enter your registered details to open the protected home page.</p>

          <form onSubmit={handlesubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">Email</label>
              <input className="w-full rounded border border-zinc-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100" type="email" onChange={handleLoginInput} value={loginInput.userEmail} placeholder="Enter the email" name="userEmail" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">Password</label>
              <input className="w-full rounded border border-zinc-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100" type="password" onChange={handleLoginInput} value={loginInput.userPassword} placeholder="Enter the password" name="userPassword" required />
            </div>
            <input className="w-full cursor-pointer rounded bg-amber-600 px-4 py-3 font-semibold text-white transition hover:bg-amber-700" type="submit" value={"Login"} />
          </form>

          <button onClick={() => navigate("/assignment20/task")} className="mt-6 w-full rounded border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-teal-500 hover:text-teal-700">
            Create new account
          </button>
        </div>
      </section>
    </main>
  )
}

export default Login
