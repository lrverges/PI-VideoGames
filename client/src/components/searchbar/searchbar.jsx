import {  useState} from 'react'
import { useDispatch } from 'react-redux';
import { getSearchVideogames, getAllVideogames } from '../../store/actions';



export default function Searchbar(){
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();
    

    function onSubmit(e){
        e.preventDefault();
        if(search==='') dispatch(getAllVideogames())
         else dispatch(getSearchVideogames(search))

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

