import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg1 from '../assets/herobg.png';
import heroBg2 from '../assets/herobg2.png';
import heroBg3 from '../assets/herobg3.png';

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
    const slides = [heroBg1, heroBg2, heroBg3];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="hero">
            <div className="hero__carousel">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero__slide ${index === current ? 'hero__slide--active' : ''}`}
                        style={{ backgroundImage: `url(${slide})` }}
                    ></div>
                ))}
            </div>

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
                        Reserve a Table <ArrowIcon />
                    </Link>
                    <Link to="/events" className="btn btn--outline">
                        View Events <ArrowIcon />
                    </Link>
                </div>
            </div>

            <div className="hero__dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero__dot ${index === current ? 'hero__dot--active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
}

export default Hero;