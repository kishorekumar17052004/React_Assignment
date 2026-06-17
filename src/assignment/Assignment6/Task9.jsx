import { useState } from "react";

const Task9 = () => {
  const [mobile, setMobile] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <button
          onClick={() =>
            setMobile(9876543210)
          }
          className="rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Show Mobile
        </button>

        <h2 className="mt-6 text-3xl font-bold text-slate-800">
          {mobile || "Mobile number"}
        </h2>
      </div>
    </div>
  );
};

export default Task9;
