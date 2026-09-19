import { Link } from 'react-router-dom';
import './Bookings.css';
import restaurantImg from '../../assets/restaurant.png';
import partyImg from '../../assets/nightlife.jpg';
import privateImg from '../../assets/lounge.jpg';

function ArrowIcon() {
    return (
        <svg
            className="btn__arrow"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 11L11 3M11 3H4.5M11 3V9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function Bookings() {
    const cards = [
        {
            img: restaurantImg,
            title: 'Restaurant',
            text: 'Savor flavorful dishes in a warm, welcoming environment with a touch of modern elegance',
            buttonText: 'Reserve Now',
            to: '/bookings2',
            variant: 'light',
        },
        {
            img: partyImg,
            title: 'Weekend Party',
            text: 'Enjoy exciting themed nights, music, vibrant and unforgettable experiences',
            buttonText: 'Reserve a Booth',
            to: '/bookings3',
            variant: 'dark',
        },
        {
            img: privateImg,
            title: 'Private Bookings',
            text: 'A lively space where connections, conversations flow and moments are filled with energy',
            buttonText: 'Reserve Now',
            to: '/bookings2',
            variant: 'teal',
        },
    ];

    return (
        <section className="bookings-page">
            <h1 className="bookings-page__heading">Bookings</h1>

            <div className="bookings-page__grid">
                {cards.map((card) => (
                    <div key={card.title} className={`booking-card booking-card--${card.variant}`}>
                        <img src={card.img} alt={card.title} className="booking-card__img" />
                        <h3 className="booking-card__title">{card.title}</h3>
                        <p className="booking-card__text">{card.text}</p>
                        <Link to={card.to} className="booking-card__btn">
                            {card.buttonText} <ArrowIcon />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Bookings;