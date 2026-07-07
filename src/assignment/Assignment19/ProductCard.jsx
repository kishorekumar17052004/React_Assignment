import { useContext } from "react"
import ProductContext from "./context/ProductContext"

const ProductCard = () => {
    const {product} = useContext(ProductContext)
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Products</h1>
        <div className="grid gap-5 sm:grid-cols-2">
      {
        product.map((e)=>(
            <div key={e.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">{e.title}</h2>
                <p className="mt-3 text-2xl font-semibold text-teal-600">
                  Rs. {e.price}
                </p>
                
            </div>
        ))
      }
        </div>
      </div>
    </div>
    
  )
}

export default ProductCard
