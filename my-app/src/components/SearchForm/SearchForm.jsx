import "./SearchForm.scss";
import Filters from "../Filters/Filters";
import React, { useState } from "react";


function SearchForm({ setSearchQuery, searchQuery }) {
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form className="search-form">
        <div className="search-form__container">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="search events by title"
            className="search-form__input"
            value={searchQuery}
            onChange={handleSearch}
          />
      
          <button type="submit" className="search-form__btn">SEARCH</button>
          </div>
      </form>
      <Filters/>
    </div>
  );
}

export default SearchForm;
