import { useState } from "react";

const Task7 = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <button
          onClick={() =>
            setUser({
              name: "Kishore",
              city: "Chennai",
            })
          }
          className="rounded bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Load User
        </button>

        {user && (
          <div className="mt-6 rounded bg-slate-50 p-4 text-left">
            <h3 className="text-xl font-bold text-slate-800">{user.name}</h3>
            <h3 className="mt-1 text-slate-600">{user.city}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task7;
