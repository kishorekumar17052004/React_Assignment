

const SchoolStats = ({  totalSchools,
  totalStudents,
  totalTeachers,}) => {
  return (
    <>
     <div className="grid grid-cols-3 gap-5 mb-5">
      <div className="bg-white shadow p-4 rounded">
        Schools: {totalSchools}
      </div>

      <div className="bg-white shadow p-4 rounded">
        Students: {totalStudents}
      </div>

      <div className="bg-white shadow p-4 rounded">
        Teachers: {totalTeachers}
      </div>
    </div>
    
    </>
  )
}

export default SchoolStats