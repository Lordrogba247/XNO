import { Link } from 'react-router-dom';
import './Events.css';
import fridayNight1 from '../../assets/flyer3.jpg';
import blackCardSaturday1 from '../../assets/flyer2.jpg';
import fridayNight2 from '../../assets/flyer1.jpg';

function EventCard({ img, title, link }) {
    const isExternal = link.startsWith('http');

    if (isExternal) {
        return (

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="event-card"
            >
                <img src={img} alt={title} className="event-card__img" />
            </a >
        );
    }

    return (
        <Link to={link} className="event-card">
            <img src={img} alt={title} className="event-card__img" />
        </Link>
    );
}

function Events() {
    const events = [
        {
            img: fridayNight1,
            title: 'Friday Night Party',
            link: '/bookings3',
        },
        {
            img: blackCardSaturday1,
            title: 'Black Card Saturday',
            link: '/bookings3',
        },
        {
            img: fridayNight2,
            title: 'Friday Night Party',
            link: '/bookings3',
        },
    ];

    return (
        <section className="events-page">
            <h1 className="events-page__heading">Events</h1>
            <p className="events-page__notice">
                Please be advised that by clicking any of our events you agree that
                you are <span className="events-page__highlight">18+</span> and would
                be willing tender your Ids upon request.
            </p>

            <div className="events-page__grid">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        img={event.img}
                        title={event.title}
                        link={event.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Events;