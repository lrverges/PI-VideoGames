import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../store/actions";
import './filters.css'
const url = "http://localhost:3001";

export default function Filters() {
  const dispatch = useDispatch();

  const [genres, setGenres] = useState([]);
  const [state, setState] = useState({
    filtered: [],
    unFiltered: [],
  });

  useEffect(() => {
    if (genres && genres.length === 0) {
      axios.get(`${url}/genres/`).then((response) => {
        setGenres(response.data);
        setState({ ...state, unFiltered: sortGenre(response.data) });
      });
    }
  }, [genres, state]);

  useEffect(() => {
    dispatch(filter(state.filtered));
  }, [dispatch, state]);

  function sortGenre(arrayGenres) {
    arrayGenres = arrayGenres.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    return arrayGenres;
  }
  function onClickFilter(e) {
    let selectFilter = state.unFiltered.find(
      (gen) => gen.id === Number(e.target.id)
    ); //busco el que quiero filtrar
    let selectunFilter = state.unFiltered.filter(
      (gen) => gen.id !== Number(e.target.id)
    ); //arreglo con filtros disponibles

    setState({
      unFiltered: sortGenre([...selectunFilter]),
      filtered: sortGenre([...state.filtered, selectFilter]),
    });
    dispatch(filter(state.filtered));
    e.preventDefault();
  }

  function onClickUnfilter(e) {
    e.preventDefault();
    let selectunFilter = state.filtered.find(
      (gen) => gen.id === Number(e.target.id)
    ); //busco el filtro que quiero eliminar
    let selectFilter = state.filtered.filter(
      (gen) => gen.id !== Number(e.target.id)
    ); //arreglo con los filtros aplicados
    setState({
      filtered: sortGenre([...selectFilter]),
      unFiltered: sortGenre([...state.unFiltered, selectunFilter]),
    });
    dispatch(filter(state.filtered));
  }

  return (
    <section className="selectionFilters">
      <h5 className="titleFilter">Filters</h5>
      <section className="listbuttons">
      {state.filtered &&
        state.filtered.map((genre) => {
          return (
            <button
              className="botonGenre"
              id={genre.id}
              key={genre.id}
              onClick={onClickUnfilter}
            >
              {genre.name}
            </button>
          );
        })}
      </section>
      <h5 className="titleFilter">Generos</h5>
        <section className="listbuttons">
      {state.unFiltered &&
        state.unFiltered.map((genre) => {
          return (
            <button
              className="botonGenre"
              id={genre.id}
              key={genre.id}
              onClick={onClickFilter}
            >
              {genre.name}
            </button>
          );
        })}
        </section>
    </section>
  );
}
