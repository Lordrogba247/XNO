import './Welcome.css';
import restaurantImg from '../assets/restaurant.jpg';
import loungeImg from '../assets/lounge.jpg';
import nightlifeImg from '../assets/nightlife.jpg';
import logo from '../assets/logo3.png'
function Welcome() {
    const cards = [
        {
            img: restaurantImg,
            title: 'Restaurant',
            text: 'Savor flavorful dishes in a warm, welcoming environment with a touch of modern elegance',
            variant: 'light',
        },
        {
            img: loungeImg,
            title: 'Lounge',
            text: 'A lively space where connections, conversations flow and moments are filled with energy',
            variant: 'teal',
        },
        {
            img: nightlifeImg,
            title: 'Night Life',
            text: 'Enjoy exciting themed nights, music, vibrant and unforgettable experiences every time you visit',
            variant: 'dark',
        },
    ];

    return (
        <section className="welcome">
            <div className="welcome__text">
                <p className="welcome__eyebrow">Welcome to</p>
                {/* <h2 className="welcome__title">XNO</h2> */}
                <img src={logo} alt="XNO" className="navbar__icon welcome-img" />
                <p className="welcome__desc">
                    XNO Restaurant & Lounge is where great food, refreshing drinks, and
                    unforgettable moments come together. Designed for dining,
                    celebrations, and relaxation, we offer a premium yet welcoming
                    atmosphere perfect for birthdays, private events, themed nights, or
                    simply unwinding with friends. Every visit is crafted to deliver
                    exceptional hospitality in a stylish and vibrant setting.
                </p>
            </div>

            <div className="welcome__cards">
                {cards.map((card) => (
                    <div key={card.title} className={`welcome__card welcome__card--${card.variant}`}>
                        <img src={card.img} alt={card.title} className="welcome__card-img" />
                        <h3 className="welcome__card-title">{card.title}</h3>
                        <p className="welcome__card-text">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Welcome;