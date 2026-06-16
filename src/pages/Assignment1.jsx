import { useNavigate } from "react-router-dom";

const Assignment1 = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 mb-6"
      >
        ← Back to Assignments
      </button>

      <h1 className="text-4xl font-bold mb-10">
        Assignment 1 - Tasks
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment1/task1")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Student Profile
        </button>

        <button
          onClick={() => navigate("/assignment1/task2")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Employee Card
        </button>

        <button
          onClick={() => navigate("/assignment1/task3")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Product Card
        </button>

        <button
          onClick={() => navigate("/assignment1/task4")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Movie Details
        </button>

        <button
          onClick={() => navigate("/assignment1/task5")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Company Info
        </button>

        <button
          onClick={() => navigate("/assignment1/task6")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Header
        </button>
      </div>
    </div>
  );
};

export default Assignment1;