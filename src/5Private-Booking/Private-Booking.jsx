import { useState } from 'react';
import './PrivateBooking.css';

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

function PrivateBooking() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        description: '',
    });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'a2ab2ad4-6fa5-4fbb-bc2d-d74afdbf943f', // replace with your real Web3Forms key
                    subject: 'New Private Booking Request - XNO',
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    phone: formData.phone,
                    email: formData.email,
                    description: formData.description,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    description: '',
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="private-booking">
            <div className="private-booking__text">
                <h2 className="private-booking__title">Private Bookings</h2>
                <p className="private-booking__desc">
                    Celebrate your next birthday, family dinner, social gathering, or
                    special event in a space designed for memorable experiences
                </p>
                <p className="private-booking__note">
                    If you want bottle service kindly include in the description of
                    your reservation
                </p>
            </div>

            <form className="private-booking__form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Type here..."
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Type here..."
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Type here..."
                            value={formData.phone}
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
                            placeholder="Type here..."
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Booking description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Type here..."
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn--dark" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Book now'} <ArrowIcon />
                </button>

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
        </section>
    );
}

export default PrivateBooking;