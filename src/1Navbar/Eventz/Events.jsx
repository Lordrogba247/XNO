import { Link } from 'react-router-dom';
import './Events.css';
import event7 from '../../assets/flyer7.jpg'
import event8 from '../../assets/flyer8.jpg'
import event9 from '../../assets/flyer9.jpeg'


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
            img: event7,
            title: 'Beraks Cave',
            link: '/bookings3',
        }, {
            img: event9,
            title: 'Halllowen in Wakanda',
            link: '/bookings3',
        },
        {
            img: event8,
            title: 'Halllowen in Wakanda',
            link: '/bookings3',
        },
    ];

    return (
        <section className="events-page">
            <h1 className="events-page__heading">Events</h1>
            <p className="events-page__notice">
                Please be advised that by clicking any of our events you agree that
                you are <span className="events-page__highlight">18+</span> and would
                be willing to tender your Ids upon request.
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