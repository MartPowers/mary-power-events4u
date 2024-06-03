import "./Filters.scss";

function Filters() {
  return (
    <div className="filters">
      <div className="filters__group">
        <p className="filters__text">filters:</p>
        <button className="filters__btn">all</button>
      </div>

      <div className="filters__section">
        <button className="filters__btn">concerts</button>
        <button className="filters__btn">conferences</button>
        <button className="filters__btn">workshops</button>
        <button className="filters__btn">seminars</button>
        <button className="filters__btn">trade shows</button>
        <button className="filters__btn">art exhibitions</button>
        <button className="filters__btn">sports events</button>
        <button className="filters__btn">festivals</button>
        <button className="filters__btn">webinars</button>
        <button className="filters__btn">fundraisers</button>
      </div>
    </div>
  );
}

export default Filters;
