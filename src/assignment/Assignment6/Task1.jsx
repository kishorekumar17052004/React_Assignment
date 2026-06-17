import { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <h2 className="mb-6 text-3xl font-bold text-slate-800">Count: {count}</h2>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded bg-green-600 px-5 py-2 font-medium text-white hover:bg-green-700"
          >
            Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="rounded bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
          >
            Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded bg-slate-700 px-5 py-2 font-medium text-white hover:bg-slate-800"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task1;
