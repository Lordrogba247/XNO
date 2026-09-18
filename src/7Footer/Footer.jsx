import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-bottom">
            <p className="footer-bottom__copyright">
                &copy; 2026. XNO Restaurant &amp; Lounge
            </p>

            <ul className="footer-bottom__links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-use">Term of use</Link></li>
            </ul>
        </div>
    );
}

export default Footer;