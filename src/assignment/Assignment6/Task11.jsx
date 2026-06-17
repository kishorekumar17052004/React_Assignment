import { useState } from "react";

const Task11 = () => {
  const [course, setCourse] = useState("MERN");

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <p className="mb-2 text-sm font-semibold uppercase text-blue-600">Selected Course</p>
        <h2 className="mb-6 text-3xl font-bold text-slate-800">{course}</h2>

        <button
          onClick={() =>
            setCourse("React Native")
          }
          className="rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Change Course
        </button>
      </div>
    </div>
  );
};

export default Task11;
