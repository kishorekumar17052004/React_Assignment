import useFetch from "./hooks/usefetch"


const Task3 = () => {
    const {product,loading,error } = useFetch("https://dummyjson.com/products")
    if(loading){
        return (
          <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 text-zinc-950">
            <h2 className="text-2xl font-semibold text-teal-700">Loading products...</h2>
          </main>
        )

    }
    if(error){
        return (
          <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 text-zinc-950">
            <h2 className="rounded-lg border border-red-200 bg-white p-6 text-lg font-semibold text-red-600 shadow-sm">{error}</h2>
          </main>
        )
    }
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">Custom Hook</p>
          <h1 className="text-4xl font-bold">useFetch Hook</h1>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {product.map((product)=>(
           <article
            key={product.id}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
           >
            <p className="mb-3 inline-flex rounded bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              {product.category}
            </p>
            <h2 className="mb-4 text-xl font-bold text-zinc-950">{product.title}</h2>
            <p className="text-2xl font-semibold text-zinc-800">${product.price}</p>

           </article>
        ))}
        </div>
      </div>
    </main>
  )
}

export default Task3
