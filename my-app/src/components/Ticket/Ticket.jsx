import { useParams } from 'react-router-dom';
import "./Ticket.scss";

function Ticket({ events }) {
    const { title } = useParams();
  
    const event = events.find(event => event.title === title);
  
    if (!event) {
      return <div>Event not found</div>;
    }
  return (
    <div className='ticket'>
        <div className='ticket__container'>
            <div className='ticket__text-box'>
            <div className='ticket__group'>
                <p className='ticket__text'>General Admission</p>
                <p className='ticket__text'>{event.date}</p>
                <p className='ticket__text'>{event.cost} per ticket</p>
                <p className='ticket__text'>Total cost:</p>
                </div>
                <div className='ticket__group ticket__group--count'>
                    <button className='ticket__shape'>-</button>
                    <p>#</p>
                    <button className='ticket__shape'>+</button>
                    
                </div>
            </div>
            <div className='ticket__btn'>RESERVE TICKET</div>
        </div>
      
    </div>
  )
}

export default Ticket
