import { useEffect, useState } from "react"

const CourseEnrollment = () => {
  const [enrollmentInput, setEnrollmentInput] = useState({
    studentName: "",
    courseName: "",
    duration: "",
  })

  const [enrollmentData, setEnrollmentData] = useState(() => {
    try {
      const savedEnrollments = JSON.parse(localStorage.getItem("enrollmentdata"))
      return savedEnrollments ? savedEnrollments : []
    }
    catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("enrollmentdata", JSON.stringify(enrollmentData))
  }, [enrollmentData])

  const handleInput = (e) => {
    const { name, value } = e.target
    setEnrollmentInput({ ...enrollmentInput, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnrollmentData((prev) => [...prev, enrollmentInput])
    setEnrollmentInput({
      studentName: "",
      courseName: "",
      duration: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Course Enrollment Form</h1>

        <form onSubmit={handleSubmit} className="mb-8 rounded bg-white p-6 shadow">
          <div className="grid gap-4">
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="studentName"
              placeholder="Student name"
              value={enrollmentInput.studentName}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="courseName"
              placeholder="Course name"
              value={enrollmentInput.courseName}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="duration"
              placeholder="Duration"
              value={enrollmentInput.duration}
              onChange={handleInput}
              required
            />
          </div>

          <button className="mt-5 w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            Enroll Student
          </button>
        </form>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Enrollment List</h2>

        {enrollmentData.length === 0 ? (
          <p className="rounded bg-white p-4 text-center text-gray-500 shadow">No Enrollments Found</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {enrollmentData.map((enrollment, index) => (
              <div key={index} className="rounded bg-white p-5 shadow">
                <h3 className="text-xl font-bold text-gray-800">{enrollment.studentName}</h3>
                <p className="text-gray-600">Course: {enrollment.courseName}</p>
                <p className="text-gray-600">Duration: {enrollment.duration}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseEnrollment
