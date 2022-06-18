import { Link } from "react-router-dom";
import "./videogame.css";

export default function Videogame({ datos }, key) {
  return (
    <div key={key} className="container">
      <Link to={`/detail/${datos.id}`}>
        <img
          className="imgVideogame"
          src={datos.image_background}
          alt={datos.name}
        />
        <h3>{datos.name}</h3>
        <span>Rating {datos.rating}</span>
        {datos.genres?.map((genre, index) => {
          return <div key={index}>{genre.name}</div>;
        })}
      </Link>
    </div>
  );
}
