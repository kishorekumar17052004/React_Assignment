import { useEffect, useState } from "react"

const ProductManagement = () => {
  const [productInput, setProductInput] = useState({
    productName: "",
    price: "",
    category: "",
    brand: "",
  })

  const [productData, setProductData] = useState(() => {
    try {
      const savedProducts = JSON.parse(localStorage.getItem("productdata"))
      return savedProducts ? savedProducts : []
    }
    catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("productdata", JSON.stringify(productData))
  }, [productData])

  const handleInput = (e) => {
    const { name, value } = e.target
    setProductInput({ ...productInput, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setProductData((prev) => [...prev, productInput])
    setProductInput({
      productName: "",
      price: "",
      category: "",
      brand: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Product Management System</h1>

        <form onSubmit={handleSubmit} className="mb-8 rounded bg-white p-6 shadow">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="productName"
              placeholder="Product name"
              value={productInput.productName}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="number"
              name="price"
              placeholder="Price"
              value={productInput.price}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="category"
              placeholder="Category"
              value={productInput.category}
              onChange={handleInput}
              required
            />
            <input
              className="rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              name="brand"
              placeholder="Brand"
              value={productInput.brand}
              onChange={handleInput}
              required
            />
          </div>

          <button className="mt-5 w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            Add Product
          </button>
        </form>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Product List</h2>

        {productData.length === 0 ? (
          <p className="rounded bg-white p-4 text-center text-gray-500 shadow">No Product Data Found</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {productData.map((product, index) => (
              <div key={index} className="rounded bg-white p-5 shadow">
                <h3 className="mb-3 text-xl font-bold text-gray-800">{product.productName}</h3>
                <p className="text-gray-600">Price: {product.price}</p>
                <p className="text-gray-600">Category: {product.category}</p>
                <p className="text-gray-600">Brand: {product.brand}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductManagement
