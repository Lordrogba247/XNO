import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu whenever the route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Prevent background scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const solidBg = !isHome || scrolled || menuOpen;

    return (
        <nav className={`navbar ${solidBg ? 'navbar--solid' : ''}`}>
            <div className="navbar__logo">
                <Link to="/"><img src={logo} alt="XNO" className="navbar__icon" /></Link>
            </div>

            <ul className="navbar__links">
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/bookings">Bookings</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>

            <button
                className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`navbar__mobile-links ${menuOpen ? 'navbar__mobile-links--open' : ''}`}>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/bookings">Bookings</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;