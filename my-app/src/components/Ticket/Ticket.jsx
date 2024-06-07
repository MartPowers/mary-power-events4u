import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./Ticket.scss";

function Ticket({ events }) {
  const { title } = useParams();

  const event = events.find(event => event.title === title);

  const [ticketCount, setTicketCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
      setTotalCost(ticketCount * event.cost);
  }, [ticketCount, event.cost]);
  
  const handleAddTicket = () => {
      setTicketCount(prevCount => prevCount + 1);
  };
  
  const handleRemoveTicket = () => {
      setTicketCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleReserveTicket = () => {
      if (ticketCount > 0) {
          const email = 'example@example.com';  // Replace with the actual email
          const subject = 'Reserve Ticket';
          const body = `I would like to reserve ${ticketCount} ticket(s) for ${event.title} on ${event.date}. Total cost: $${totalCost}`;
          const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailtoLink;
      } else {
          alert('Transaction not complete.');
      }
  };

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
                      <p className='ticket__text'>$ {event.cost} per ticket</p>
                      <p className='ticket__text'>Total cost: $ {totalCost}</p>
                  </div>
                  <div className='ticket__group ticket__group--count'>
                      <button className='ticket__shape' onClick={handleRemoveTicket}>-</button>
                      <p>{ticketCount}</p>
                      <button className='ticket__shape' onClick={handleAddTicket}>+</button>
                  </div>
              </div>
              <div className='ticket__btn' onClick={handleReserveTicket}>RESERVE TICKET</div>
          </div>
      </div>
  );
}


export default Ticket
