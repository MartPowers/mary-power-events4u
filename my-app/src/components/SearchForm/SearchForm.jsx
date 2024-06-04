import "./SearchForm.scss";
import Filters from "../Filters/Filters";
import React, { useState } from "react";
import axios from "axios";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCities, setSelectedCities] = useState([]); // Update to an array
  const [events, setEvents] = useState([]);
  const [cities, setCities] = useState([
    { value: "Toronto, Canada", label: "Toronto" },
    { value: "Montreal, Canada", label: "Montreal" },
    { value: "Vancouver, BC, Canada", label: "Vancouver" },
    { value: "Seattle, Washington", label: "Seattle" },
    // Add more cities here
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCityChange = (event) => {
    const selectedCities = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedCities(selectedCities);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = [];
    if (searchTerm) {
      queryParams.push(`title=${searchTerm}`);
    }
    if (selectedCities.length > 0) {
      queryParams.push(`location=${selectedCities.join(',')}`);
    }
    axios.get(`/events/search?${queryParams.join('&')}`)
     .then((response) => {
        setEvents(response.data);
      })
     .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            id="search"
            name="search"
            placeholder="search events by title"
            className="search-form__input"
          />
        </div>


<div className="search-form__group">
          <select
            value={selectedCities}
            onChange={handleCityChange}
            multiple={true} // Add multiple attribute
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          <button type="submit" className="search-form__btn">SEARCH</button>
        </div>
      </form>
      <Filters />
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.location}</p>
            <p>{event.category}</p>
            {/* Add more event details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchForm;
