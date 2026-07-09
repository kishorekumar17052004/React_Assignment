import { useState } from "react"


const useCount = (initialvalue=0) => {
    const [count , setCount] = useState(initialvalue)

    const handleIncrement = ()=>setCount((prev)=>prev+1)
    const handleDecrementt = ()=>setCount((prev)=>prev-1)
    const handleReset = ()=>setCount(0)

  return {count ,handleIncrement,handleDecrementt,handleReset } 
}

export default useCount