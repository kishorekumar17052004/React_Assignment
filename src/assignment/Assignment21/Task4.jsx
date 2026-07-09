import useLocalStorage from "./hooks/useLocalStorage"

const Task4 = () => {
    const {student,handleChange } = useLocalStorage("StudentName" , "")
  return (
   <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
    <div className="mx-auto max-w-xl">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">Custom Hook</p>
        <h1 className="text-4xl font-bold">useLocalStorage Hook</h1>
      </div>

      <section className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="mb-6 text-lg font-semibold text-zinc-800">
          Student Name: <span className="text-teal-700">{student || "No name saved"}</span>
        </p>

        <label className="mb-2 block text-sm font-medium text-zinc-700" htmlFor="studentName">
          Enter student name
        </label>
        <input
          id="studentName"
          type="text"
          value={student}
          onChange={handleChange}
          className="min-h-11 w-full rounded border border-zinc-300 px-4 py-2 text-zinc-950 outline-none transition duration-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />
      </section>
    </div>
   </main>
  )
}

export default Task4
