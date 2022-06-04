import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { getSearchVideogames } from '../../store/actions';


export default function Searchbar(){
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();

    function onSubmit(e){
        e.preventDefault();
        dispatch(getSearchVideogames(search))

    }
    function oninputChange(e){
        e.preventDefault();
        setSearch(e.target.value)

    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={oninputChange} value={search}/>
            <input type="submit" value="buscar" />
        </form>
    </div>
}

