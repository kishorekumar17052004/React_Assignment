import Card from "./Card"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { TaskProvider } from "./context/Task3Context"


const Task3 = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          <Header/>
          <Sidebar/>
          <Card/>
        </div>
      </div>
    </TaskProvider>
  )
}

export default Task3
