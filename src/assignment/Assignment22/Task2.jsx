import { useMemo, useState } from "react"

const initialCart = [
  { id: 1, name: "Laptop Bag", price: 1200, quantity: 1 },
  { id: 2, name: "Wireless Mouse", price: 750, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1400, quantity: 1 },
]

const Task2 = () => {
  const [cart, setCart] = useState(initialCart)
  const [darkTheme, setDarkTheme] = useState(false)

  const grandTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [cart])

  const changeQuantity = (id, quantity) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    )
  }

  return (
    <div className={`min-h-screen p-8 transition ${darkTheme ? "bg-zinc-900 text-white" : "bg-zinc-50 text-zinc-900"}`}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <button
            onClick={() => setDarkTheme((theme) => !theme)}
            className="rounded bg-teal-600 px-4 py-2 font-medium text-white"
          >
            Change Theme
          </button>
        </div>

        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className={`grid gap-4 rounded-lg p-5 shadow md:grid-cols-4 md:items-center ${darkTheme ? "bg-zinc-800" : "bg-white"}`}>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(event) => changeQuantity(item.id, Number(event.target.value))}
                className="w-20 rounded border border-zinc-400 bg-transparent px-3 py-2"
              />
              <p className="font-semibold">₹{item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-teal-600 p-6 text-right text-2xl font-bold text-white">
          Grand Total: ₹{grandTotal}
        </div>
      </div>
    </div>
  )
}

export default Task2
