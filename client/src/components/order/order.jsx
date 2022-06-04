import { useDispatch } from "react-redux";
import { sort } from "../../store/actions";
import { ASCENDINGNAME, DESCENDINGNAME, ASCENDINGRATING, DESCENDINGRATING } from "./constantes";

export default function Order(){
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(sort(e.target.value))
        e.preventDefault();
    }

    return ( 
    <>
        <span>Ordenar por </span>
        <select name="selectOrder" onChange={onSelectChange}>
                    <option value={ASCENDINGNAME}>Nombre A-Z</option>
                    <option value={DESCENDINGNAME}>Nombre Z-A</option>
                    <option value={ASCENDINGRATING}>Rating Ascendente</option>
                    <option value={DESCENDINGRATING}>Rating Descendente</option>

        </select>
    </>
)}