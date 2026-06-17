import { useState } from "react";

const Task6 = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <button
          onClick={() => setShow(!show)}
          className="rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Toggle Content
        </button>

        {show && (
          <p className="mt-6 rounded bg-blue-50 p-4 text-lg font-medium text-blue-800">
            React useState Example
          </p>
        )}
      </div>
    </div>
  );
};

export default Task6;
