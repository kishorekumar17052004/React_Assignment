import { useEffect, useState } from "react"


const Task6 = () => {
    const [time , setTime  ] = useState(0)
    useEffect(()=>{
       const timer = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString()
         setTime(currentTime)
       }, 1000);

       return ()=>{
        clearInterval(timer)
       }
    },[])
  return (
   <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
    <div className="w-full max-w-md rounded bg-white p-8 text-center shadow">
      <p className="mb-2 text-sm font-semibold uppercase text-blue-600">
        Assignment 14 - Task 6
      </p>
      <h1 className="text-4xl font-bold text-slate-800">Time: {time}</h1>
    </div>
   </div>
  )
}

export default Task6
