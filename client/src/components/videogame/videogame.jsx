import { Link } from "react-router-dom";
import "./videogame.css";

export default function Videogame({ datos }, key) {
  return (
    <div key={key} className="card">
      <Link to={`/detail/${datos.id}`}>
        <img
          className="imgVideogame"
          src={datos.image_background}
          alt={datos.name}
          />
          <div className="bkDescription">.</div>
        <h3 className="nameVG">{datos.name}</h3>
        <div className="genres"><h3 className="titleVG">Genres:</h3>{datos.genres?.map((genre) =>genre.name).join(', ').slice(0,37)+"..."}</div>
       <div className="rating">
       <h4 className="center">{datos.rating}</h4>
       <h6 className="center">Rating</h6>
       </div>
       
      </Link>
    </div>
  );
}
