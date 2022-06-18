import { NavLink } from "react-router-dom";
import "./landingPage.css";
export default function LandingPage() {
  return (
    <div className="back_image">
      <h1>PROYECTO INDIVIDUAL</h1>
      <h3>VIDEOGAMES</h3>
      <NavLink to="/home"> Home </NavLink>
    </div>
  );
}
