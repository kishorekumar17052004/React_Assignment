import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContextValue";

const Hero = () => {
  const { totalStudents, totalCourses, totalPlacements } =
    useContext(DashboardContext);

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
        Assignment 19
      </p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Dashboard
      </h2>

      <div className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-3">
        <p className="rounded bg-slate-100 px-4 py-3">
          Students : <span className="font-semibold">{totalStudents}</span>
        </p>
        <p className="rounded bg-slate-100 px-4 py-3">
          Courses : <span className="font-semibold">{totalCourses}</span>
        </p>
        <p className="rounded bg-slate-100 px-4 py-3">
          Placements : <span className="font-semibold">{totalPlacements}</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
