import { Link } from 'react-router-dom';
import './Events.css';
import fridayNight1 from '../../assets/flyer3.jpg';
import blackCardSaturday1 from '../../assets/flyer2.jpg';
import fridayNight2 from '../../assets/flyer1.jpg';
import event4 from '../../assets/flyer4.jpg'
import event5 from '../../assets/flyer5.jpg'
import event6 from '../../assets/flyer6.jpg'
import event7 from '../../assets/flyer7.jpg'
import event8 from '../../assets/flyer8.jpg'
import Weekend1 from '../../assets/weekend1.jpg'
import Weekend2 from '../../assets/weekend2.jpg'


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
            img: Weekend1,
            title: 'Friday Night Party',
            link: 'https://www.eventbrite.ca/e/paint-sip-shisha-registration-1998694592329',
        }, {
            img: Weekend2,
            title: 'Friday Night Party',
            link: '/bookings3',
        },
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
        {
            img: event4,
            title: 'Afro Energizer',
            link: '/bookings3',
        }, {
            img: event5,
            title: 'Omo Naija',
            link: '/bookings3',
        }, {
            img: event6,
            title: 'Nigeria Independence Party',
            link: '/bookings3',
        }, {
            img: event7,
            title: 'Beraks Cave',
            link: '/bookings3',
        }, {
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