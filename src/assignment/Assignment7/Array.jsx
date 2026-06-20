import { useState } from "react";


const Array = () => {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
  ]);

  const addSkill = () => {
    setSkills([...skills, "React"]);
  };

  return (
    <div className="border p-5 rounded">
      <h2 className="text-2xl font-semibold mb-3">Array State</h2>

      <ul className="list-disc pl-6 mb-4">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button
        onClick={addSkill}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Skill
      </button>
    </div>
  );
}

export default Array
