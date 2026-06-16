import { useState } from "react";

const Task2 = () => {
  const [value, setValue] = useState("hello");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded bg-white p-6 text-center shadow">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">{value}</h1>

        <button
          onClick={() => setValue("hi")}
          className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Change Text
        </button>
      </div>
    </div>
  );
};

export default Task2;
