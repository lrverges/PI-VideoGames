import { useDispatch, useSelector } from "react-redux";
import { filterBySource } from "../../store/actions";
import "./filterBySource.css";
import { ALL, API, CREATEDBYUSER } from "./constants";

export default function FilterBySource() {
  const dispatch = useDispatch();
  let filterSource = useSelector((state) => state.filterSource);
  function onSelectChange(e) {
    dispatch(filterBySource(e.target.value));
    e.preventDefault();
  }

  return (
    <>
      {/* <span>Select Source </span> */}
      <select
        className="inputFilterBySource"
        name="selectSource"
        onChange={onSelectChange}
        defaultValue={filterSource}
      >
        <option value={ALL}>All</option>
        <option value={API}>Only from API</option>
        <option value={CREATEDBYUSER}>Only Created by User</option>
      </select>
    </>
  );
}
