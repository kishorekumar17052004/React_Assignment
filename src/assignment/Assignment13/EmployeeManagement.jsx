import { useEffect, useState } from "react"

const EmployeeManagement = () => {
  const [employeeInput, setEmployeeInput] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    salary: "",
  })

  const [employeeData, setEmployeeData] = useState(() => {
    try {
      const savedEmployees = JSON.parse(localStorage.getItem("employeedata"))
      return savedEmployees ? savedEmployees : []
    }
    catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("employeedata", JSON.stringify(employeeData))
  }, [employeeData])

  const handleInput = (e) => {
    const { name, value } = e.target
    setEmployeeInput({ ...employeeInput, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmployeeData((prev) => [...prev, employeeInput])
    setEmployeeInput({
      employeeName: "",
      employeeId: "",
      department: "",
      salary: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Employee Management System</h1>

        <form onSubmit={handleSubmit} className="mb-8 rounded bg-white p-6 shadow">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="employeeName"
              placeholder="Employee name"
              value={employeeInput.employeeName}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              value={employeeInput.employeeId}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="department"
              placeholder="Department"
              value={employeeInput.department}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="number"
              name="salary"
              placeholder="Salary"
              value={employeeInput.salary}
              onChange={handleInput}
              required
            />
          </div>

          <button className="mt-5 w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            Add Employee
          </button>
        </form>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Employee List</h2>

        {employeeData.length === 0 ? (
          <p className="rounded bg-white p-4 text-center text-gray-500 shadow">No Employee Data Found</p>
        ) : (
          <div className="overflow-x-auto rounded bg-white shadow">
            <table className="w-full border-collapse text-left">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Employee ID</th>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3">Salary</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-4 py-3">{employee.employeeName}</td>
                    <td className="px-4 py-3">{employee.employeeId}</td>
                    <td className="px-4 py-3">{employee.department}</td>
                    <td className="px-4 py-3">{employee.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmployeeManagement
