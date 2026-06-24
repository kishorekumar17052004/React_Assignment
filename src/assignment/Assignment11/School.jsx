import { useState } from "react"

const initialSchoolData = {
  schoolName: "",
  principalName: "",
  city: "",
  totalStudents: "",
}

const School = () => {
  const [schoolData, setSchoolData] = useState(initialSchoolData)
  const [submittedSchool, setSubmittedSchool] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setSchoolData({ ...schoolData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedSchool({ ...schoolData })
    setSchoolData(initialSchoolData)
  }

  const inputStyle =
    "mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-violet-50 to-purple-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <section className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-violet-100/70">
          <header className="bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-8 text-white sm:px-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-100">
              Assignment 11
            </p>
            <h1 className="text-3xl font-bold">School Management Form</h1>
            <p className="mt-2 text-violet-100">
              Enter the school information below.
            </p>
          </header>

          <form
            className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10"
            onSubmit={handleSubmit}
          >
            <label className="text-sm font-semibold text-slate-700">
              School Name
              <input
                className={inputStyle}
                type="text"
                name="schoolName"
                value={schoolData.schoolName}
                onChange={handleChange}
                placeholder="Enter school name"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Principal Name
              <input
                className={inputStyle}
                type="text"
                name="principalName"
                value={schoolData.principalName}
                onChange={handleChange}
                placeholder="Enter principal name"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              City
              <input
                className={inputStyle}
                type="text"
                name="city"
                value={schoolData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Total Students
              <input
                className={inputStyle}
                type="number"
                name="totalStudents"
                value={schoolData.totalStudents}
                onChange={handleChange}
                placeholder="Enter total students"
                min="0"
                required
              />
            </label>

            <button
              className="mt-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200 sm:col-span-2"
              type="submit"
            >
              Save School
            </button>
          </form>
        </section>

        {submittedSchool && (
          <article className="mx-auto mt-10 max-w-lg overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">
                School Information
              </p>
              <h2 className="mt-2 text-2xl font-bold">{submittedSchool.schoolName}</h2>
              <p className="mt-1 text-slate-300">{submittedSchool.city}</p>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-violet-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                  Principal
                </p>
                <p className="mt-2 font-bold text-slate-800">
                  {submittedSchool.principalName}
                </p>
              </div>
              <div className="rounded-2xl bg-purple-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                  Total Students
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-800">
                  {Number(submittedSchool.totalStudents).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </article>
        )}
      </div>
    </main>
  )
}

export default School
