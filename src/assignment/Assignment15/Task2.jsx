import { useEffect, useState } from "react"


const Task2 = () => {
    const [product , setProduct ] = useState([])
    const [search , setSearch ] = useState("")

    useEffect(()=>{
      const loadProducts = async () => {
        const getProduct = await fetch("https://dummyjson.com/products?limit=5")
        const productData = await getProduct.json()
        setProduct(productData.products)
      }

      loadProducts()
    },[])
    const handlesearch = (e)=>{
     setSearch(e.target.value)
    }
    const searchProduct =product.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()) || e.category.toLowerCase().includes(search.toLowerCase())  ) 

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Product Search</h1>

        <input
          type="text"
          value={search}
          onChange={handlesearch}
          placeholder="Search The Product"
          className="mb-6 w-full rounded border border-slate-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />

        <div className="grid gap-4 md:grid-cols-2">
          { 
          searchProduct.length > 0 ? 
          searchProduct.map((product)=>(
          <div key={product.id} className="rounded border border-slate-200 bg-slate-50 p-5">
              <h2 className="mb-2 text-xl font-semibold text-slate-800">{product.title}</h2>
              <p className="mb-3 text-sm text-slate-600">{product.description}</p>
              <p className="mb-2 text-sm font-medium text-teal-700">{product.category}</p>
              <p className="text-lg font-bold text-slate-900">${product.price}</p>
          </div>
          )) : <p className="col-span-full text-center text-slate-500">No Product Found</p>
         }
        </div>
      </div>
    </div>
  )
}

export default Task2
