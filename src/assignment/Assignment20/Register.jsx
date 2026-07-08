import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [registerInput , setRegisterInput] = useState({userName:"",userEmail:"",userPassword:""})
    const handleRegisterInput =(e)=>{
          const {name , value} = e.target;
          setRegisterInput({...registerInput,[name]:value})
    }
    const  handlesubmit = (e)=>{
          e.preventDefault()
          const existEmail = JSON.parse(localStorage.getItem("userdata"))
          if(existEmail){
            alert("This Email IS Already Exist")
            return
          }
          localStorage.setItem("userdata" , JSON.stringify(registerInput) )
          alert("Registered Successfully")
          navigate("login")
    }
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-950">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center">
        <div className="w-full rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">Assignment 20</p>
          <h1 className="mb-2 text-3xl font-bold">Create Account</h1>
          <p className="mb-8 text-sm leading-6 text-zinc-600">Register once, then use the same email and password to login.</p>

          <form onSubmit={handlesubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">Name</label>
              <input className="w-full rounded border border-zinc-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100" type="text" onChange={handleRegisterInput} value={registerInput.userName} placeholder="Enter the name" name="userName" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">Email</label>
              <input className="w-full rounded border border-zinc-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100" type="email" onChange={handleRegisterInput} value={registerInput.userEmail} placeholder="Enter the email" name="userEmail" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">Password</label>
              <input className="w-full rounded border border-zinc-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100" type="password" onChange={handleRegisterInput} value={registerInput.userPassword} placeholder="Enter the password" name="userPassword" required />
            </div>
            <input className="w-full cursor-pointer rounded bg-teal-600 px-4 py-3 font-semibold text-white transition hover:bg-teal-700" type="submit" value={"Register"} />
          </form>

          <button onClick={() => navigate("login")} className="mt-6 w-full rounded border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-amber-500 hover:text-amber-700">
            Already registered? Login
          </button>
        </div>
      </section>
    </main>
  )
}

export default Register
