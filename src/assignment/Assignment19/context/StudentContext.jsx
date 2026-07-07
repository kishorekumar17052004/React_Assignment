import { createContext, useState } from "react";

const StudentContext = createContext()
export const StudentProvider = ({children})=>{

    const [student ] = useState([
 {
   id:1,
   name:"Kishore",
   course:"MERN"
 },
 {
   id:2,
   name:"Ravi",
   course:"React"
 }
])
    return(
       <StudentContext.Provider value={{student}}>
             {children}
       </StudentContext.Provider>
    )

}
export default StudentContext