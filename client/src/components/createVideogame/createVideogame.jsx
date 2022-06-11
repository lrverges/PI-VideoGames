import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateVideogame(){
    const url = 'http://localhost:3001';
    const [videogame, setVideogame] = useState({})
    let navigate = useNavigate()

    function onInputChange(e){
        e.preventDefault();
        setVideogame({
            ...videogame,
            [e.target.name]: e.target.value
        })
    }
        function onSubmit(e){
        e.preventDefault();
        axios.post(`${url}/videogame`, videogame)
        .then(() =>{
            navigate.push('/')
        })
        .catch((e)=>{console.log(e)})
    }
        return <form onSubmit={onSubmit}>
        <label htmlFor="">Name: </label>
        <input onChange={onInputChange} type='text' />
        <label htmlFor="">Description: </label>
        <input onChange={onInputChange} type='text' />
        <label htmlFor="">Released: </label>
        <input onChange={onInputChange} type='date' />
        <label htmlFor="">Rating: </label>
        <input onChange={onInputChange} type='number' />
        <label htmlFor="">Nombre: </label>
        <input type='text' />
        <label htmlFor="">Nombre: </label>
        <input type='text' />
        <label htmlFor="">Nombre: </label>
        <input type='text' />
        <label htmlFor="">Nombre: </label>
        <input type='text' />
        <input type="submit" value="" />
        
        
    </form>
}