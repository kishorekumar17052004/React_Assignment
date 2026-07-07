import { createContext, useState } from "react";

const ProductContext = createContext()

export const ProductProvider1 = ({children})=>{
    const [product] = useState([
  {
    id:1,
    title:"Laptop",
    price:50000
  },
  {
    id:2,
    title:"Mobile",
    price:20000
  }
])

    return(
        <>
        <ProductContext.Provider value={{product}}>
            {children}
        </ProductContext.Provider>
         
        </>
        
    )
}
export default ProductContext