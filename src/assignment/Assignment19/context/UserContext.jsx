import { createContext, useState } from "react";

const UserContext = createContext()
export const UserProvider = ({children})=>{
    const [user ] = useState({
  name: "Kishorekumar A",
  email: "kishore@gmail.com",
  role: "Software Developer"
})

    return(
       <UserContext.Provider value={{user}}>
        {children}
       </UserContext.Provider>
    )
}
export default UserContext