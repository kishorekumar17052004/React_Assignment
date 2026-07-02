import { createContext, useEffect, useState } from "react";

const ProductContext = createContext()
export const ProductProvider = ({children})=>{

    const [product , setProduct]= useState([])
    const[search , setSearch  ] = useState("")
    const[category , setCategory] = useState("All Products")
    const[sort , setSort]=useState("")
     
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch("https://dummyjson.com/products")
                const data = await response.json()
                setProduct(data.products)   
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    },[])
   
    const categories = ["All Products", ...new Set(product.map((item)=>item.category))]
 


    const filteredProducts = product.filter((item)=>{

        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === "All Products" || item.category === category

        return matchesSearch && matchesCategory
    }).sort((a,b)=>{
        if (sort === "low") return a.price - b.price
        if (sort === "high") return b.price - a.price
        return 0
    })


return(
    <ProductContext.Provider value={{
        product,
        filteredProducts,
        search,
        setSearch,
        category,
        setCategory,
        categories,
        sort,
        setSort,
    }}>
        {children}
    </ProductContext.Provider>
)
}
export default ProductContext
