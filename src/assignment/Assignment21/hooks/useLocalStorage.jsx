import { useEffect, useState } from "react"

const useLocalStorage = (key , value) => {
    const [student , setStudent] = useState(()=>{
        try {
            const getdata = JSON.parse(localStorage.getItem(key))
            return getdata ? getdata : value
        } catch {
            return value 
        }
    })

    const handleChange = (e)=>{
       setStudent(e.target.value)
    }
    useEffect(()=>(
        localStorage.setItem(key , JSON.stringify(student))

    ),[key,student])
  return {student,handleChange}
}

export default useLocalStorage
