import CounterOne from "./CounterOne"
import CounterTwo from "./CounterTwo"

const Task1 = () => {
  return (
   <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">Custom Hook</p>
        <h1 className="text-4xl font-bold">useCount Hook</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CounterOne />
        <CounterTwo />
      </div>
    </div>
   </main>
  )
}

export default Task1
