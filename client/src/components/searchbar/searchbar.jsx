import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchVideogames, getAllVideogames } from "../../store/actions";
import './searchbar.css'
export default function Searchbar() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (search === "") dispatch(getAllVideogames());
    else dispatch(getSearchVideogames(search));
  }
  function oninputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className='containerSearchbar'>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={oninputChange} value={search} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
