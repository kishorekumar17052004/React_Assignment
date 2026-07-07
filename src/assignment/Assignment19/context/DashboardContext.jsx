import { DashboardContext } from "./DashboardContextValue";

export const DashboardProvider = ({ children }) => {
  const dashboardData = {
    totalStudents: 250,
    totalCourses: 15,
    totalPlacements: 120,
  };

  return (
    <DashboardContext.Provider value={dashboardData}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
