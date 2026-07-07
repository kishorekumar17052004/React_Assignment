import { useContext } from "react"
import TaskContext from "./context/Task3Context"


const Sidebar = () => {
    const {handleClick,Style} = useContext(TaskContext)
  return (
   <div className={Style}>
    <h1 className="text-2xl font-bold">Sidebar</h1>
    <p className="mt-2 text-sm opacity-80">Same data shared everywhere.</p>
    <button
      onClick={handleClick}
      className="mt-5 rounded bg-teal-600 px-4 py-2 font-semibold text-white transition hover:bg-teal-700"
    >
      Change Theme
    </button>
   </div>
  )
}

export default Sidebar
