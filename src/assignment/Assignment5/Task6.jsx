import { useState } from "react";

const Task6 = () => {
  const [students] = useState([
    {
      id: 1,
      name: "Kishore",
      course: "React",
      city: "Chennai",
    },
    {
      id: 2,
      name: "Arun",
      course: "JavaScript",
      city: "Madurai",
    },
    {
      id: 3,
      name: "Vijay",
      course: "Node.js",
      city: "Coimbatore",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Student List
        </h1>

        <div className="grid gap-4 md:grid-cols-3">
          {students.map((student) => (
            <div key={student.id} className="rounded bg-white p-5 shadow">
              <h2 className="mb-3 text-xl font-bold text-gray-800">
                {student.name}
              </h2>
              <p className="text-gray-700">Course: {student.course}</p>
              <p className="text-gray-700">City: {student.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task6;
