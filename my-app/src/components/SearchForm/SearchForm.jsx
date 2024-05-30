import "./SearchForm.scss";
import Filters from '../Filters/Filters';

function SearchForm() {
  return (
    <div>
      <form className="search-form">
        <div className="search-form__container">
          <div className="search-form__group">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="search events"
            className="search-from__input"
          />
          </div>

          <div className="search-form__group">
          <input
            type="text"
            id="location"
            name="location"
            placeholder=" your location"
            className="search-from__input"
          />
          </div>
        </div>

        <div className="search-form__btn">
          <button>
            SEARCH
          </button>
        </div>
      </form>
      <Filters/>
    </div>
  )
}

export default SearchForm
