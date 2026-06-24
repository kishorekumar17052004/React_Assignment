import { useState } from "react"

const initialEmployeeData = {
  employeeName: "",
  employeeId: "",
  department: "",
  salary: "",
}

const Employee = () => {
  const [employeeData, setEmployeeData] = useState(initialEmployeeData)
  const [submittedEmployee, setSubmittedEmployee] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployeeData({ ...employeeData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedEmployee({ ...employeeData })
    setEmployeeData(initialEmployeeData)
  }

  const inputStyle =
    "mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50 to-teal-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <section className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-emerald-100/70">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-8 text-white sm:px-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-100">
              Assignment 11
            </p>
            <h1 className="text-3xl font-bold">Employee Registration</h1>
            <p className="mt-2 text-emerald-100">
              Enter the employee details below.
            </p>
          </div>

          <form
            className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10"
            onSubmit={handleSubmit}
          >
            <label className="text-sm font-semibold text-slate-700">
              Employee Name
              <input
                className={inputStyle}
                type="text"
                name="employeeName"
                value={employeeData.employeeName}
                onChange={handleChange}
                placeholder="Enter employee name"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Employee ID
              <input
                className={inputStyle}
                type="text"
                name="employeeId"
                value={employeeData.employeeId}
                onChange={handleChange}
                placeholder="Enter employee ID"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Department
              <input
                className={inputStyle}
                type="text"
                name="department"
                value={employeeData.department}
                onChange={handleChange}
                placeholder="Enter department"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Salary
              <input
                className={inputStyle}
                type="number"
                name="salary"
                value={employeeData.salary}
                onChange={handleChange}
                placeholder="Enter salary"
                min="0"
                required
              />
            </label>

            <button
              className="mt-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 sm:col-span-2"
              type="submit"
            >
              Add Employee
            </button>
          </form>
        </section>

        {submittedEmployee && (
          <article className="mx-auto mt-10 max-w-md rounded-3xl border border-white bg-white/90 p-7 shadow-xl">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold uppercase text-emerald-700">
                {submittedEmployee.employeeName.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Employee Card
                </p>
                <h2 className="text-2xl font-bold text-slate-800">
                  {submittedEmployee.employeeName}
                </h2>
              </div>
            </div>

            <div className="divide-y divide-slate-100 rounded-2xl bg-slate-50 px-5">
              <p className="flex justify-between py-3 text-sm text-slate-600">
                <span>Employee ID</span>
                <span className="font-semibold text-slate-800">{submittedEmployee.employeeId}</span>
              </p>
              <p className="flex justify-between py-3 text-sm text-slate-600">
                <span>Department</span>
                <span className="font-semibold text-slate-800">{submittedEmployee.department}</span>
              </p>
              <p className="flex justify-between py-3 text-sm text-slate-600">
                <span>Salary</span>
                <span className="font-semibold text-slate-800">
                  ₹{Number(submittedEmployee.salary).toLocaleString("en-IN")}
                </span>
              </p>
            </div>
          </article>
        )}
      </div>
    </main>
  )
}

export default Employee
