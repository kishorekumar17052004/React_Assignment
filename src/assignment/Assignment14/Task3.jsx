import { useEffect, useState } from "react"


const Task3 = () => {
    const [count , setCount ]=useState(0)
      const handleclick = ()=>{
        setCount(count+1)
      }
      useEffect(()=>{
        document.title = `count : ${count}`
      },[count])

     
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded bg-white p-8 text-center shadow">
        <p className="mb-2 text-sm font-semibold uppercase text-blue-600">
          Assignment 14 - Task 3
        </p>
        <h1 className="mb-2 text-4xl font-bold text-slate-800">Count: {count}</h1>
        <p className="mb-6 text-slate-500">Document title updates with count</p>
        <button
          onClick={handleclick}
          className="rounded bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
        >
          Increase
        </button>
      </div>
    </div>
  )
}

export default Task3
