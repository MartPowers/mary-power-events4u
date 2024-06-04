import "./Filters.scss";

function Filters({ categories, setCategoryFilter }) {
  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  return (
    <div className="filters">
      <div className="filters__group">
        <p className="filters__text">filters:</p>
        <button className="filters__btn"  key="All" onClick={() => handleCategoryFilter('All')} type="button">
        All
      </button>
      </div>

<div className="filters__group">
      {categories.map((category) => (
        <div className="filters__section">
          <button className="filters__btn" key={category} onClick={() => handleCategoryFilter(category)} type="button">
            {category}
          </button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Filters;
