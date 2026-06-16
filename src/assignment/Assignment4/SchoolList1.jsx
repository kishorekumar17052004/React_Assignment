import SchoolCard1 from "./SchoolCard1";
import SchoolStats from "./SchoolStats";


const SchoolList1 = () => {
     const schools = [
    {
      id: 1,
      name: "ABC School",
      principal: "Ramesh",
      city: "Chennai",
      students: 2500,
      teachers: 120,
      sports: ["Cricket", "Football", "Basketball"],
    },
    {
      id: 2,
      name: "Green Valley School",
      principal: "Suresh",
      city: "Coimbatore",
      students: 1800,
      teachers: 90,
      sports: ["Football", "Volleyball"],
    },
  ];

  const totalSchools = schools.length;

  const totalStudents = schools.reduce(
    (total, school) => total + school.students,
    0
  );

  const totalTeachers = schools.reduce(
    (total, school) => total + school.teachers,
    0
  );
  return (
   <>
   <SchoolStats
        totalSchools={totalSchools}
        totalStudents={totalStudents}
        totalTeachers={totalTeachers}
      />

      <SchoolCard1 schools={schools} />
   
   </>
  )
}

export default SchoolList1