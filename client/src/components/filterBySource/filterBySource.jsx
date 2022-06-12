import { useDispatch } from "react-redux";
import { filterBySource } from "../../store/actions";

import { ALL, API, CREATEDBYUSER } from "./constants";

export default function FilterBySource(){
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(filterBySource(e.target.value))
        e.preventDefault();
    }

    return ( 
    <>
        <span>Select Source </span>
        <select name="selectSource" onChange={onSelectChange}>
                    <option value={ALL}>All</option>
                    <option value={API}>Only from API</option>
                    <option value={CREATEDBYUSER}>Only Created by User</option>

        </select>
    </>
)}