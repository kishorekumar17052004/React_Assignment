import useToggle from "./hooks/useToggle"


const Task2 = () => {
    const {toggle ,handleToggle }= useToggle()
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">Custom Hook</p>
          <h1 className="text-4xl font-bold">useToggle Hook</h1>
        </div>

        <section className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
          <label className="mb-2 block text-sm font-medium text-zinc-700" htmlFor="password">
            Password
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="password"
              type={toggle ? "text" : "password"}
              placeholder="Enter Password"
              className="min-h-11 flex-1 rounded border border-zinc-300 px-4 py-2 text-zinc-950 outline-none transition duration-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />

            <button
              onClick={handleToggle}
              className="min-h-11 rounded border border-teal-600 bg-teal-600 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:bg-teal-700"
            >
              {toggle ? "Hide Password" : "Show Password"}
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Task2
