import "./Events.scss";
import "../../styles/partials/_global.scss";

function Events({ events }) {
  return (
    <div className="events">
      {events.map((event) => (
        <div key={event.id} className="events__container">
          <div className="events__card">
            <img src={event.image} alt={event.title} className="events__img" />

            <div className="events__info">
              <h2 className="events__title">{event.title}</h2>

              <div className="events__group">
                <p className="events__text">{event.location}</p>
                <p className="events__text">{event.date}</p>
                <p className="events__text events__text--price">
                  {event.price}
                </p>
              </div>

              <button className="events__btn">MORE DETAILS</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
