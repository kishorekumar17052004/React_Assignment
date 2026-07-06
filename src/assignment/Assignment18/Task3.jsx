import { useRef } from "react";

const Task3 = () => {

  const boxRef = useRef(null);

  const toggleProcess = () => {
    if (boxRef.current.style.display === "none") {
      boxRef.current.style.display = "block";
    } else {
      boxRef.current.style.display = "none";
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded bg-white p-6 text-center shadow">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Toggle Content</h1>

        <div
          ref={boxRef}
          className="mb-6 rounded border border-teal-200 bg-teal-50 p-6 text-lg font-medium text-teal-800"
        >
          This is the process/content.
        </div>

        <button
          onClick={toggleProcess}
          className="rounded bg-teal-600 px-6 py-2 font-medium text-white transition hover:bg-teal-700"
        >
          Toggle
        </button>
      </div>
    </div>
  );
}
export default Task3
