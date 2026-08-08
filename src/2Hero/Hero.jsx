import { Link } from 'react-router-dom';
import './Hero.css';
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
function Hero() {
    return (
        <section className="hero">
            <div className="hero__overlay"></div>

            <div className="hero__content">
                <h1 className="hero__title">
                    <span>Restaurant.</span>
                    <span>Lounge.</span>
                    <span>Nightlife.</span>
                </h1>

                <p className="hero__subtitle">...for those who know</p>

                <div className="hero__actions">
                    <Link to="/bookings" className="btn btn--primary">
                        Reserve a Booth <span className="btn__arrow"><ArrowIcon /></span>
                    </Link>
                    <Link to="/events" className="btn btn--outline">
                        View Events <span className="btn__arrow"><ArrowIcon /></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;