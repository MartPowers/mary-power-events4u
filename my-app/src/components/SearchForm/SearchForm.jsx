import "./SearchForm.scss";
import Filters from "../Filters/Filters";
import React, { useState } from "react";

function SearchForm({ setSearchQuery, setCategoryFilter, setCityFilter }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const handleCityFilter = (event) => {
    setCityFilter(event.target.value);
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
            // value={searchQuery}
            onChange={handleSearch}
          />

          <select onChange={handleCityFilter}>
            <option value="">Select a city</option>
            <option value="Vancouver, BC, Canada">Vancouver</option>
            <option value="Seattle, Washington">Seattle</option>
            <option value="Toronto, Canada">Toronto</option>
            <option value="Montreal, Canada">Montreal</option>
          </select>

          <Filters
            categories={[
              "Concerts",
              "Conferences",
              "Workshops",
              "Art Exhibitions",
              "Seminars",
              "Trade Shows",
              "Sports Events",
              "Festivals",
              "Webinars",
              "Fundraisers",
            ]}
            setCategoryFilter={handleCategoryFilter}
          />

          <button type="submit" className="search-form__btn">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
