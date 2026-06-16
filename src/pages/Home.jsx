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
          className="bg-blue-600 text-white p-8 rounded text-xl"
        >
          Assignment 1
        </button>

        <button
          onClick={() => navigate("/assignment2")}
          className="bg-blue-600 text-white p-8 rounded text-xl"
        >
          Assignment 2
        </button>

        <button
          onClick={() => navigate("/assignment3")}
          className="bg-blue-600 text-white p-8 rounded text-xl"
        >
          Assignment 3
        </button>
         <button
          onClick={() => navigate("/assignment4")}
          className="bg-blue-600 text-white p-8 rounded text-xl"
        >
          Assignment 4
        </button>
         <button
          onClick={() => navigate("/assignment5")}
          className="bg-blue-600 text-white p-8 rounded text-xl"
        >
          Assignment 5
        </button>
      </div>
    </div>
  );
};

export default Home;