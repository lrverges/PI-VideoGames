import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./detailVideogame.css";

const url = "http://localhost:3001";

export default function DetailVideogame() {
  const [videogame, setVideogame] = useState(null);
  let { id } = useParams();
  window.scroll(0, 0);
  
  useEffect(() => {
    axios
      .get(`${url}/videogame/${id}`)
      .then((response) => {
        setVideogame(response.data);
      })
      .catch((error) => {
        setVideogame({
          name: "not Found",
          description: "not Found",
          released: "not Found",
          rating: "not Found",
          genres: ["not Found"],

          platforms: ["not found"],
        });
      });

    return () => {
      setVideogame(null);
    };
  }, [id]);

  return (
    <div className="containerDetail">
      <div className="mainDetail">
        {videogame ? (
          <div>
              <NavLink  to="/home">
                <button className="closeButton">X</button>
              </NavLink>
            <h1 className="nameTitle">{videogame.name}</h1>

            <p
              className="descriptionDetail"
              dangerouslySetInnerHTML={{ __html: videogame.description }}
            />
              <div className="containerSubdetail">
              <img
                className="imgDetail"
                src={videogame.image_background}
                alt={videogame.name}
              />
              <div className="bloqueDetail">
            <div className="subtitleDetail">
              Released:
              <div />
              <div className="datosDetail"> {videogame.released}</div>
              <div className="subtitleDetail">Rating: </div>
              <div className="datosDetail">{videogame.rating}</div>
              <div className="subtitleDetail">Platforms: </div>
              <div className="datosDetail">
                {videogame.platforms?.join(", ")}
              </div>
              <div className="subtitleDetail">Genres: </div>
              <div className="datosDetail">{videogame.genres?.join(", ")}</div>
              </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cargando">Cargando</div>
        )}
      </div>
    </div>
  );
}
