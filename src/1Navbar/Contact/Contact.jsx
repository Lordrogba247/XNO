import { useState } from 'react';
import ContactUs from '../../6Contact/ContactUs';
import './Contact.css';

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

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
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
                    subject: 'New Contact Message - XNO',
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
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
                    message: '',
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <>
            <section className="contact-page">
                <div className="contact-page__text">
                    <h1 className="contact-page__title">Get in Touch</h1>
                    <p className="contact-page__desc">
                        Have a question, feedback, or just want to say hi? Reach out and
                        our team will get back to you as soon as possible
                    </p>
                </div>

                <form className="contact-page__form" onSubmit={handleSubmit}>
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
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Type here..."
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn--dark" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send message'} <ArrowIcon />
                    </button>

                    {status === 'success' && (
                        <p className="form-status form-status--success">
                            Message sent! We'll get back to you soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="form-status form-status--error">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </section>

            <ContactUs />
        </>
    );
}

export default Contact;