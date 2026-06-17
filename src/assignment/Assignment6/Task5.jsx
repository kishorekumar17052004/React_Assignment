import { useState } from "react";

const Task5 = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "min-h-screen bg-slate-900 p-6 flex items-center justify-center" : "min-h-screen bg-slate-100 p-6 flex items-center justify-center"}>
      <div className={theme ? "w-full max-w-md rounded-lg bg-slate-800 p-8 text-center shadow" : "w-full max-w-md rounded-lg bg-white p-8 text-center shadow"}>
        <h2 className={theme ? "mb-6 text-3xl font-bold text-white" : "mb-6 text-3xl font-bold text-slate-800"}>
          {theme ? "Dark Mode" : "Light Mode"}
        </h2>

        <button
          onClick={() => setTheme(!theme)}
          className="rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Task5;
