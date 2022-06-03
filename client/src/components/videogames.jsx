import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {getAllVideogames} from '../store/actions'
import Videogame from "./videogame"

export default function Videogames(){
    let videogames = useSelector(state => state.videogames) //traigo parte del state
    let dispatch = useDispatch() // para despachar al store
    useEffect(()=>{                 //ejecuta la funcion cuando comienza o actualiza el ciclo de vida del componente
        dispatch(getAllVideogames())
    }, [])
   // console.log(videogames)
    return (
        <div>
        {videogames.length>0 ? videogames.map((video)=>{
            console.log(video.name)
            return <Videogame 
                data={video}
                // key={video.id}
                // name={video.name} 
                // image={video.image_background} 
                // genres={video.genres}
            />
            
        }): <div>cargando</div>
    }
        </div>
    );
}