import { useState } from "react";


const Object = () => {
     const [student, setStudent] = useState({
    name: "Kishore",
    age: 22,
    course: "MERN Stack",
  })
   const updateName = () => {
    setStudent({
      ...student,
      name: "Kumar",
    })
  }
  return (
    <div className="border p-5 rounded">
      <h2 className="text-2xl font-semibold mb-3">Object State</h2>

      <div className="bg-gray-100 p-3 rounded mb-4">
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
      </div>

      <button
        onClick={updateName}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Name
      </button>
    </div>
  )
}

export default Object
