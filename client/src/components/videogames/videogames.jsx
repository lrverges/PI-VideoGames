// import { useEffect } from "react"
// import {useDispatch, useSelector} from "react-redux"
// import {getAllVideogames} from '../../store/actions'
import Order from "../order/order"
import Searchbar from "../searchbar/searchbar"
//import Videogame from "../videogame/videogame"
import Pagination from "../pagination/pagination"
import React from "react"
import './videogames.css'

export default function Videogames(){
    // let videogames = useSelector(state => state.filteredVideogames) //traigo parte del state
    // let currentPage = useSelector(state => state.currentPage)
    // // const [loading, setLoading] = useState(false)
    // let pageLimit = 15
    // let currentPageFirstValue = 0;
    // let firstVGpage = (currentPage*pageLimit)-pageLimit+1;
    // let lastVGpage = currentPage*pageLimit<=videogames.length/pageLimit?currentPage*pageLimit:videogames.length/pageLimit
    // let dispatch = useDispatch() // para despachar al store
    // useEffect(()=>{                 //ejecuta la funcion cuando comienza o actualiza el ciclo de vida del componente
    //     dispatch(getAllVideogames())
        
    // }, [dispatch])
    
    // useEffect(()=>{
        
    //     currentPageFirstValue = (currentPage - 1)*15

    // },[currentPage])

    // let pageVideoGames =[]
    return ( <>
        
        <Order/>
        <Searchbar/>
        <Pagination key={1}/>
        {/* <Pagination totalRecords={videogames.length} pageLimit={pageLimit}/> */}

        {/* <div className="containerVG">
        {videogames.length>0 ? 
            
            (pageVideoGames = videogames.slice(currentPageFirstValue, currentPageFirstValue+15).length>0?
           
            
           pageVideoGames.map((videogame)=>{
            console.log('hola')
            console.log(videogame.length)
            return <Videogame 
                datos={videogame}
                 key={videogame.id}
                // name={video.name} 
                // image={video.image_background} 
                // genres={video.genres}
            />
            
        }): <div>cargando1</div>
               ) :<div>cargando2</div>
    } */}
        {/* </div> */}
        {/* </div> */}
        </>

    );
}