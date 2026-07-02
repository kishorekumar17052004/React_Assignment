import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ProductContext from "./ProductContext"


const Product = () => {
    const navigate = useNavigate()
    const {
        product,
        filteredProducts,
        search,
        setSearch,
        category,
        setCategory,
        categories,
        sort,
        setSort,
    } = useContext(ProductContext)
  return (
   <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
    <div className="mx-auto max-w-7xl">
     <button
      onClick={() => navigate("/")}
      className="mb-8 font-medium text-teal-700 transition duration-300 hover:text-teal-900"
     >
      &larr; Back to Assignments
     </button>

     <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
       <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">
        Products
       </p>
       <h1 className="text-4xl font-bold text-slate-900">Product Explorer</h1>
       <p className="mt-2 text-slate-600">
        Showing {filteredProducts.length} of {product.length} products
       </p>
      </div>
     </div>

     <div className="mb-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
      <input
       type="text"
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
       placeholder="Search the products"
       className="w-full rounded border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
      />

      <select
       value={category}
       onChange={(e)=>setCategory(e.target.value)}
       className="w-full rounded border border-slate-300 px-4 py-3 capitalize outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
      >
       {
        categories.map((cat)=>(
         <option key={cat} value={cat}>{cat}</option>
        ))
       }
      </select>

      <select
       value={sort}
       onChange={(e)=>setSort(e.target.value)}
       className="w-full rounded border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
      >
       <option value="">Sort price</option>
       <option value="low">Low to High</option>
       <option value="high">High to Low</option>
      </select>
     </div>

     {filteredProducts.length === 0 ? (
      <div className="rounded-lg border border-slate-200 bg-white p-10 text-center shadow-sm">
       <h2 className="text-2xl font-bold text-slate-900">No products found</h2>
       <p className="mt-2 text-slate-600">Try another search or category.</p>
      </div>
     ) : (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {
        filteredProducts.map((item)=>(
         <div
          key={item.id}
          className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
         >
          <div className="flex aspect-square items-center justify-center bg-slate-100 p-4">
           <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-contain"
           />
          </div>

          <div className="p-5">
           <p className="mb-2 text-sm font-semibold capitalize text-teal-700">
            {item.category}
           </p>
           <h3 className="line-clamp-2 min-h-14 text-lg font-bold text-slate-900">
            {item.title}
           </h3>
           <div className="mt-4 flex items-center justify-between">
            <p className="text-2xl font-bold text-slate-900">${item.price}</p>
            <p className="rounded bg-amber-100 px-2 py-1 text-sm font-semibold text-amber-800">
             {item.rating}
            </p>
           </div>
          </div>
         </div>
        ))
       }
      </div>
     )}
    </div>
   </div>
  )
}

export default Product
