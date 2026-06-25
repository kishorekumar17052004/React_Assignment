import { useNavigate } from "react-router-dom"


const DashBoard = () => {
    const navigate = useNavigate()
    const getdata = JSON.parse(localStorage.getItem("currentuser"))
    
    const handlelogout = (e)=>{
          e.preventDefault()
          localStorage.removeItem("isLogedIn")
          localStorage.removeItem("currentuser")
          navigate("../login")
    } 

  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
          {getdata?.userName?.charAt(0)?.toUpperCase()}
        </div>
        <h1 className="mb-3 text-3xl font-bold text-slate-900">Dashboard</h1>
    <h2 className="mb-2 text-xl font-semibold text-slate-700">Welcome {getdata?.userName}</h2>
    <p className="mb-8 rounded-md bg-slate-100 px-4 py-3 text-slate-600">{getdata?.userEmail}</p>
    <button
      onClick={handlelogout}
      className="w-full rounded-md bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
    >
      Logout
    </button>
    </div>
    </div>
    
    </>
  )
}

export default DashBoard
