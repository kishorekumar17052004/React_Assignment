import { createContext, useEffect, useState } from "react";

const TodoContext = createContext()
export const TodoProvider = ({children})=>{
    const [todoInput , setTodoInput] = useState("")
    const [todos ,setTodos] = useState(()=>{
        const getdata = localStorage.getItem("todolist")
        return getdata ? JSON.parse(getdata) : []
    })
    const [edit , setEdit] = useState(null)
 // save data 
    useEffect(()=>{
      localStorage.setItem("todolist", JSON.stringify(todos))
    },[todos])
  
    // Add or Edit 

    const handleChange = ()=>{
        if(!todoInput.trim()){
            return
        }

        if(edit === null){
          setTodos([...todos,todoInput])

        }
        else{
            setTodos(todos.map((task ,id)=>(
                id === edit ? todoInput : task
            )))
            setEdit(null)
        }
        setTodoInput("")
    }

    // edit 
    const handleedit = (id)=>{
        setTodoInput(todos[id])
        setEdit(id)
    }

    const handledelete =  (id)=>{
        const remove = todos.filter((_, index)=> index !== id )
        setTodos(remove)
    }

    return(
        <TodoContext.Provider value={{todoInput , todos , edit ,setTodoInput ,handleChange ,handledelete ,handleedit}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext
