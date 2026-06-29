import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate();
    const getdata = JSON.parse(localStorage.getItem("userdata"))
    
    const [loginData , setLoginData ]=useState({loginEmail:"",loginPassword:""})
     const handlelogin = (e)=>{
         const {name ,value}=e.target;
         setLoginData({...loginData,[name]:value})

     }
     const handlesubmit = (e)=>{
        e.preventDefault()
        const user = getdata.find((e)=>{
            return e.userEmail === loginData.loginEmail && e.userPassword === loginData.loginPassword
        })
        if(user){
          localStorage.setItem("isLogedIn" , "True")
          localStorage.setItem("currentuser", JSON.stringify(user))
          navigate("../dashboard")
        }
        else{
            alert("Email or Password is Worng")
        }

     }
     
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
        <form onSubmit={handlesubmit} className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
           <h1 className="mb-2 text-center text-3xl font-bold text-slate-900">Welcome Back</h1>
           <p className="mb-8 text-center text-sm text-slate-500">Login with your registered account</p>

           <div className="mb-5">
             <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
             <input
               type="email"
               onChange={handlelogin}
               name="loginEmail"
               value={loginData.loginEmail}
               required
               className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
               placeholder="Enter your email"
             />
           </div>

           <div className="mb-6">
             <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
             <input
               type="password"
               onChange={handlelogin}
               name="loginPassword"
               value={loginData.loginPassword}
               required
               className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
               placeholder="Enter your password"
             />
           </div>

           <input
             type="submit"
             value="Login"
             className="w-full cursor-pointer rounded-md bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
           />

        </form>
    </div>
    </>
  )
}

export default Login
