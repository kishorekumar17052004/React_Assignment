import { useState } from "react";

const Task3 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded bg-white p-6 text-center shadow">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Counter: {count}
        </h1>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task3;
