import { useNavigate } from "react-router-dom";

const Assignment1 = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 mb-6 transition duration-300 hover:text-blue-700"
      >
        ← Back to Assignments
      </button>

      <h1 className="text-4xl font-bold mb-10">
        Assignment 1 - Tasks
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment1/task1")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Student Profile
        </button>

        <button
          onClick={() => navigate("/assignment1/task2")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Employee Card
        </button>

        <button
          onClick={() => navigate("/assignment1/task3")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Product Card
        </button>

        <button
          onClick={() => navigate("/assignment1/task4")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Movie Details
        </button>

        <button
          onClick={() => navigate("/assignment1/task5")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Company Info
        </button>

        <button
          onClick={() => navigate("/assignment1/task6")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Header
        </button>
      </div>
    </div>
  );
};

export default Assignment1;