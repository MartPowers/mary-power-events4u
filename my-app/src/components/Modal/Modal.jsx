import "./Modal.scss";

function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__btn" onClick={onClose}>
          Cancel
        </button>
        <form className="modal__form">
          <div className="modal__container">
            <label className="modal__input--label">Event Title:</label>
            <input className="modal__input" type="text" required placeholder="Title Your Event"/>
          </div>
          <div className="modal__container">
            <label className="modal__input--label">Event Date:</label>
            <input className="modal__input" type="date" required />
          </div>
          <div className="modal__container">
            <label className="modal__input--label">Event Location:</label>
            <input className="modal__input" type="text" required placeholder="Add Address"/>
          </div>

          <div className="modal__container">
            <label className="modal__input--label">Event Category</label>
            <input className="modal__input" type="text" required placeholder="Concert, Workshop etc."/>
          </div>

          <div className="modal__container">
            <label className="modal__input--label">Event Description:</label>
            <textarea className="modal__input" required ></textarea>
          </div>

          <div className="modal__container">
            <label className="modal__input--label">Phone Number:</label>
            <input className="modal__input" type="text" required placeholder="Add Phone Number Here"/>
          </div>

          <div className="modal__container">
            <label className="modal__input--label">Email:</label>
            <input className="modal__input" type="text" required placeholder="Add Email Here"/>
          </div>

          <button type="submit" className="modal__btn">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
