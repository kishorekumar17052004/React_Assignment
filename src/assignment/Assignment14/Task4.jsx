import { useEffect, useState } from "react"


const Task4 = () => {
    const [showData , setShowData ]= useState([])

  useEffect(()=>{
    const getuser = async()=>{
       try {
      const response = await fetch("https://dummyjson.com/users") 
      const data = await response.json()
       setTimeout(() => {
        setShowData(data.users)
       }, 1000); 
       } catch (error) {
        console.log(error)
       } 
       
    }
    getuser()
  },[])
   
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 rounded bg-white p-6 shadow">
          <p className="mb-2 text-sm font-semibold uppercase text-blue-600">
            Assignment 14 - Task 4
          </p>
          <h1 className="text-3xl font-bold text-slate-800">User List</h1>
        </div>

        {showData.length === 0 ? (
          <div className="rounded bg-white p-8 text-center text-lg font-semibold text-slate-600 shadow">
            Loading...
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {showData.map((user)=>{
              return <div key={user.id} className="rounded bg-white p-5 shadow">
                <h2 className="mb-2 text-xl font-bold text-slate-800">{user.firstName}</h2>
                <p className="text-slate-600">Age: {user.age}</p>
                <p className="text-slate-600">Gender: {user.gender}</p>
              </div>
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Task4
