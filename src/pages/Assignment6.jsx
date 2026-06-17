import { useNavigate } from "react-router-dom";

const Assignment6 = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <button onClick={() => navigate("/")} className="text-blue-500 mb-6">
        Back to Assignments
      </button>

      <h1 className="text-4xl font-bold mb-10">Assignment 6 - Tasks</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment6/task1")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Counter Application
        </button>
        <button
          onClick={() => navigate("/assignment6/task2")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Student Name Update 
        </button>
         <button
          onClick={() => navigate("/assignment6/task3")}
          className="bg-green-600 text-white p-8 rounded"
        >
        Age Increment
        </button>
         <button
          onClick={() => navigate("/assignment6/task4")}
          className="bg-green-600 text-white p-8 rounded"
        >
         Login Status
        </button>
         <button
          onClick={() => navigate("/assignment6/task5")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Theme Switch
        </button>
         <button
          onClick={() => navigate("/assignment6/task6")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Show / Hide Content
        </button>
         <button
          onClick={() => navigate("/assignment6/task7")}
          className="bg-green-600 text-white p-8 rounded"
        >
          User Data Loading
        </button> <button
          onClick={() => navigate("/assignment6/task8")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Product Details
        </button> <button
          onClick={() => navigate("/assignment6/task9")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Mobile Number
        </button> <button
          onClick={() => navigate("/assignment6/task10")}
          className="bg-green-600 text-white p-8 rounded"
        >
         Salary Update
        </button> <button
          onClick={() => navigate("/assignment6/task11")}
          className="bg-green-600 text-white p-8 rounded"
        >
         Course Selection
        </button> <button
          onClick={() => navigate("/assignment6/task12")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Employee Status
        </button> <button
          onClick={() => navigate("/assignment6/task13")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Attendance Tracker
        </button> <button
          onClick={() => navigate("/assignment6/task14")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Profile Visibility
        </button> <button
          onClick={() => navigate("/assignment6/task15")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Bank Balance
        </button>
      </div>
    </div>
  );
};

export default Assignment6;