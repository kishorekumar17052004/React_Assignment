

const SchoolCard1 = ({schools}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
      {schools.map((school) => (
        <div
          key={school.id}
          className="bg-white shadow-lg rounded-lg p-5"
        >
          <h2 className="text-xl font-bold">
            {school.name}
          </h2>

          <p>Principal: {school.principal}</p>
          <p>City: {school.city}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {school.sports.map((sport, index) => (
              <span
                key={index}
                className="bg-green-100 px-3 py-1 rounded-full"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default SchoolCard1