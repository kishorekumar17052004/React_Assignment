import { useState } from "react"

const Student = () => {
  const [studentData, setStudentData] = useState({
    userName: "",
    userAge: "",
    userCourse: "",
    userCity: "",
  })
  const [student, setStudent] = useState([])

  const handlechange = (e) => {
    const { name, value } = e.target
    setStudentData({ ...studentData, [name]: value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    setStudent([...student, studentData])
    setStudentData({ userName: "", userAge: "", userCourse: "", userCity: "" })
    setStudentData({
    userName: "",
    userAge: "",
    userCourse: "",
    userCity: "",
  })
  }

  const inputStyle =
    "w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-violet-100 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <section className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-indigo-100/70">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-8 text-white sm:px-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-100">
              Assignment 11
            </p>
            <h1 className="text-3xl font-bold">Student Registration</h1>
            <p className="mt-2 text-indigo-100">
              Add student details to build your class list.
            </p>
          </div>

          <form className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10" onSubmit={handlesubmit}>
            <label className="block text-sm font-semibold text-slate-700">
              Student name
              <input
                className={`${inputStyle} mt-2`}
                type="text"
                onChange={handlechange}
                value={studentData.userName}
                name="userName"
                placeholder="Enter the name"
                required
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              Age
              <input
                className={`${inputStyle} mt-2`}
                type="number"
                min="1"
                onChange={handlechange}
                value={studentData.userAge}
                name="userAge"
                placeholder="Enter the age"
                required
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              Course
              <input
                className={`${inputStyle} mt-2`}
                type="text"
                onChange={handlechange}
                value={studentData.userCourse}
                name="userCourse"
                placeholder="Enter the course"
                required
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              City
              <input
                className={`${inputStyle} mt-2`}
                type="text"
                onChange={handlechange}
                value={studentData.userCity}
                name="userCity"
                placeholder="Enter the city"
                required
              />
            </label>

            <button
              className="mt-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 sm:col-span-2"
              type="submit"
            >
              Add Student
            </button>
          </form>
        </section>

        {student.length > 0 && (
          <section className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800">Student List</h2>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                {student.length} {student.length === 1 ? "student" : "students"}
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {student.map((item, index) => (
                <article
                  className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                  key={index + 1}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold uppercase text-indigo-600">
                    {item.userName.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{item.userName}</h3>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p><span className="font-semibold text-slate-700">Age:</span> {item.userAge}</p>
                    <p><span className="font-semibold text-slate-700">Course:</span> {item.userCourse}</p>
                    <p><span className="font-semibold text-slate-700">City:</span> {item.userCity}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default Student
