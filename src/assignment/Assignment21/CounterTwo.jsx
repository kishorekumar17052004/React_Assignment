import useCount from "./hooks/useCount"

const CounterTwo = () => {
    const {count ,handleIncrement,handleDecrementt,handleReset } = useCount(10)
  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500">Counter Two</p>
      <h2 className="mb-6 text-6xl font-bold text-teal-700">{count}</h2>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleIncrement}
          className="rounded border border-teal-600 bg-teal-600 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-teal-700"
        >
          Increment
        </button>
        <button
          onClick={handleDecrementt}
          className="rounded border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition duration-300 hover:border-teal-600 hover:text-teal-700"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="rounded border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition duration-300 hover:border-red-500 hover:text-red-600"
        >
          Reset
        </button>
      </div>
    </section>
  )
}

export default CounterTwo
