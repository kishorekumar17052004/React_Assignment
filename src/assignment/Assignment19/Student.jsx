import { useContext } from "react"
import StudentContext from "./context/StudentContext"


const Student = () => {
    const {student} = useContext(StudentContext)
  return (
   <div className="min-h-screen bg-slate-100 p-6">
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Students</h1>
      <div className="grid gap-5 sm:grid-cols-2">
    {student.map((e)=>(
        <div key={e.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{e.name}</h2>
            <p className="mt-3 rounded bg-teal-50 px-4 py-2 font-semibold text-teal-700">
              {e.course}
            </p>
        </div>
        
    ))}
      </div>
    </div>
   </div>
  )
}

export default Student
