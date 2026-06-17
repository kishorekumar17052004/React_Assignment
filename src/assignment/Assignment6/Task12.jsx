import { useState } from "react";

const Task12 = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <h2 className={status ? "mb-6 text-3xl font-bold text-green-600" : "mb-6 text-3xl font-bold text-red-600"}>
          {status ? "Active" : "Inactive"}
        </h2>

        <button
          onClick={() =>
            setStatus(true)
          }
          className="rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Change Status
        </button>
      </div>
    </div>
  );
};

export default Task12;
