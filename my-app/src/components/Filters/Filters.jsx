import "./Filters.scss";

function Filters({ categories, setCategoryFilter }) {
  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  return (
    <div className="filters">
      
        
      <p className="filters__text">categories</p>
      <div className="filters__section">
   
      <div className="filters__group">
        <button
          className="filters__btn filters__btn--all"
          key="All"
          onClick={() => handleCategoryFilter("All")}
          type="button"
        >
          All
        </button>
      </div>

        {categories.map((category) => (
          <div className="filters__group">
            <button
              className="filters__btn"
              key={category}
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
