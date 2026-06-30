import { useState } from "react"

const Task3 = () => {
   const employees = [
  { id: 1, name: "Kishore", department: "Frontend" },
  { id: 2, name: "Rahul", department: "Backend" },
  { id: 3, name: "Anitha", department: "HR" },
  { id: 4, name: "Sudhan", department: "Testing" },
  { id: 5, name: "Priya", department: "UI/UX" },
];
    const [search,setSearch  ] = useState("")
    const handlesearch = (e)=>{
        setSearch(e.target.value)
    }
    const searchData = employees.filter((employees)=>employees.name.toLowerCase().includes(search.toLowerCase()) )
  return (
    
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-xl rounded bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Employees Search</h1>

        <input
          type="text"
          value={search}
          onChange={handlesearch}
          placeholder="Search The employees"
          className="mb-6 w-full rounded border border-slate-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />

        <div className="space-y-3">
          { 
          searchData.length > 0 ? 
          searchData.map((employees)=>(
          <div key={employees.id} className="rounded border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-lg font-semibold text-slate-700">{employees.name}</h2>
              <h2 className="text-lg font-semibold text-slate-700">{employees.department}</h2>
          </div>
          )) : <p className="text-center text-slate-500">No employees Found</p>
         }
        </div>
      </div>
    </div>
  )
}

export default Task3
