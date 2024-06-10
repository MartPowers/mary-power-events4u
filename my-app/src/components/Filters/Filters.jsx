import "./Filters.scss";
import React, { useState } from "react";

function Filters({ categories, setCategoryFilter }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    setCategoryFilter(category);
  };

  return (
    <div className="filters">
      <p className="filters__text">categories</p>
      <div className="filters__section">
        <div className="filters__group">
          <button
            className={`filters__btn filters__btn--all ${
              activeCategory === "All" ? "active" : ""
            }`}
            onClick={() => handleCategoryFilter("All")}
            type="button"
          >
            All
          </button>
        </div>

        {categories.map((category) => (
          <div className="filters__group" key={category}>
            <button
              className={`filters__btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryFilter(category)}
              type="button"
            >
              {category}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
