import "./Header.scss";
import { Link } from "react-router-dom";

function header({ onShowModal }) {
  return (
    //outer div is container
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to={`/`} className="header__logo header__logo--link">
            4
          </Link>
        </div>
        <button className="header__btn" onClick={onShowModal} type="submit">
          Create an event
        </button>
      </div>
    </div>
  );
}

export default header;
