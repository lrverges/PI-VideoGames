import Filters from "../filters/filters";
import Pagination from "../pagination/pagination";
import React from "react";
import "./videogames.css";

export default function Videogames() {
  return (
    <div className="containerVideoGames">
      <Filters />
      <Pagination />
    </div>
  );
}
