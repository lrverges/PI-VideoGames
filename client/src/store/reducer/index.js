import { 
    GET_ALL_VIDEOGAMES,
    GET_SEARCH_VIDEOGAMES,
    SORT
    } from "../actions"

const initialState = {
    videogames :[],
    filteredVideogames:[],
    genres: [],
    
}

export default function reducer(state = initialState, action){

    function order(order){
        let ordenedVideogames = [...state.filteredVideogames]
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
                filteredVideogames: [...action.payload]
            }
        case GET_SEARCH_VIDEOGAMES:
            return{
                ...state, 
                filteredVideogames: [...action.payload]
            }
        case SORT:
                   
            return{
                ...state,
              filteredVideogames: order(action.payload) 
            }
       
        
        default: return state
    }

}