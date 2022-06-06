import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {getAllVideogames} from '../../store/actions'
import Order from "../order/order"
import Searchbar from "../searchbar/searchbar"
import Videogame from "../videogame/videogame"
import React from "react"

export default function Videogames(){
    let videogames = useSelector(state => state.filteredVideogames) //traigo parte del state
    let dispatch = useDispatch() // para despachar al store
    useEffect(()=>{                 //ejecuta la funcion cuando comienza o actualiza el ciclo de vida del componente
        dispatch(getAllVideogames())
    }, [dispatch])
  
    return ( <>
        
        <Order/>
        <Searchbar/>
        {videogames.length>0 ? videogames.map((videogame)=>{
       
            return <Videogame 
                datos={videogame}
                 key={videogame.id}
                // name={video.name} 
                // image={video.image_background} 
                // genres={video.genres}
            />
            
        }): <div>cargando</div>
    }
        {/* </div> */}
        </>

    );
}