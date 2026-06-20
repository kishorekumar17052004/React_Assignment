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
    <div>
      <h2>Array of Object State</h2>

      {employees.map((emp) => (
        <div key={emp.id}>
          <p>Name: {emp.name}</p>
          <p>Department: {emp.department}</p>
          <hr />
        </div>
      ))}

      <button onClick={updateEmployee}>
        Update Employee
      </button>
    </div>
  );
}

export default ArrayObj