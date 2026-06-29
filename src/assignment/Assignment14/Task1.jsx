import { useEffect } from "react"


const Task1 = () => {
    useEffect(()=>{
     console.log("component loading...")
    },[])
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded bg-white p-8 text-center shadow">
        <p className="mb-2 text-sm font-semibold uppercase text-blue-600">
          Assignment 14 - Task 1
        </p>
        <h1 className="text-4xl font-bold text-slate-800">Welcome To React</h1>
      </div>
    </div>
  )
}

export default Task1
