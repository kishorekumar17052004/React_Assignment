const UseCard = ({ name, role, bgcolor }) => {
  return (
    <div
      className="rounded-2xl p-6 text-white shadow-md transition-colors duration-300"
      style={{ backgroundColor: bgcolor || "#4f46e5" }}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
        {name.charAt(0)}
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="mt-1 text-sm text-white/80">{role}</p>
    </div>
  )
}

export default UseCard
