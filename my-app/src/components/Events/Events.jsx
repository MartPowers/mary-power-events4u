import "./Events.scss";
import "../../styles/partials/_global.scss";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Events({ events }) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };


 const imgURL = "http://localhost:5000";

  return (
   
    <div className="events">
    {events.slice(0, visibleCount).map((event, index) => (
    <div key={index} className="events__container">
    <div className="events__card">
    <img
    // src={`${imgURL + event.image}`}
    
    src={`${imgURL}${event.image}`}
    alt={event.title}
    className="events__img"
    />

            <div className="events__info">
              <h2 className="events__title">{event.title}</h2>

              <div className="events__group">
                <p className="events__text">{event.location}</p>
                <p className="events__text">{event.date}</p>
                <p className="events__text events__text--price">$ {event.cost}</p>
              </div>

              <Link to={`/events/${event.title}`} className="events__btn">MORE DETAILS</Link>
            </div>
          </div>
        </div>
      ))}
      <div className="events__group events__group--load">
        {visibleCount < events.length && (
          <button
            className="events__btn events__btn--load"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Events;
