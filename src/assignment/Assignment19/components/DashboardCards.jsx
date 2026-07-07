import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContextValue";

const DashboardCards = () => {
  const { totalStudents, totalCourses, totalPlacements } =
    useContext(DashboardContext);

  return (
    <div className="grid gap-5 sm:grid-cols-3">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Students
        </h3>
        <p className="mt-3 text-4xl font-bold text-teal-600">
          {totalStudents}
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Courses
        </h3>
        <p className="mt-3 text-4xl font-bold text-indigo-600">
          {totalCourses}
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Placements
        </h3>
        <p className="mt-3 text-4xl font-bold text-emerald-600">
          {totalPlacements}
        </p>
      </div>
    </div>
  );
};

export default DashboardCards;
