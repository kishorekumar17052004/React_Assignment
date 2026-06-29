import { useEffect, useState } from "react"

const UserRegistration = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const [userData, setUserData] = useState(() => {
    try {
      const savedUsers = JSON.parse(localStorage.getItem("userdata"))
      return savedUsers ? savedUsers : []
    }
    catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("userdata", JSON.stringify(userData))
  }, [userData])

  const handleInput = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
    setError("")
  }

  const validateForm = () => {
    if (!userInput.username.trim() || !userInput.email.trim() || !userInput.password.trim()) {
      return "All fields are required"
    }

    if (!userInput.email.includes("@") || !userInput.email.includes(".")) {
      return "Enter a valid email address"
    }

    if (userInput.password.length < 6) {
      return "Password must be at least 6 characters"
    }

    return ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationError = validateForm()

    if (validationError) {
      setError(validationError)
      return
    }

    setUserData((prev) => [...prev, userInput])
    setUserInput({
      username: "",
      email: "",
      password: "",
    })
    setError("")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">User Registration Form</h1>

        <form onSubmit={handleSubmit} className="mb-8 rounded bg-white p-6 shadow">
          <div className="grid gap-4">
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="username"
              placeholder="Username"
              value={userInput.username}
              onChange={handleInput}
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="email"
              name="email"
              placeholder="Email"
              value={userInput.email}
              onChange={handleInput}
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="password"
              name="password"
              placeholder="Password"
              value={userInput.password}
              onChange={handleInput}
            />
          </div>

          {error && <p className="mt-4 rounded bg-red-100 p-3 text-red-600">{error}</p>}

          <button className="mt-5 w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            Register User
          </button>
        </form>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Registered Users</h2>

        {userData.length === 0 ? (
          <p className="rounded bg-white p-4 text-center text-gray-500 shadow">No Users Found</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {userData.map((user, index) => (
              <div key={index} className="rounded bg-white p-5 shadow">
                <h3 className="text-xl font-bold text-gray-800">{user.username}</h3>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Password: {user.password}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default UserRegistration
