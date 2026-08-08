import './Member.css';
import chairImg from '../assets/chair.png';

function CrownIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 1.5l1.322 2.68l2.958.43l-2.14 2.085l.505 2.946L12 17.25l-2.645 1.39l.505-2.945l-2.14-2.086l2.958-.43zM18 2v3l-1.363 1.138A9.9 9.9 0 0 0 13 5.049V2zm-7-.001v3.05a9.9 9.9 0 0 0-3.636 1.088L6 5V2z" />
        </svg>

    );
}

function Member() {
    return (
        <section className="member">
            <div className="member__text">
                <h2 className="member__title">BE A MEMBER</h2>
                <p className="member__desc">
                    Unlock the XNO Inner Circle and enjoy priority reservations,
                    exclusive events, special rewards, and elevated hospitality every
                    time you visit
                </p>
                <button className="btn btn--primary">
                    Become a Member <CrownIcon />
                </button>
            </div>

            <div className="member__image-wrap">
                <div className="member__glow"></div>
                <img src={chairImg} alt="Royal chair" className="member__image" />
            </div>
        </section>
    );
}

export default Member;