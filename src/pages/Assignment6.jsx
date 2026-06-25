import { useNavigate } from "react-router-dom";

const Assignment6 = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <button onClick={() => navigate("/")} className="text-blue-500 mb-6 transition duration-300 hover:text-blue-700">
       ← Back to Assignments
      </button>

      <h1 className="text-4xl font-bold mb-10">Assignment 6 - Tasks</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment6/task1")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Counter Application
        </button>
        <button
          onClick={() => navigate("/assignment6/task2")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Student Name Update 
        </button>
         <button
          onClick={() => navigate("/assignment6/task3")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
        Age Increment
        </button>
         <button
          onClick={() => navigate("/assignment6/task4")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
         Login Status
        </button>
         <button
          onClick={() => navigate("/assignment6/task5")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Theme Switch
        </button>
         <button
          onClick={() => navigate("/assignment6/task6")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Show / Hide Content
        </button>
         <button
          onClick={() => navigate("/assignment6/task7")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          User Data Loading
        </button> <button
          onClick={() => navigate("/assignment6/task8")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Product Details
        </button> <button
          onClick={() => navigate("/assignment6/task9")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Mobile Number
        </button> <button
          onClick={() => navigate("/assignment6/task10")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
         Salary Update
        </button> <button
          onClick={() => navigate("/assignment6/task11")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
         Course Selection
        </button> <button
          onClick={() => navigate("/assignment6/task12")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Employee Status
        </button> <button
          onClick={() => navigate("/assignment6/task13")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Attendance Tracker
        </button> <button
          onClick={() => navigate("/assignment6/task14")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Profile Visibility
        </button> <button
          onClick={() => navigate("/assignment6/task15")}
          className="bg-green-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-green-700"
        >
          Bank Balance
        </button>
      </div>
    </div>
  );
};

export default Assignment6;