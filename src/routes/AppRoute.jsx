import { Routes, Route } from "react-router-dom";
import { routes  } from "./RoutesData";
import Navbar from "../components/Navbar";


const AppRoute = () => {
  return (
    <>
      <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            route.path === "/" ? (
              <>
                <Navbar />
                {route.element}
              </>
            ) : (
              route.element
            )
          }
        />
      ))}
    </Routes>
    
    
    </>
    
    
  )
}

export default AppRoute
