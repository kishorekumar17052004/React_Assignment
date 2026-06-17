import { useState } from "react";

const Task13 = () => {
  const [attendance, setAttendance] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
        <h2 className="mb-6 text-3xl font-bold text-slate-800">
          Attendance: {attendance}
        </h2>

        <button
          onClick={() =>
            setAttendance(attendance + 1)
          }
          className="rounded bg-green-600 px-5 py-2 font-medium text-white hover:bg-green-700"
        >
          Present
        </button>
      </div>
    </div>
  );
};

export default Task13;
