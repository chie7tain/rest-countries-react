import React from "react";
import "./search-form-and-filter-form-container.css";
import SearchForm from "./SearchForm/SearchForm";


const SearchandFilterFormContainer = ()=>{
  return (
  <div className="search-form-and-filter-form-container">
      <SearchForm/>

      <div className="filter-form-container">
        <select name="" className="filter-countries toggle-dark-mode">
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="ocean">Oceana</option>
        </select>
      </div>

    </div>
  );
}

export default SearchandFilterFormContainer;