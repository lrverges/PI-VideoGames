import { ALL, API, CREATEDBYUSER } from "../../components/filterBySource/constants"
import { ASCENDINGNAME} from '../../components/order/constantes'
import { 
    GET_ALL_VIDEOGAMES,
    GET_SEARCH_VIDEOGAMES,
    SORT,
    FILTER,
    FILTERBYSOURCE,
    } from "../actions"


const initialState = {
    videogames:[],
    filteredVideogames:[],
    order: ASCENDINGNAME,    
    filterSource: ALL,
    genresFiltered: []
}

export default function reducer(state = initialState, action){

    function handlerAll(filterSource, genresFiltered, videogames){
       // console.log('source ', filterSource,'array', genresFiltered)
        let filteredVideogames = videogames ? videogames : [...state.videogames]
        if(filteredVideogames.length>0)
            filteredVideogames = [...filterBySource(filterSource, filteredVideogames)]
    //    else return []
    //    if(filteredVideogames.length>0)
            filteredVideogames = [...filterVideogames(genresFiltered, filteredVideogames)]
        //    console.log(genresFiltered)
    //    else return []
     //   if(filteredVideogames.length>0)
            filteredVideogames = orderVG(state.order, filteredVideogames)
    //    else return []
        console.log(filteredVideogames.length)

        return filteredVideogames
    }

    function filterVideogames(genresFiltered, videogamesFiltered){
       // let videogamesFiltered = [...state.videogames]
       
       
        if(genresFiltered.length>0){
                  let idGeneros = genresFiltered.map(genre => genre.name)
                  console.log(idGeneros)
                  videogamesFiltered = videogamesFiltered.filter(videogame => 
                    idGeneros.every(genre=> 
                        videogame.genres.map(videogameGen => 
                            videogameGen.name).includes(genre)))
             
               // console.log(videogamesFiltered)
                  
               

                } else {console.log('sin filtrar')}
              //  videogamesFiltered = order(state.order, videogamesFiltered)
        return videogamesFiltered
    }

    function filterBySource(filterSource, videogamesFiltered){
      //  let videogamesFiltered = [...state.videogames]
     //   console.log(filterSource)
//ALL, API, CREATEDBYUSER 
    //    if(filterSource===ALL) return videogamesFiltered
        if (filterSource===API) 
                videogamesFiltered = videogamesFiltered.filter(videogame => videogame.id.toString().length<10)
            
        if (filterSource===CREATEDBYUSER) 
                videogamesFiltered = videogamesFiltered.filter(videogame => videogame.id.toString().length>10)
        
        //videogamesFiltered = order(state.order, videogamesFiltered)
        return videogamesFiltered
        }
        //return videogamesFiltered
       
    

    function orderVG(order, ordenedVideogames){
      //  let ordenedVideogames = [...state.filteredVideogames]
        let byAttribute = ''
        if(order.includes('Name')){
            byAttribute = 'name'
            
        } else 
        byAttribute = 'rating'

        ordenedVideogames = ordenedVideogames.sort((a,b)=>{
           // console.log(a[byAttribute])
            if(a[byAttribute] < b[byAttribute]){
                console.log(order.includes('ascending'))
                return order.includes('ascending') ? -1 : 1;
            }
            if(a[byAttribute] > b[byAttribute]){
                return order.includes('ascending') ? 1 : -1;
            }
            return 0;
        })

        
        return ordenedVideogames
    }

    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return{
                ...state, 
                videogames: [...action.payload],
                filteredVideogames: orderVG(state.order,[...action.payload])
            }
        case GET_SEARCH_VIDEOGAMES:
            return{
                ...state, 
              //  filteredVideogames: orderVG(state.order,[...action.payload])
                videogames: [...action.payload],
                filteredVideogames : handlerAll(state.filterSource, state.genresFiltered, [...action.payload])
            }
        case SORT:
                   
            return{
                ...state,
              filteredVideogames: orderVG(action.payload, [...state.filteredVideogames]),
              order: action.payload
            }
        case FILTER:
            return{
                ...state,
                filteredVideogames : handlerAll(state.filterSource, action.payload),
                genresFiltered : action.payload
            }
        case FILTERBYSOURCE:
            
            return {
                ...state,
                filteredVideogames : handlerAll(action.payload, state.genresFiltered),
                filterSource : action.payload
            }
           // filterSource = state.filterSource, order = state.order, genresFiltered = state.genresFiltered
        default: return state
    }

}