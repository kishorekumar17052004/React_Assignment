import { useState } from "react"

const StudentForm = () => {
    const [formData , setFormData]= useState({name:"",age:"",course:""} )
    const [student , setStudent]=useState([])
    const handlechnage = (e)=>{
      setFormData({...formData , [e.target.name]:e.target.value})
    
    }
    const handlesubmit = (e)=>{
       
        e.preventDefault()
        setStudent([...student,formData])
        
        setFormData({name:"",age:"",course:""})
     
    }

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-10">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h1 className="mb-2 text-2xl font-bold text-slate-800">
                Student Form
              </h1>
              <p className="mb-6 text-sm text-slate-500">
                Enter the student details below.
              </p>

              <form className="grid gap-4" onSubmit={handlesubmit}>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    type="text"
                    name="name"
                    placeholder="Enter student name"
                    onChange={handlechnage}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Age
                  </label>
                  <input
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    type="number"
                    name="age"
                    placeholder="Enter student age"
                    onChange={handlechnage}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Course
                  </label>
                  <input
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    type="text"
                    name="course"
                    placeholder="Enter course name"
                    onChange={handlechnage}
                  />
                </div>

                <button
                  className="mt-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
                  type="submit"
                >
                  Add Student
                </button>
              </form>
            </div>

            {student.length > 0 && (
              <section className="mt-8">
                <h2 className="mb-4 text-xl font-semibold text-slate-800">
                  Student List
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {student.map((e, i) => (
                    <div
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                      key={i + 1}
                    >
                      <h3 className="text-lg font-semibold text-blue-600">
                        {e.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">Age: {e.age}</p>
                      <p className="text-sm text-slate-600">Course: {e.course}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
    )
}

export default StudentForm
