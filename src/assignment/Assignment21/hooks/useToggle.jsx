import { useState } from "react"


const useToggle = (initialvalue=false) => {
    const [toggle , setToggle] = useState(initialvalue)

    const handleToggle = ()=>{
        setToggle((prev)=>!prev)
    }
  return {toggle,handleToggle}
}

export default useToggle
