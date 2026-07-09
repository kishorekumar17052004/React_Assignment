import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [product , setProduct] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState("")
    
   
     useEffect(()=>{
         const getData = async()=>{
        try {
            const response = await fetch(url)
            const data = await response.json()
            setProduct(data.products)
            
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
    getData()
        
     },[url])

  return {product,loading,error }
}

export default useFetch