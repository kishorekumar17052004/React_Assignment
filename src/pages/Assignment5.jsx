import { useNavigate } from "react-router-dom";

const Assignment5 = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <button onClick={() => navigate("/")} className="text-teal-600 mb-6 transition duration-300 hover:text-teal-700">
       ← Back to Assignments
      </button>

      <h1 className="text-4xl font-bold mb-10">Assignment 5 - Tasks</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment5/task1")}
          className="bg-teal-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Class Component + Life cycle methods 
        </button>
        <button
          onClick={() => navigate("/assignment5/task2")}
          className="bg-teal-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          UseState Syntax 
        </button>
         <button
          onClick={() => navigate("/assignment5/task3")}
          className="bg-teal-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
        Count Program
        </button>
         <button
          onClick={() => navigate("/assignment5/task4")}
          className="bg-teal-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
         Object Inside The useState 
        </button>
         <button
          onClick={() => navigate("/assignment5/task5")}
          className="bg-teal-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Array Method Using useState
        </button>
         <button
          onClick={() => navigate("/assignment5/task6")}
          className="bg-teal-600 text-white p-8 rounded transition duration-300 hover:scale-105 hover:bg-teal-700"
        >
          Array of Object and rendering using Map
        </button>
        
      </div>
    </div>
  );
};

export default Assignment5;

