import axios from 'axios'
export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES'

const url = 'http://localhost:3001';

export function getAllVideogames(){
    return function (dispatch){
        axios.get(`${url}/videogames`)
        .then(videogames =>{
            dispatch({
                type: GET_ALL_VIDEOGAMES,
                payload: videogames.data
            })
        })
        .catch((error)=>{
            console.log(error)
       })
}
}
