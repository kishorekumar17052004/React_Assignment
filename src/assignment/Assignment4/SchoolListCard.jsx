
const SchoolListCard = ({schools}) => {
  return (
    <>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {schools.map((school) => (
        <div
          key={school.id}
          className="bg-white shadow-lg rounded-lg p-5"
        >
          <h2 className="text-xl font-bold mb-3">
            {school.name}
          </h2>

          <div className="flex flex-wrap gap-2">
            {school.courses.map((course, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default SchoolListCard