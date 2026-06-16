import { useState } from "react";

const Task5 = () => {
  const [skills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded bg-white p-6 shadow">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Skills
        </h1>

        <div className="space-y-3">
          {skills.map((skill, index) => (
            <p key={index} className="rounded bg-blue-50 p-3 text-gray-700">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task5;
