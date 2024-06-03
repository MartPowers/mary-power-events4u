import "./SearchForm.scss";
import Filters from '../Filters/Filters';
import React, { useState } from 'react';

function SearchForm() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const options = ['Vancouver', 'Montreal', 'Seattle'];

  return (
    <div>
      <form className="search-form">
        <div className="search-form__container">
          {/* <div className="search-form__group"> */}
          <input
            type="text"
            id="search"
            name="search"
            placeholder="search events"
            className="search-form__input"
          />
          </div>
          
          <div className="search-form__group">
            <div className="dropdown">
              <button className="dropdown__btn" onClick={toggleDropdown}>
                  {selectedOption || 'select a city'}
              </button>
              {isOpen && (
                  <div className="dropdown__menu">
                      {options.map((option, index) => (
                          <button
                              key={index}
                              className="dropdown__btn"
                              onClick={() => handleOptionClick(option)}
                          >
                              {option}
                          </button>
                      ))}
                  </div>
              )}
          {/* </div> */}
        </div>

       
          <button className="search-form__btn">
            SEARCH
          </button>
        </div>
      </form>
      <Filters/>
    </div>
  )
}

export default SearchForm
