import { useMemo, useState } from "react"

const employees = [
  { id: 1, name: "Kiran", role: "Developer", salary: 55000 },
  { id: 2, name: "Divya", role: "Designer", salary: 48000 },
  { id: 3, name: "Sanjay", role: "Tester", salary: 42000 },
  { id: 4, name: "Nisha", role: "Manager", salary: 68000 },
]

const Task4 = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const totalSalaryExpense = useMemo(() => {
    return employees.reduce((total, employee) => total + employee.salary, 0)
  }, [])

  return (
    <div className={`min-h-screen p-8 transition ${darkTheme ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-900"}`}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Employee Salary Dashboard</h1>
          <button
            onClick={() => setDarkTheme((theme) => !theme)}
            className="rounded bg-emerald-600 px-4 py-2 font-medium text-white"
          >
            Change Theme
          </button>
        </div>

        <div className={`overflow-hidden rounded-lg shadow ${darkTheme ? "bg-neutral-800" : "bg-white"}`}>
          {employees.map((employee) => (
            <div key={employee.id} className="grid grid-cols-3 border-b border-neutral-300 p-5 last:border-b-0">
              <p className="font-semibold">{employee.name}</p>
              <p>{employee.role}</p>
              <p className="text-right">₹{employee.salary.toLocaleString("en-IN")}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-emerald-600 p-6 text-right text-2xl font-bold text-white">
          Total Salary Expense: ₹{totalSalaryExpense.toLocaleString("en-IN")}
        </div>
      </div>
    </div>
  )
}

export default Task4
