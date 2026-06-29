import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8" >
      <h1 className="text-4xl font-bold text-center mb-10">
        React Assignments
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/assignment1")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 1
        </button>

        <button
          onClick={() => navigate("/assignment2")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 2
        </button>

        <button
          onClick={() => navigate("/assignment3")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 3
        </button>

         <button
          onClick={() => navigate("/assignment4")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 4
        </button>

         <button
          onClick={() => navigate("/assignment5")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 5
        </button>

         <button
          onClick={() => navigate("/assignment6")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 6
        </button>

         <button
          onClick={() => navigate("/assignment7")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 7
        </button>
        <button
          onClick={() => navigate("/assignment8")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 8
        </button>
         <button
          onClick={() => navigate("/assignment9")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 9
        </button>
        <button
          onClick={() => navigate("/assignment10")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 10
        </button>
         <button
          onClick={() => navigate("/assignment11")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 11
        </button>
        <button
          onClick={() => navigate("/assignment12")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 12
        </button>
        <button
          onClick={() => navigate("/assignment13")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 13
        </button>
        <button
          onClick={() => navigate("/assignment14")}
          className="bg-blue-600 text-white p-8 rounded text-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Assignment 14
        </button>

      </div>
    </div>
  );
};

export default Home;
