import "./SearchForm.scss";
import Filters from "../Filters/Filters";
import React, { useState } from "react";
import Search from "../../assets/icons/search-icon.png";

function SearchForm({
  setSearchQuery,
  setCategoryFilter,
  setCityFilter,
  setPriceFilter,
}) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const handleCityFilter = (event) => {
    setCityFilter(event.target.value);
  };

  const handlePriceFilter = (event) => {
    setPriceFilter(event.target.value);
  };

  return (
    <div>
      {/* <img src={Search} alt="icon" className="search-form__icon"/> */}
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
          

<div className="search-form__container search-form__container--menus">
          <select className="search-form__menu" onChange={handleCityFilter}>
            <option value="">Select a city</option>
            <option value="Vancouver, BC, Canada">Vancouver</option>
            <option value="Seattle, Washington">Seattle</option>
            <option value="Toronto, Canada">Toronto</option>
            <option value="Montreal, Canada">Montreal</option>
          </select>

          <select className="search-form__menu" onChange={handlePriceFilter}>
            <option value="">Select a price range</option>
            <option value="30">Under $30</option>
            <option value="50">Under $50</option>
            <option value="100">Under $100</option>
            <option value="200">Under $200</option>
            <option value="500">Under $500</option>
          </select>
          </div>

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

          {/* <button type="submit" className="search-form__btn">
            SEARCH
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
