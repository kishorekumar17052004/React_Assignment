import { useNavigate } from "react-router-dom";

const Assignment7 = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <button
        onClick={() => navigate("/")}
        className="text-teal-600 mb-6 transition duration-300 hover:text-teal-700"
      >
       ← Back to Assignments
      </button>

      <h1 className="text-4xl font-bold mb-10">
        Assignment 7 - Tasks
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment7/task1")}
          className="bg-teal-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Array And Array of Object Update Method
        </button>
      </div>
    </div>
  );
};

export default Assignment7;

