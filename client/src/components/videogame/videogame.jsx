import { Link } from 'react-router-dom'
import './videogame.css'

export default function Videogame({datos}, key){
   // console.log(data.data.image)
  // let {id}= datos
  
    return <div key={key} className="container">
       <Link to={`/detail/${datos.id}`}>
        <img className="imgVideogame" src={datos.image_background} alt={datos.name}/>
        <h3>{datos.name}</h3>
        <span>Rating {datos.rating}</span>
        {datos.genres?.map((genre,index)=>{
            return <div key={index}>{genre.name}</div>
        })}
        </Link>

        </div>
}

//https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg