import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
     const navigate = useNavigate()

     const [registerData , setRegisterData]= useState({userName:"",userEmail:"",userPassword:""})
     const [storeData , setStoreData ]=useState(()=>{
     const getdata = JSON.parse(localStorage.getItem("userdata"))
         try{
            return getdata ? getdata : []
         }
         catch{
            return []
         }
     })


     useEffect(()=>{
        localStorage.setItem("userdata" , JSON.stringify(storeData))
     },[storeData])


    
     const handleinput = (e)=>{
        const {name,value} = e.target
         setRegisterData({...registerData , [name]:value})
     }
     const handlesubmit = (e)=>{
              e.preventDefault()
           setStoreData((prev)=>[...prev,registerData])
          
           setRegisterData({userName:"",userEmail:"",userPassword:""})
           navigate("login")
     }
  return (
   
    <>
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
          <form onSubmit={handlesubmit} className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-2 text-center text-3xl font-bold text-slate-900">Create Account</h1>
            <p className="mb-8 text-center text-sm text-slate-500">Register your details to continue</p>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                onChange={handleinput}
                name="userName"
                value={registerData.userName}
                required
                className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                onChange={handleinput}
                name="userEmail"
                value={registerData.userEmail}
                required
                className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                onChange={handleinput}
                name="userPassword"
                value={registerData.userPassword}
                required
                className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="Enter your password"
              />
            </div>

            <input
              type="submit"
              value="Register"
              className="w-full cursor-pointer rounded-md bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
            />
        
         </form>

    </div>
    </>
  )
}

export default Register
