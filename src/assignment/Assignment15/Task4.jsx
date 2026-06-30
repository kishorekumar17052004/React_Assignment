import { useState } from "react"

const Task4 = () => {
   const courses = [
  { id: 1, courseName: "React JS", duration: "3 Months" },
  { id: 2, courseName: "Java Full Stack", duration: "6 Months" },
  { id: 3, courseName: "Python", duration: "4 Months" },
  { id: 4, courseName: "MERN Stack", duration: "5 Months" },
  { id: 5, courseName: "Data Science", duration: "6 Months" },
];
    const [search,setSearch  ] = useState("")
    const handlesearch = (e)=>{
        setSearch(e.target.value)
    }
    const searchData = courses.filter((courses)=>courses.courseName.toLowerCase().includes(search.toLowerCase()) )
  return (
    
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-xl rounded bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Courses Search</h1>

        <input
          type="text"
          value={search}
          onChange={handlesearch}
          placeholder="Search The courses"
          className="mb-6 w-full rounded border border-slate-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />

        <div className="space-y-3">
          { 
          searchData.length > 0 ? 
          searchData.map((courses)=>(
          <div key={courses.id} className="rounded border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-lg font-semibold text-slate-700">{courses.courseName}</h2>
              <h2 className="text-lg font-semibold text-slate-700">{courses.duration}</h2>
          </div>
          )) : <p className="text-center text-slate-500">No courses Found</p>
         }
        </div>
      </div>
    </div>
  )
}

export default Task4
