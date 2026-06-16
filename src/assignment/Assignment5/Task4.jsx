import { useState } from "react";

const Task4 = () => {
  const [user] = useState({
    name: "Kishore",
    age: 22,
    course: "React",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded bg-white p-6 shadow">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          User Details
        </h1>

        <div className="space-y-3 text-lg text-gray-700">
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
          <h2>Course: {user.course}</h2>
        </div>
      </div>
    </div>
  );
};

export default Task4;
