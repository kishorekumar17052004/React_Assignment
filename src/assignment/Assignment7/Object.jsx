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
    <>
    <div>
      <h2>Object State</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>

      <button onClick={updateName}>Update Name</button>
    </div>
    
    </>
  )
}

export default Object