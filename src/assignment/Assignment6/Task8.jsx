import { useState } from "react";

const Task8 = () => {
  const [product, setProduct] = useState();

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <button
          onClick={() =>
            setProduct({
              name: "Laptop",
              price: 50000,
            })
          }
          className="rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Load Product
        </button>

        {product && (
          <div className="mt-6 rounded bg-slate-50 p-4 text-left">
            <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
            <h3 className="mt-1 text-slate-600">Price: Rs. {product.price}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task8;
