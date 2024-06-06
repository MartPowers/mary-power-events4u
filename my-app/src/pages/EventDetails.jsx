import { useParams } from 'react-router-dom';
import "./EventDetails.scss";
import Ticket from "../components/Ticket/Ticket";

function EventDetails({ events }) {
    const { title } = useParams();
  
    const event = events.find(event => event.title === title);
  
    if (!event) {
      return <div>Event not found</div>;
    }

  return (
    <div className="event-details">
        <div className='event-details__container'>
      <img src={event.image} alt={event.title} className="event-details__img" />
      <div className='event-details__group'>
      <p className="event-details__text">{event.date}</p>
      <h2 className="event-details__text">{event.title}</h2>
      </div>
      <p className="event-details__text">{event.description}</p>

      <div className='event-details__group'>
      <p className="event-details__text">{event.location}</p>
 <p className="event-details__text">{event.address}</p>
 </div>

    <Ticket events={events}/>

      <p className="event-details__text">Per ticket: {event.cost}</p>
      <h3 className="event-details__text">About this Event</h3>
      <p className="event-details__text">{event.details}</p>
      <h3 className="event-details__text">Other events you may like</h3>
    </div>
    </div>
  );
}

export default EventDetails;