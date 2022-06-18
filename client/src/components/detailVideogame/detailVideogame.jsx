import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
const url = "http://localhost:3001";

export default function DetailVideogame() {
  const [videogame, setVideogame] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    axios.get(`${url}/videogame/${id}`).then((response) => {
      setVideogame(response.data);
    });
    return () => {
      setVideogame(null);
    };
  }, [id]);
  return (
    <div>
      {videogame ? (
        <div>
          <h1>{videogame.name}</h1>

          <p dangerouslySetInnerHTML={{ __html: videogame.description }} />
          <div>{videogame.released}</div>
          <div>{videogame.rating}</div>
          <img src={videogame.image_background} alt={videogame.name} />

          <div>{videogame.platforms?.join(", ")}</div>

          <div>{videogame.genres?.join(", ")}</div>
          <NavLink className="closeButton" to="/home">
            <button>Cerrar</button>
          </NavLink>
        </div>
      ) : (
        <div>Cargando</div>
      )}
    </div>
  );
}
