// Reuses the exact same styles as the Privacy Policy page.
import "./PrivacyPolicy.css";

const EFFECTIVE_DATE = "September 18, 2026";

const sections = [
    {
        title: "1. About XNO",
        blocks: [
            {
                type: "p",
                text: "XNO Restaurant & Lounge is a hospitality and entertainment venue offering restaurant, lounge, nightlife, event, reservation and membership experiences.",
            },
            {
                type: "p",
                text: "Information displayed on this website is provided for general information and may be updated or changed from time to time.",
            },
        ],
    },
    {
        title: "2. Website Use",
        blocks: [
            { type: "p", text: "You agree to use this website only for lawful purposes." },
            { type: "p", text: "You must not:" },
            {
                type: "ul",
                items: [
                    "Use the website for fraudulent or unlawful purposes",
                    "Provide false or misleading information",
                    "Attempt to gain unauthorized access to the website or its systems",
                    "Interfere with the operation or security of the website",
                    "Copy, reproduce or exploit website content without permission",
                    "Use the website in a way that could harm XNO, its customers or its systems",
                ],
            },
        ],
    },
    {
        title: "3. Reservations and Bookings",
        blocks: [
            {
                type: "p",
                text: "Submitting a reservation or private-booking request through the website does not automatically guarantee a confirmed booking.",
            },
            {
                type: "p",
                text: "Reservations are subject to availability and may require confirmation by XNO.",
            },
            {
                type: "p",
                text: "XNO reserves the right to contact you for additional information or clarification regarding a booking request.",
            },
            {
                type: "p",
                text: "Certain reservations, events, booths or private bookings may be subject to separate terms, minimum spends, deposits, cancellation policies or other requirements.",
            },
        ],
    },
    {
        title: "4. Private Events",
        blocks: [
            {
                type: "p",
                text: "Private bookings may be subject to specific arrangements agreed between XNO and the customer.",
            },
            {
                type: "p",
                text: "Customers are responsible for providing accurate information regarding:",
            },
            {
                type: "ul",
                items: [
                    "Event date",
                    "Number of guests",
                    "Type of event",
                    "Required services",
                    "Special requests",
                    "Food and beverage requirements",
                ],
            },
            {
                type: "p",
                text: "Additional charges may apply for special requests, services or arrangements.",
            },
        ],
    },
    {
        title: "5. XNO Membership",
        blocks: [
            {
                type: "p",
                text: "XNO Membership provides eligible members with access to selected benefits advertised by XNO.",
            },
            { type: "p", text: "Membership benefits may include:" },
            {
                type: "ul",
                items: [
                    "Priority or expedited entry",
                    "Complimentary entry for the member and one guest",
                    "VIP concierge access",
                    "Access to designated VIP areas",
                    "Eligible food and beverage discounts",
                    "Access to members-only events",
                    "Participation in applicable member promotions or raffles",
                    "XNO membership access card",
                ],
            },
            {
                type: "p",
                text: "Membership benefits are subject to availability, venue capacity, event restrictions and applicable terms.",
            },
            {
                type: "p",
                text: "XNO reserves the right to modify, suspend or discontinue a membership benefit where reasonably necessary.",
            },
        ],
    },
    {
        title: "6. Membership Card",
        blocks: [
            {
                type: "p",
                text: "Membership access cards may be mailed to members or made available for collection at the venue.",
            },
            {
                type: "p",
                text: "Members may be required to present their membership card and/or valid identification when claiming membership benefits.",
            },
            {
                type: "p",
                text: "Membership cards are personal and should not be transferred, sold or loaned to another person unless expressly permitted by XNO.",
            },
            { type: "p", text: "Lost or damaged cards should be reported to XNO." },
        ],
    },
    {
        title: "7. Discounts",
        blocks: [
            {
                type: "p",
                text: "Membership discounts apply only to eligible purchases and services identified by XNO.",
            },
            { type: "p", text: "Unless otherwise stated, discounts:" },
            {
                type: "ul",
                items: [
                    "Cannot be combined with other promotions",
                    "May not apply to special events or promotional items",
                    "May be subject to exclusions or minimum requirements",
                    "Cannot be exchanged for cash",
                ],
            },
            {
                type: "p",
                text: "XNO may change the terms or eligible items associated with membership discounts.",
            },
        ],
    },
    {
        title: "8. Member Raffle and Promotions",
        blocks: [
            {
                type: "p",
                text: "Where XNO offers a member raffle, vacation promotion or other prize promotion, eligibility and participation will be subject to the specific rules published for that promotion.",
            },
            {
                type: "p",
                text: "Prizes, eligibility requirements, entry periods, restrictions and other conditions may vary by promotion.",
            },
            { type: "p", text: "Additional official contest or promotion rules may apply." },
        ],
    },
    {
        title: "9. Events and Entry",
        blocks: [
            {
                type: "p",
                text: "Event admission may be subject to capacity limits, age requirements, dress codes, security procedures, event-specific rules and applicable admission requirements. XNO reserves the right to refuse admission or remove a guest where reasonably necessary to maintain safety, security or an appropriate environment. Any applicable admission fees, event charges or reservation requirements will be communicated through the applicable booking or event process.",
            },
        ],
    },
    {
        title: "10. Guest Conduct",
        blocks: [
            {
                type: "p",
                text: "Guests are expected to behave respectfully and responsibly while visiting XNO.",
            },
            {
                type: "p",
                text: "Harassment, violence, threatening behaviour, property damage, illegal activity or conduct that creates a safety risk may result in refusal of entry or removal from the venue. Guests may also be responsible for damage they cause to XNO property.",
            },
        ],
    },
    {
        title: "11. Age Requirements",
        blocks: [
            {
                type: "p",
                text: "Certain services, events and activities at XNO may be subject to minimum-age requirements under applicable law and venue policy.",
            },
            {
                type: "p",
                text: "Guests may be required to provide valid government-issued identification where age verification is necessary.",
            },
        ],
    },
    {
        title: "12. Website Content",
        blocks: [
            {
                type: "p",
                text: "We make reasonable efforts to keep information on the website accurate and current.",
            },
            {
                type: "p",
                text: "However, menus, prices, events, promotions, operating hours, availability, membership benefits and other information may change without notice. Website images are provided for illustrative and promotional purposes and may not always represent the exact experience, menu item, setup or event.",
            },
        ],
    },
    {
        title: "13. Intellectual Property",
        blocks: [
            {
                type: "p",
                text: "All content on this website, including but not limited to:",
            },
            {
                type: "ul",
                items: [
                    "XNO branding",
                    "Logos",
                    "Text",
                    "Photographs",
                    "Graphics",
                    "Videos",
                    "Designs",
                    "Layouts",
                    "Promotional materials",
                ],
            },
            { type: "p", text: "is owned by or licensed to XNO unless otherwise stated." },
            {
                type: "p",
                text: "You may not reproduce, modify, distribute, publish or commercially exploit XNO website content without prior written permission.",
            },
        ],
    },
    {
        title: "14. Third-Party Services",
        blocks: [
            {
                type: "p",
                text: "The website may use or link to third-party services, including booking platforms, payment providers, social media platforms, maps, analytics services and other technology providers.",
            },
            {
                type: "p",
                text: "Third-party services may have their own terms and privacy policies. XNO is not responsible for the operation or policies of independent third-party services.",
            },
        ],
    },
    {
        title: "15. Limitation of Liability",
        blocks: [
            {
                type: "p",
                text: "To the extent permitted by applicable law, XNO will not be responsible for losses arising from:",
            },
            {
                type: "ul",
                items: [
                    "Temporary website unavailability",
                    "Technical errors or interruptions",
                    "Reliance on outdated website information",
                    "Third-party websites or services",
                    "Events or circumstances outside XNO's reasonable control",
                ],
            },
            {
                type: "p",
                text: "Nothing in these Terms is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law.",
            },
        ],
    },
    {
        title: "16. Changes to These Terms",
        blocks: [
            { type: "p", text: "XNO may update these Terms from time to time." },
            {
                type: "p",
                text: "Updated Terms will be posted on this website with a revised effective date. Your continued use of the website after an update constitutes acceptance of the updated Terms to the extent permitted by law.",
            },
            {
                type: "p",
                text: "Ontario's Electronic Commerce Act recognizes electronic contracts and provides that a contract is not invalid merely because it is in electronic form.",
            },
        ],
    },
    {
        title: "17. Governing Law",
        blocks: [
            {
                type: "p",
                text: "These Terms will be governed by the laws applicable in the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict-of-law principles.",
            },
            {
                type: "p",
                text: "Any dispute will be handled in accordance with applicable laws and the jurisdiction of the appropriate courts.",
            },
        ],
    },
    {
        title: "18. Contact Us",
        blocks: [
            {
                type: "p",
                text: "For questions regarding these Terms, please contact:",
            },
            {
                type: "address",
                lines: [
                    "XNO Restaurant & Lounge  1800 Davenport Road, Toronto, ON M6N 4X3, Canada",
                    "Phone: +1 905-266-0331",
                    "Email: xnoinc@gmail.com",
                ],
            },
        ],
    },
];

function Block({ block }) {
    switch (block.type) {
        case "strong":
            return <p className="pp-strong">{block.text}</p>;
        case "label":
            return <p className="pp-label">{block.text}</p>;
        case "ul":
            return (
                <ul className="pp-list">
                    {block.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            );
        case "address":
            return (
                <address className="pp-address">
                    {block.lines.map((line) => (
                        <p key={line} className="pp-strong">
                            {line}
                        </p>
                    ))}
                </address>
            );
        default:
            return <p className="pp-text">{block.text}</p>;
    }
}

export default function TermsOfUse() {
    return (
        <main className="pp-page">
            <article className="pp-card">
                <h1 className="pp-title">Terms of Use</h1>

                <div className="pp-intro">
                    <p className="pp-date">Effective Date: {EFFECTIVE_DATE}</p>
                    <p className="pp-strong">
                        Welcome to the XNO Restaurant &amp; Lounge website. These Terms of
                        Use (&ldquo;Terms&rdquo;) govern your use of the XNO website and
                        your interaction with our online booking, membership and related
                        services.
                    </p>
                    <p className="pp-strong">
                        By accessing or using this website, you agree to these Terms.
                    </p>
                </div>

                {sections.map((section) => (
                    <section key={section.title} className="pp-section">
                        <h2 className="pp-heading">{section.title}</h2>
                        {section.blocks.map((block, i) => (
                            <Block key={i} block={block} />
                        ))}
                    </section>
                ))}
            </article>
        </main>
    );
}