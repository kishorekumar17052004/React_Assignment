import { useState } from "react";

const Task14 = () => {
  const [showProfile, setShowProfile] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <button
          onClick={() =>
            setShowProfile(true)
          }
          className="rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Show Profile
        </button>

        {showProfile && (
          <div className="mt-6 rounded bg-slate-50 p-4 text-left">
            <h3 className="font-semibold text-slate-800">Name: Kishore</h3>
            <h3 className="mt-2 text-slate-600">Course: MERN Stack</h3>
            <h3 className="mt-2 text-slate-600">City: Chennai</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task14;
