import { Link } from 'react-router-dom';
import './Membership.css';

function CheckIcon() {
    return (
        <svg
            className="perk__check"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 8.5L6.5 12L13 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function Membership() {
    const perks = [
        'Priority reservations and booth bookings',
        'Access to exclusive member-only events',
        'Special rewards and surprise perks',
        'Elevated hospitality every time you visit',
    ];

    return (
        <section className="membership">
            <div className="membership__container">
                <h1 className="membership__title">XNO Inner Circle</h1>
                <p className="membership__subtitle">
                    Membership details coming soon — here's a preview of what to expect
                </p>

                <div className="membership__perks">
                    {perks.map((perk, index) => (
                        <div key={index} className="perk">
                            <CheckIcon />
                            <p className="perk__text">{perk}</p>
                        </div>
                    ))}
                </div>

                <p className="membership__note">
                    Full membership details, pricing, and sign-up will be available
                    soon. Check back or reach out to us directly for more information.
                </p>

                <Link to="/contact" className="btn btn--primary">
                    Contact Us
                </Link>
            </div>
        </section>
    );
}

export default Membership;