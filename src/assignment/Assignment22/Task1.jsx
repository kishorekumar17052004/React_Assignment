import { useCallback, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

const Task1 = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [isDark, setIsDark] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error("Unable to fetch products")
        }

        const data = await response.json()
        setProducts(data.products ?? [])
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(requestError.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    fetchProducts()

    return () => controller.abort()
  }, [])

  const filteredProducts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase()

    if (!searchTerm) return products

    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm),
    )
  }, [products, search])

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark((currentTheme) => !currentTheme)
  }, [])

  return (
    <main
      className={`min-h-screen px-6 py-10 transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <button
              type="button"
              onClick={() => navigate("/assignment22")}
              className="mb-6 text-sm font-semibold text-teal-600 transition hover:text-teal-500"
            >
              &larr; Back to Assignment 22
            </button>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-500">
              useMemo Product Search
            </p>
            <h1 className="text-3xl font-bold sm:text-4xl">Find your product</h1>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white shadow transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {isDark ? "Light Theme" : "Dark Theme"}
          </button>
        </div>

        <div
          className={`mb-8 rounded-xl border p-4 shadow-sm ${
            isDark ? "border-zinc-700 bg-zinc-900" : "border-zinc-200 bg-white"
          }`}
        >
          <label htmlFor="product-search" className="mb-2 block text-sm font-semibold">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            value={search}
            placeholder="Search by product name..."
            onChange={handleSearch}
            className={`w-full rounded-lg border px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 ${
              isDark
                ? "border-zinc-700 bg-zinc-800 placeholder:text-zinc-500"
                : "border-zinc-300 bg-zinc-50 placeholder:text-zinc-400"
            }`}
          />
        </div>

        {isLoading && (
          <div className="py-16 text-center text-lg font-semibold text-teal-600">
            Loading products...
          </div>
        )}

        {!isLoading && error && (
          <div className="rounded-xl border border-red-300 bg-red-50 p-8 text-center text-red-700">
            {error}. Please refresh and try again.
          </div>
        )}

        {!isLoading && !error && (
          <>
            <p className="mb-5 text-sm text-zinc-500" aria-live="polite">
              {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"} found
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className={`overflow-hidden rounded-xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isDark ? "border-zinc-700 bg-zinc-900" : "border-zinc-200 bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-48 items-center justify-center p-5 ${
                        isDark ? "bg-zinc-800" : "bg-zinc-50"
                      }`}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="p-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-500">
                        {product.category}
                      </p>
                      <h2 className="mb-4 min-h-12 text-lg font-bold">{product.title}</h2>
                      <p className="text-2xl font-bold text-teal-600">${product.price}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div
                className={`rounded-xl border border-dashed p-12 text-center ${
                  isDark ? "border-zinc-700 bg-zinc-900" : "border-zinc-300 bg-white"
                }`}
              >
                <p className="text-lg font-semibold">No products found</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Try searching with a different product name.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}

export default Task1
