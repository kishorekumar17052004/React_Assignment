import DashboardCards from "./components/DashboardCards"
import Hero from "./components/Hero"
import Sidebar1 from "./components/Sidebar1"
import DashboardProvider from "./context/DashboardContext"


const Task5 = () => {
  return (
   <DashboardProvider>
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <Hero/>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_280px]">
          <DashboardCards/>
          <Sidebar1/>
        </div>
      </div>
    </div>
   </DashboardProvider>
  )
}

export default Task5
