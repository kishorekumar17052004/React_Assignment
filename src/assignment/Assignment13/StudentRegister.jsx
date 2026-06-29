import { useEffect, useState } from "react"

const StudentRegister = () => {
  const [registerInput, setRegisterInput] = useState({ studentName: "", studentAge: "", studentCourse: "", studentCity: "" })
  const [registerData, setRegisterData] = useState(() => {
    try {
      const getdata = JSON.parse(localStorage.getItem("studentdata"))
      return getdata ? getdata : []
    }
    catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("studentdata", JSON.stringify(registerData))
  }, [registerData])

  const handleinput = (e) => {
    const { name, value } = e.target
    setRegisterInput({ ...registerInput, [name]: value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    setRegisterData((prev) => [...prev, registerInput])
    setRegisterInput({ studentName: "", studentAge: "", studentCourse: "", studentCity: "" })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Student Register</h1>

        <form onSubmit={handlesubmit} className="mb-8 rounded bg-white p-6 shadow">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="studentName"
              placeholder="Student name"
              onChange={handleinput}
              value={registerInput.studentName}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="number"
              name="studentAge"
              placeholder="Age"
              onChange={handleinput}
              value={registerInput.studentAge}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="studentCourse"
              placeholder="Course"
              onChange={handleinput}
              value={registerInput.studentCourse}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="studentCity"
              placeholder="City"
              onChange={handleinput}
              value={registerInput.studentCity}
              required
            />
          </div>

          <button className="mt-5 w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            Register
          </button>
        </form>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Student List</h2>

        {registerData.length === 0 ? (
          <p className="rounded bg-white p-4 text-center text-gray-500 shadow">No Data Found</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {registerData.map((student, index) => (
              <div key={index} className="rounded bg-white p-4 shadow">
                <p className="font-semibold text-gray-800">Name: {student.studentName}</p>
                <p className="text-gray-600">Age: {student.studentAge}</p>
                <p className="text-gray-600">Course: {student.studentCourse}</p>
                <p className="text-gray-600">City: {student.studentCity}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentRegister
