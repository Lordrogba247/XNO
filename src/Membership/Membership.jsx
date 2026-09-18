import "./Membership.css";
import Chair from "../assets/chair.png";
const PERKS = [
    {
        title: "Skip the Line",
        desc: "Bypass the general admission line and enjoy priority entry anytime",
    },
    {
        title: "Complimentary Entry",
        desc: "Free entry for you and one additional guest — Member +1",
    },
    {
        title: "VIP Concierge",
        desc: "Direct access to your venue host for last-minute booths and premium reservations.",
        note: "(based on availability)",
    },
    {
        title: "Private VIP Access",
        desc: "Enjoy access to a separate VIP area away from the main dance floor",
    },
    {
        title: "Exclusive Discounts",
        desc: "Enjoy up to 20% off selected food and drinks.",
    },
    {
        title: "Luxury Vacation",
        desc: "Members will be automatically drawn into a raffle for an all inclusive vacation and one additional guest — Member +1",
    },
    {
        title: "Members-Only Events",
        desc: "Get exclusive access to premium events reserved for XNO members.",
    },
    {
        title: "VIP Access Card",
        desc: "Your membership card will be mailed to you, or available for pickup at the venue.",
    },
];

const FEES = [
    {
        amount: "$50",
        caption: "Initiation fee (one time fee; waived for a limited time)",
    },
    {
        amount: "$600",
        caption: "Paid annually",
    },
];

function MedalIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 1.5l1.322 2.68l2.958.43l-2.14 2.085l.505 2.946L12 17.25l-2.645 1.39l.505-2.945l-2.14-2.086l2.958-.43zM18 2v3l-1.363 1.138A9.9 9.9 0 0 0 13 5.049V2zm-7-.001v3.05a9.9 9.9 0 0 0-3.636 1.088L6 5V2z" />
        </svg>
    );
}

function PerkCard({ index, title, desc, note }) {
    const number = String(index + 1).padStart(2, "0");

    return (
        <li className="mp-card">
            <span className="mp-card__number" aria-hidden="true">
                {number}
            </span>
            <h2 className="mp-card__title">{title}</h2>
            <p className="mp-card__desc">
                {desc}
                {note && (
                    <>
                        {" "}
                        <span className="mp-card__note">{note}</span>
                    </>
                )}
            </p>
        </li>
    );
}

export default function MembershipPerks({
    throneSrc = Chair,
    onBecomeMember,
}) {
    return (
        <main className="mp">
            <div className="mp__inner">
                <header className="mp-header">
                    <img
                        className="mp-header__throne"
                        src={throneSrc}
                        alt=""
                        width="132"
                        height="132"
                    />
                    <h1 className="mp-header__title">Membership Perks</h1>
                </header>

                <ol className="mp-grid" style={{ listStyle: "none" }}>
                    {PERKS.map((perk, i) => (
                        <PerkCard key={perk.title} index={i} {...perk} />
                    ))}
                </ol>

                <section className="mp-fees" aria-label="Membership fees">
                    <h2 className="mp-fees__label">Fees</h2>
                    {FEES.map((fee) => (
                        <div className="mp-fees__item" key={fee.amount}>
                            <span className="mp-fees__amount">{fee.amount}</span>
                            <p className="mp-fees__caption">{fee.caption}</p>
                        </div>
                    ))}
                </section>

                <button type="button" className="mp-cta" onClick={onBecomeMember}>
                    To Become a Member
                    <MedalIcon />
                </button>

                <p className="mp-contact">
                    Visit the Lounge at XNO - 1800 Davenport Road, Toronto, ON M6N 4X3 or
                    Contact us Via <a href="tel:+19052660331">+1 905-266-0331</a> or Send
                    us a mail - <a href="mailto:xnoinc@gmail.com">xnoinc@gmail.com</a>
                </p>

                <p className="mp-terms">Kindly Note that Terms &amp; Conditions apply</p>
            </div>
        </main>
    );
}