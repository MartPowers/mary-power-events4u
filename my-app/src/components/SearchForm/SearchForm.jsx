import "./SearchForm.scss";
import Filters from "../Filters/Filters";
import React, { useState } from "react";

function SearchForm({ setSearchQuery, setCategoryFilter }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
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
