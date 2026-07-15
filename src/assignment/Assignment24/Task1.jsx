import { useReducer } from "react"
import { useNavigate } from "react-router-dom"

const initialValue = 0

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return Math.max(0,state - 1)
    case "reset":
      return initialValue
    default:
      return state
  }
}

const Task1 = () => {
  const navigate = useNavigate()
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-950">
      <div className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => navigate("/assignment24")}
          className="mb-8 text-sm font-semibold text-teal-700 transition hover:text-teal-600"
        >
          &larr; Back to Assignment 24
        </button>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-700">
            useReducer Demo
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">Reducer counter</h1>

          <div className="my-10 rounded-2xl bg-teal-50 p-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-700">
              Current count
            </span>
            <p className="mt-2 text-7xl font-black tabular-nums">{count}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => dispatch({ type: "decrement" })}
              className="rounded-lg border border-teal-600 px-5 py-3 font-semibold text-teal-700 transition hover:bg-teal-50"
            >
              Decrement
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: "reset" })}
              className="rounded-lg border border-teal-600 px-5 py-3 font-semibold text-teal-700 transition hover:bg-teal-50"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: "increment" })}
              className="rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Increment
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Task1
