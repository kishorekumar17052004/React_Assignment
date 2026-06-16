import SchoolCard from "./SchoolCard";


const SchoolContainer = () => {
    const schools = [
    {
      id: 1,
      name: "ABC School",
      city: "Chennai",
      principal: "Ramesh",
      students: 2500,
      teachers: 120,
    },
    {
      id: 2,
      name: "Green Valley School",
      city: "Coimbatore",
      principal: "Suresh",
      students: 1800,
      teachers: 95,
    },
    {
      id: 3,
      name: "Sunrise School",
      city: "Madurai",
      principal: "Priya",
      students: 2200,
      teachers: 110,
    },
    {
      id: 4,
      name: "Modern Public School",
      city: "Salem",
      principal: "Kumar",
      students: 2000,
      teachers: 100,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">School Cards</h1>
      <SchoolCard schools={schools}/>
    </div>
  )
}

export default SchoolContainer
