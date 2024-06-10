import { useParams } from "react-router-dom";
import "./EventDetails.scss";
import Ticket from "../components/Ticket/Ticket";
import { Link } from "react-router-dom";

function EventDetails({ events }) {
  const { title } = useParams();

  const event = events.find((event) => event.title === title);

  if (!event) {
    return <div>Event not found</div>;
  }

  const imgURL = "http://localhost:5000";

  return (
    <div className="event-details">
      <div className="event-details__container event-details__container--hero">
      <Link to={`/`} className="event-details__text event-details__text--link">
        go back to home
      </Link>

      <img
        src={`${imgURL}${event.image}`}
        alt={event.title}
        className="event-details__img"
      />
</div>
      <div className="event-details__container">
        <div className="event-details__group">
          <p className="event-details__text">{event.date}</p>
          <h2 className="event-details__text event-details__text--bold">
            {event.title}
          </h2>
          <p className="event-details__text ">{event.description}</p>
          <p className="event-details__text">{event.location}</p>
          <p className="event-details__text">{event.address}</p>
          <p className="event-details__text event-details__text--reg">
            Per ticket: $ {event.cost}
          </p>
        </div>

        <div className="event-details__group">
          <Ticket events={events} />
        </div>
      </div>

      <h3 className="event-details__text event-details__text--bold">
        About this Event
      </h3>
      <p className="event-details__text event-details__text--details">
        {event.details}
      </p>

    </div>
  );
}

export default EventDetails;
