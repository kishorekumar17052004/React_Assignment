import { useNavigate } from "react-router-dom";

const Assignment5 = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <button onClick={() => navigate("/")} className="text-blue-500 mb-6">
        Back to Assignments
      </button>

      <h1 className="text-4xl font-bold mb-10">Assignment 5 - Tasks</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment5/task1")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Class Component + Life cycle methods 
        </button>
        <button
          onClick={() => navigate("/assignment5/task2")}
          className="bg-green-600 text-white p-8 rounded"
        >
          UseState Syntax 
        </button>
         <button
          onClick={() => navigate("/assignment5/task3")}
          className="bg-green-600 text-white p-8 rounded"
        >
        Count Program
        </button>
         <button
          onClick={() => navigate("/assignment5/task4")}
          className="bg-green-600 text-white p-8 rounded"
        >
         Object Inside The useState 
        </button>
         <button
          onClick={() => navigate("/assignment5/task5")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Array Method Using useState
        </button>
         <button
          onClick={() => navigate("/assignment5/task6")}
          className="bg-green-600 text-white p-8 rounded"
        >
          Array of Object and rendering using Map
        </button>
        
      </div>
    </div>
  );
};

export default Assignment5;
