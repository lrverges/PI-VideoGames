import axios from 'axios'
export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES'
export const GET_SEARCH_VIDEOGAMES = 'GET_SEARCH_VIDEOGAMES'
export const SORT = 'SORT'
const url = 'http://localhost:3001';
//http://localhost:3001/videogames


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


//http://localhost:3001/videogames
export function getSearchVideogames(search){
    return function (dispatch){
        axios.get(`${url}/videogames?name=${search}`)
        .then(videogames =>{
            dispatch({
                type: GET_SEARCH_VIDEOGAMES,
                payload: videogames.data
            })
        })
        .catch((error)=>{
            alert(`No se encontraron videogames que coincidan con "${search}".\nPor favor intente nuevamente`);
       })
    }
}

export function sort(order){
    return {
        type: SORT,
        payload: order
    }
}

