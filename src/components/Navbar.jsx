import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        React Assignments
      </h1>

      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Navbar;