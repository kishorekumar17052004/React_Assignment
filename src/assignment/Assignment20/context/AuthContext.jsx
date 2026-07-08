import { createContext, useState } from "react";

const AuthContext = createContext()
export const AuthProvider = ({ children })=>{
    const [ user , setUser] = useState(() => {
      return JSON.parse(localStorage.getItem("currentuser")) || null
    })

    const login =(userdata)=>{
         localStorage.setItem("currentuser" , JSON.stringify(userdata))
         setUser(userdata)
    }

    const logout = ()=>{
        localStorage.removeItem("currentuser")
        setUser(null)
    }

    return(
      <AuthContext.Provider value={{ user, login ,logout}}>
        {children}
      </AuthContext.Provider>
    )
}
export default AuthContext
