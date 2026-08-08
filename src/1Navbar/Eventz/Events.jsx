import { Link } from 'react-router-dom';
import './Events.css';
import fridayNight1 from '../../assets/flyer1.png';
import blackCardSaturday1 from '../../assets/flyer2.png';
import fridayNight2 from '../../assets/flyer3.png';
import blackCardSaturday2 from '../../assets/flyer4.png';

function Events() {
    const events = [
        { img: fridayNight1, title: 'Friday Night Party' },
        { img: blackCardSaturday1, title: 'Black Card Saturday' },
        { img: fridayNight2, title: 'Friday Night Party' },
        { img: blackCardSaturday2, title: 'Black Card Saturday' },
    ];

    return (
        <section className="events-page">
            <h1 className="events-page__heading">Events</h1>
            <p className="events-page__notice">
                Please be advised that by clicking any of our events you agree that
                you are <span className="events-page__highlight">18+</span> and would
                be willing tender your Ids open request.
            </p>

            <div className="events-page__grid">
                {events.map((event, index) => (
                    <Link
                        to="/bookings3"
                        key={index}
                        className="event-card"
                    >
                        <img src={event.img} alt={event.title} className="event-card__img" />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Events;