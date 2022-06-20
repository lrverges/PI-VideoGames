import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Searchbar from "../searchbar/searchbar";
import Order from "../order/order";
import FilterBySource from "../filterBySource/filterBySource";
import "./navBar.css";

export default function NavBar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <div className="containerNavBar">
        <div className="navBar">
          <section className="links">
            <NavLink to="/" className="navLink">
              {" "}Start{" "}
            </NavLink>
            <NavLink
              to="/home"
              className={
                location.pathname === "/home" ? "navLink active" : "navLink"
              }
            >
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              to="/create"
              className={
                location.pathname === "/create" ? "navLink active" : "navLink"
              }
            >
              {" "}Create{" "}
            </NavLink>
            <NavLink
              to="/about"
              className={
                location.pathname === "/about" ? "navLink active" : "navLink"
              }
            >
              {" "}About{" "}
            </NavLink>
          </section>
          <section
            className={
              location.pathname === "/home" ? "display" : "noDisplay"
            }
            >
             <Order />
             <FilterBySource />
             <Searchbar />
          </section>
        </div>
      <Outlet />
      </div>
    </div>
  );
}
