import { useContext } from "react"
import UserContext from "./context/UserContext"



const UserProvider = () => {
    const {user} = useContext(UserContext)
  return (
   <div className="min-h-screen bg-slate-100 p-6">
     <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-sm">
       <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
         User Details
       </p>
       <h1 className="mt-2 text-2xl font-bold text-slate-900">
         {user.name}
       </h1>
       <div className="mt-5 space-y-3 text-slate-700">
         <p className="rounded bg-slate-100 px-4 py-3">
           Email : <span className="font-semibold">{user.email}</span>
         </p>
         <p className="rounded bg-slate-100 px-4 py-3">
           Role : <span className="font-semibold">{user.role}</span>
         </p>
       </div>
     </div>
   </div>
  )
}

export default UserProvider
