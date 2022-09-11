import { useDispatch, useSelector } from "react-redux";
import { sort } from "../../store/actions";
import "./order.css";
import {
  ASCENDINGNAME,
  DESCENDINGNAME,
  ASCENDINGRATING,
  DESCENDINGRATING,
} from "./constantes";

export default function Order() {
  const dispatch = useDispatch();
  const orderSelect = useSelector((state) => state.order);
  function onSelectChange(e) {
    dispatch(sort(e.target.value));
    e.preventDefault();
  }

  return (
    <>
      <select
        className="inputSelectOrder"
        name="selectOrder"
        onChange={onSelectChange}
        defaultValue={orderSelect}
      >
        <option value={ASCENDINGNAME}>Nombre A-Z</option>
        <option value={DESCENDINGNAME}>Nombre Z-A</option>
        <option value={ASCENDINGRATING}>Rating Ascendente</option>
        <option value={DESCENDINGRATING}>Rating Descendente</option>
      </select>
    </>
  );
}
