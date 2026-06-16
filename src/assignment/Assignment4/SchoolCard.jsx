

const SchoolCard = ({schools = []}) => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {schools.map((school) => (
        <div key={school.id} className="rounded-lg bg-white p-5 shadow">
          <h2 className="mb-3 text-xl font-semibold text-blue-700">{school.name}</h2>
          <p className="text-gray-700">City: {school.city}</p>
          <p className="text-gray-700">Principal: {school.principal}</p>
          <p className="text-gray-700">Students: {school.students}</p>
          <p className="text-gray-700">Teachers: {school.teachers}</p>
        </div>
      ))}
    </div>
  )
}

export default SchoolCard
