import { useState } from "react";


const ArrayObj = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Kishore",
      department: "Frontend",
    },
    {
      id: 2,
      name: "Ravi",
      department: "Backend",
    },
  ]);

  const updateEmployee = () => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === 1
        ? { ...emp, name: "Kishorekumar" }
        : emp
    );

    setEmployees(updatedEmployees);
  };

  return (
    <div className="border p-5 rounded">
      <h2 className="text-2xl font-semibold mb-3">Array of Object State</h2>

      <div className="space-y-3 mb-4">
        {employees.map((emp) => (
          <div key={emp.id} className="bg-gray-100 p-3 rounded">
            <p>Name: {emp.name}</p>
            <p>Department: {emp.department}</p>
          </div>
        ))}
      </div>

      <button
        onClick={updateEmployee}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Employee
      </button>
    </div>
  );
}

export default ArrayObj
