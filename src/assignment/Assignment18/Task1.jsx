import { useRef } from "react"


const Task1 = () => {
  const inputRef = useRef("")
  const showDataRef = useRef("")

  const handleSubmit = () => {
    const Data = inputRef.current.value

    showDataRef.current.innerText = Data
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Show Input Value</h1>

        <div className="flex gap-3">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter the name"
            className="w-full rounded border border-slate-300 px-4 py-2 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
          <button
            onClick={handleSubmit}
            className="rounded bg-teal-600 px-5 py-2 font-medium text-white transition hover:bg-teal-700"
          >
            Submit
          </button>
        </div>

        <h2 ref={showDataRef} className="mt-6 min-h-8 text-xl font-semibold text-slate-700"></h2>
      </div>
    </div>
  )
}

export default Task1
