import { useState } from "react"

const Task1 = () => {
    const Student = [ { id: 1, name: "Sudhan" },
    { id: 2, name: "Sudhakar" },
    { id: 3, name: "Kishore" },
    { id: 4, name: "Rahul" },
    { id: 5, name: "Anitha" },]
    const [search,setSearch  ] = useState("")
    const handlesearch = (e)=>{
        setSearch(e.target.value)
    }
    const searchData = Student.filter((Student)=>Student.name.toLowerCase().includes(search.toLowerCase()) )
  return (
    
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-xl rounded bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Student Search</h1>

        <input
          type="text"
          value={search}
          onChange={handlesearch}
          placeholder="Search The Student"
          className="mb-6 w-full rounded border border-slate-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />

        <div className="space-y-3">
          { 
          searchData.length > 0 ? 
          searchData.map((student)=>(
          <div key={student.id} className="rounded border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-lg font-semibold text-slate-700">{student.name}</h2>
          </div>
          )) : <p className="text-center text-slate-500">No Student Found</p>
         }
        </div>
      </div>
    </div>
  )
}

export default Task1
