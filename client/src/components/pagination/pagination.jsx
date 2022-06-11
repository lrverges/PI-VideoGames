import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../store/actions";
import Videogame from "../videogame/videogame"



export default function Pagination(){
    let pageLimit = 15
    let videogames = useSelector(state => state.filteredVideogames) //traigo parte del state
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [showVideogames, setShowVideogames] = useState(videogames.slice(0,pageLimit))
    const [firstVG, setFirstVG] = useState(0)
useEffect(()=>{                 //ejecuta la funcion cuando comienza o actualiza el ciclo de vida del componente
        dispatch(getAllVideogames())
        
    }, [dispatch])
useEffect(()=>{
    setFirstVG(currentPage*pageLimit)
    setShowVideogames(videogames.slice(firstVG,firstVG+pageLimit))
},[currentPage,firstVG,videogames,pageLimit])


// ****
    const totalRecords = videogames.length
    
    const totalPages = Math.ceil(totalRecords / pageLimit);

    const range = [];
    for(let i=1;i<=totalPages;i++){
        range.push(i)
    }

    function onPageChanged(e,page){
        e.preventDefault();
       setCurrentPage(page-1)
    }
    function previusPage(e){
        e.preventDefault();
        if(currentPage>0)
        setCurrentPage(currentPage-1)
    }
    function nextPage(e){
        e.preventDefault();
        if(currentPage<totalPages-1)
        setCurrentPage(currentPage+1)
    }
    
    return (<>

        <nav>
            <button className="botonItemPage" onClick={(e)=>previusPage(e)}>Prev</button>
            <ul>
                
                {range && range.map(page => {
                    return <li className="itemPage" key={page}>
                    <button className="botonItemPage" onClick={(e)=>onPageChanged(e,page)}>{page}</button>
                    </li>
                })
                }
            </ul>
            <button className="botonItemPage" onClick={(e)=>nextPage(e)}>next</button>
    </nav>

    {showVideogames.length>0 ? 
        
            
        showVideogames.map((videogame)=>{
           
            return <Videogame 
                datos={videogame}
                 key={videogame.id}
                // name={video.name} 
                // image={video.image_background} 
                // genres={video.genres}
            />
              
        }): <div>cargando</div>}
    </>)
}