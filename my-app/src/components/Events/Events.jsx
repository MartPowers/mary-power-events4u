import "./Events.scss";

function Events() {
  return (
    <div className="events">

        <div className="events__container">
            <div className="events__card">
                <img src="#" alt="#" className="events__img"/>

                <div className="events__info">
                    <p className="events__title">title</p>

                    <div className="events__group">
                        <p className="events__text">location</p>
                        <p className="events__text">dates</p>
                        <p className="events__text events__text--price">price</p>
                    </div>

                    <button className="events__btn">MORE DETAILS</button>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Events
