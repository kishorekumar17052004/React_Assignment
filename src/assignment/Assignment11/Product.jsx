import { useState } from "react"

const initialProductData = {
  productName: "",
  price: "",
  category: "",
  brand: "",
}

const Product = () => {
  const [productData, setProductData] = useState(initialProductData)
  const [submittedProduct, setSubmittedProduct] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductData({ ...productData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedProduct({ ...productData })
    setProductData(initialProductData)
  }

  const inputStyle =
    "mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-orange-50 to-amber-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <section className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-orange-100/70">
          <header className="bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-8 text-white sm:px-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-100">
              Assignment 11
            </p>
            <h1 className="text-3xl font-bold">Product Management Form</h1>
            <p className="mt-2 text-orange-100">
              Enter the product information to view its details.
            </p>
          </header>

          <form
            className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10"
            onSubmit={handleSubmit}
          >
            <label className="text-sm font-semibold text-slate-700">
              Product Name
              <input
                className={inputStyle}
                type="text"
                name="productName"
                value={productData.productName}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Price
              <input
                className={inputStyle}
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                placeholder="Enter product price"
                min="0"
                step="0.01"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Category
              <input
                className={inputStyle}
                type="text"
                name="category"
                value={productData.category}
                onChange={handleChange}
                placeholder="Enter product category"
                required
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Brand
              <input
                className={inputStyle}
                type="text"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
                placeholder="Enter brand name"
                required
              />
            </label>

            <button
              className="mt-2 rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:col-span-2"
              type="submit"
            >
              Show Product Details
            </button>
          </form>
        </section>

        {submittedProduct && (
          <section className="mx-auto mt-10 max-w-md overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-300">
                Product Details
              </p>
              <h2 className="mt-2 text-2xl font-bold">{submittedProduct.productName}</h2>
              <p className="mt-1 text-slate-300">by {submittedProduct.brand}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6">
              <div className="rounded-2xl bg-orange-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">Price</p>
                <p className="mt-1 text-xl font-bold text-slate-800">
                  ₹{Number(submittedProduct.price).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Category</p>
                <p className="mt-1 font-bold text-slate-800">{submittedProduct.category}</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default Product
