import { GET_ALL_VIDEOGAMES } from "../actions"
const initialState = {
    videogames :[],
    genres: []
}

export default function reducer(state = initialState, action){

    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return{
                ...state, 
                videogames: [...action.payload]
            }

        default: return state
    }

}