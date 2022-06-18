import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/"> Landing Page </NavLink>
      <NavLink to="/home"> Home </NavLink>
      <NavLink to="/create"> Add New Videogame </NavLink>
      <NavLink to="/about"> About </NavLink>
      <Outlet />
    </div>
  );
}
