import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContextValue";

const Sidebar1 = () => {
  const { totalStudents, totalCourses, totalPlacements } =
    useContext(DashboardContext);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Sidebar</h2>

      <div className="mt-4 space-y-3 text-slate-700">
        <p className="flex justify-between border-b border-slate-100 pb-2">
          <span>Students</span>
          <span className="font-semibold text-slate-900">{totalStudents}</span>
        </p>
        <p className="flex justify-between border-b border-slate-100 pb-2">
          <span>Courses</span>
          <span className="font-semibold text-slate-900">{totalCourses}</span>
        </p>
        <p className="flex justify-between">
          <span>Placements</span>
          <span className="font-semibold text-slate-900">{totalPlacements}</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar1;
