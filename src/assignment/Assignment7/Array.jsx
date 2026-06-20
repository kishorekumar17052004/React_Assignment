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
    <div>
      <h2>Array State</h2>

      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}

      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}

export default Array