import React from "react";
import "./SearchForm.css";

const SearchForm = ()=>{
  return (
       <form action="">
          <div class="search-input-container">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search for a country" class="search-input toggle-dark-mode"/>
          </div>
        </form>
  );
}
export default SearchForm;