import SchoolListCard from "./SchoolListCard";


const SchoolList = () => {
      const schools = [
    {
      id: 1,
      name: "ABC School",
      courses: ["LKG", "UKG", "Primary"],
    },
    {
      id: 2,
      name: "Green Valley School",
      courses: ["LKG", "High School"],
    },
  ];
  return (
    <>
    <SchoolListCard schools={schools}/>
    </>
  )
}

export default SchoolList