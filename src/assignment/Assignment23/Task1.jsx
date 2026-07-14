import { memo, useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

const CounterButton = memo(function CounterButton({ label, onClick, variant = "primary" }) {
  const buttonStyle =
    variant === "secondary"
      ? "border border-teal-600 text-teal-700 hover:bg-teal-50"
      : "bg-teal-600 text-white hover:bg-teal-700"

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-5 py-3 font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-teal-400 ${buttonStyle}`}
    >
      {label}
    </button>
  )
})

const Task1 = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false)

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount((currentCount) => currentCount - 1)
  }, [])

  const reset = useCallback(() => {
    setCount(0)
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark((currentTheme) => !currentTheme)
  }, [])

  return (
    <main
      className={`min-h-screen px-6 py-10 transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate("/assignment23")}
            className="text-sm font-semibold text-teal-600 transition hover:text-teal-500"
          >
            &larr; Back to Assignment 23
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            {isDark ? "Light theme" : "Dark theme"}
          </button>
        </div>

        <section
          className={`rounded-3xl border p-8 shadow-xl sm:p-12 ${
            isDark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-600">
            useCallback Demo
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">Stable counter functions</h1>
          <p className={`mt-4 leading-7 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Each counter handler keeps the same function reference between renders. Combined with
            a memoized child button, this avoids unnecessary child renders.
          </p>

          <div className={`my-10 rounded-2xl p-8 text-center ${isDark ? "bg-slate-800" : "bg-teal-50"}`}>
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">Current count</span>
            <p className="mt-2 text-7xl font-black tabular-nums">{count}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <CounterButton label="Decrease" onClick={decrement} variant="secondary" />
            <CounterButton label="Reset" onClick={reset} variant="secondary" />
            <CounterButton label="Increase" onClick={increment} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Task1
