import Order from "../order/order";
import Searchbar from "../searchbar/searchbar";
import Filters from "../filters/filters";
import FilterBySource from "../filterBySource/filterBySource";
import Pagination from "../pagination/pagination";
import React from "react";
import "./videogames.css";

export default function Videogames() {
  return (
    <>
      <Order />
      <Searchbar />
      <FilterBySource />
      <Filters />
      <Pagination />
    </>
  );
}
