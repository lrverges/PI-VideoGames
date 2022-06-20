import { NavLink } from "react-router-dom";
import "./landingPage.css";
export default function LandingPage() {
  return (
    <div className="back_image">
      <div className="container">
        <h1 className="title">VIDEOGAMES</h1>
        <h3 className="subtitle">PROYECTO INDIVIDUAL</h3>
        <NavLink to="/home" className='navLink'>
          <button className="btn_home">Get Started</button>
        </NavLink>
      </div>
    </div>
  );
}
