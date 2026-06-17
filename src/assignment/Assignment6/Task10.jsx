import { useState } from "react";

const Task10 = () => {
  const [salary, setSalary] = useState(25000);

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <h2 className="mb-6 text-3xl font-bold text-slate-800">Salary: Rs. {salary}</h2>

        <button
          onClick={() =>
            setSalary(salary + 5000)
          }
          className="rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Increase Salary
        </button>
      </div>
    </div>
  );
};

export default Task10;
