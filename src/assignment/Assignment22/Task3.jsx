import { useMemo, useState } from "react"

const students = [
  { id: 1, name: "Anita", placed: true },
  { id: 2, name: "Rahul", placed: false },
  { id: 3, name: "Priya", placed: true },
  { id: 4, name: "Arun", placed: false },
  { id: 5, name: "Meena", placed: true },
]

const Task3 = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const statistics = useMemo(() => {
    const placedStudents = students.filter((student) => student.placed).length

    return {
      totalStudents: students.length,
      placedStudents,
      unplacedStudents: students.length - placedStudents,
    }
  }, [])

  const cards = [
    { label: "Total Students", value: statistics.totalStudents },
    { label: "Placed Students", value: statistics.placedStudents },
    { label: "Unplaced Students", value: statistics.unplacedStudents },
  ]

  return (
    <div className={`min-h-screen p-8 transition ${darkTheme ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"}`}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <button
            onClick={() => setDarkTheme((theme) => !theme)}
            className="rounded bg-blue-600 px-4 py-2 font-medium text-white"
          >
            Change Theme
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.label} className={`rounded-lg p-6 text-center shadow ${darkTheme ? "bg-slate-800" : "bg-white"}`}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">{card.label}</p>
              <p className="text-4xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Task3
