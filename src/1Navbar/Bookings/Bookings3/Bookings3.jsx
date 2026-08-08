import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bookings3.css';

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

function EventBooking() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        date: '',
        email: '',
        boothReservation: false,
        bottleService: false,
    });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'YOUR_ACCESS_KEY_HERE', // replace with your real Web3Forms key
                    subject: 'New Event Booking - XNO',
                    full_name: formData.fullName,
                    phone: formData.phone,
                    date: formData.date,
                    email: formData.email,
                    booth_reservation: formData.boothReservation ? 'Yes ($50.00)' : 'No',
                    bottle_service: formData.bottleService ? 'Yes ($120.00)' : 'No',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({
                    fullName: '',
                    phone: '',
                    date: '',
                    email: '',
                    boothReservation: false,
                    bottleService: false,
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="event-booking">
            <div className="event-booking__container">
                <h1 className="event-booking__title">Event Booking</h1>

                <form className="event-booking__form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Type here.."
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Type here.."
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Type here.."
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="event-booking__addons">
                        <label className="checkbox-row">
                            <span>Booth Reservation&nbsp;&nbsp;($50.00)</span>
                            <input
                                type="checkbox"
                                name="boothReservation"
                                checked={formData.boothReservation}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="checkbox-row">
                            <span>Bottle Service ($120.00)</span>
                            <input
                                type="checkbox"
                                name="bottleService"
                                checked={formData.bottleService}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <button type="submit" className="btn btn--dark" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Book now'} <ArrowIcon />
                    </button>

                    <p className="event-booking__terms">
                        By clicking the book now you agree to our{' '}
                        <Link to="/terms-of-use">Terms of Use</Link> and declare that you
                        are <span className="event-booking__highlight">18+</span> and
                        would be willing to tender your Ids when requested
                    </p>

                    {status === 'success' && (
                        <p className="form-status form-status--success">
                            Booking request sent! We'll be in touch soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="form-status form-status--error">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default EventBooking;