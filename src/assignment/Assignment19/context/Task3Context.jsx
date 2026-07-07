import { createContext, useState } from "react";

const TaskContext = createContext()
export const TaskProvider = ({children})=>{
    const [theme , setTheme] = useState(false)
    const handleClick = ()=>{
          setTheme(!theme)
    }
    const Style = theme
      ? "rounded-lg bg-slate-900 p-6 text-white shadow-sm"
      : "rounded-lg bg-white p-6 text-slate-900 shadow-sm"

    return(
        <TaskContext.Provider value={{ handleClick, Style }}>
        {children}
        </TaskContext.Provider>
    )
}
export default TaskContext
