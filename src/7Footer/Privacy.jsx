import "./PrivacyPolicy.css";

const EFFECTIVE_DATE = "September 18, 2026";

/*
  Content model
  { type: "p" }      regular paragraph
  { type: "strong" } bold paragraph
  { type: "label" }  small sub-label above a list
  { type: "ul" }     bulleted list
*/
const sections = [
    {
        title: "1. Information We Collect",
        blocks: [
            { type: "p", text: "Depending on how you interact with XNO, we may collect:" },
            { type: "label", text: "Information You Provide" },
            {
                type: "ul",
                items: [
                    "First and last name",
                    "Email address",
                    "Phone number",
                    "Reservation and booking details",
                    "Event or private-booking requirements",
                    "Membership information",
                    "Communications you send to us",
                    "Other information you voluntarily provide through our website or at the venue",
                ],
            },
            { type: "label", text: "Information Collected Automatically" },
            {
                type: "p",
                text: "When you visit our website, certain technical information may be collected automatically, including:",
            },
            {
                type: "ul",
                items: [
                    "IP address",
                    "Browser and device information",
                    "Pages visited",
                    "Website activity and interactions",
                    "Date and time of visits",
                    "Referring website or source",
                ],
            },
            {
                type: "p",
                text: "This information may be collected through cookies, analytics tools and similar technologies.",
            },
        ],
    },
    {
        title: "2. How We Use Your Information",
        blocks: [
            { type: "p", text: "We may use your personal information to:" },
            {
                type: "ul",
                items: [
                    "Process and manage reservations and bookings",
                    "Respond to enquiries and requests",
                    "Manage XNO memberships",
                    "Provide membership benefits and communications",
                    "Contact you regarding your reservation or event",
                    "Send information about events, promotions and special offers where permitted",
                    "Improve our website, services and customer experience",
                    "Maintain website security and prevent misuse",
                    "Process transactions where applicable",
                    "Meet legal, regulatory or operational requirements",
                ],
            },
            {
                type: "p",
                text: "We collect and use personal information only for identified and reasonable purposes and seek consent where required.",
            },
        ],
    },
    {
        title: "3. Reservations and Private Bookings",
        blocks: [
            {
                type: "p",
                text: "When you submit a booking request through our website, the information you provide may be used to contact you regarding your requested reservation, event or private booking.",
            },
            {
                type: "p",
                text: "Submitting a booking form does not necessarily guarantee a reservation. A booking becomes confirmed only when XNO provides confirmation through the applicable booking process.",
            },
        ],
    },
    {
        title: "4. Membership Information",
        blocks: [
            {
                type: "p",
                text: "If you apply for or participate in XNO Membership, we may collect information necessary to administer your membership, including your contact details and membership status.",
            },
            {
                type: "p",
                text: "Membership information may be used to provide membership benefits, communicate membership-related information and administer member events, promotions, rewards or other benefits.",
            },
            {
                type: "p",
                text: "Where a membership includes promotional activities, raffles or prizes, additional terms may apply.",
            },
        ],
    },
    {
        title: "5. Payments",
        blocks: [
            {
                type: "p",
                text: "Where payments are made through our website or a third-party payment provider, payment information may be processed by the applicable payment service provider.",
            },
            {
                type: "p",
                text: "XNO does not intend to retain complete payment-card information on its own systems unless specifically required and lawfully permitted.",
            },
            {
                type: "p",
                text: "Third-party payment providers may have their own privacy policies and terms governing their services.",
            },
        ],
    },
    {
        title: "6. Cookies and Analytics",
        blocks: [
            { type: "p", text: "Our website may use cookies and similar technologies to:" },
            {
                type: "ul",
                items: [
                    "Keep the website functioning properly",
                    "Understand how visitors use the website",
                    "Improve website performance",
                    "Remember certain preferences",
                    "Measure website traffic and engagement",
                ],
            },
            {
                type: "p",
                text: "You may be able to control cookies through your browser settings. Disabling certain cookies may affect some website functionality.",
            },
        ],
    },
    {
        title: "7. Sharing Your Information",
        blocks: [
            {
                type: "p",
                text: "We may share personal information with trusted service providers where reasonably necessary to operate our business, such as:",
            },
            {
                type: "ul",
                items: [
                    "Booking and reservation providers",
                    "Payment processors",
                    "Website hosting and technology providers",
                    "Email and communication services",
                    "Analytics providers",
                    "Event or membership service providers",
                ],
            },
            {
                type: "p",
                text: "We may also disclose information where required or permitted by law, or where necessary to protect our rights, property, customers or the security of our services.",
            },
            {
                type: "p",
                text: "We do not sell your personal information as part of our ordinary business operations.",
            },
        ],
    },
    {
        title: "8. Protection of Personal Information",
        blocks: [
            {
                type: "p",
                text: "We take reasonable administrative, technical and organizational measures to protect personal information against unauthorized access, loss, misuse, disclosure or alteration.",
            },
            {
                type: "p",
                text: "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
            },
        ],
    },
    {
        title: "9. Retention of Information",
        blocks: [
            {
                type: "p",
                text: "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, to provide our services, maintain business records, resolve disputes, comply with legal obligations or otherwise as permitted by law.",
            },
            {
                type: "p",
                text: "Canadian privacy principles include limiting the collection, use, disclosure and retention of personal information and maintaining appropriate safeguards.",
            },
        ],
    },
    {
        title: "10. Your Privacy Rights",
        blocks: [
            { type: "p", text: "Subject to applicable law, you may have the right to:" },
            {
                type: "ul",
                items: [
                    "Request access to personal information we hold about you",
                    "Request correction of inaccurate or incomplete information",
                    "Ask questions about how your information is collected or used",
                    "Withdraw consent where applicable",
                    "Raise concerns about our handling of your personal information",
                ],
            },
            {
                type: "p",
                text: "The Office of the Privacy Commissioner of Canada notes that individuals may request access to personal information held by businesses and challenge its accuracy.",
            },
        ],
    },
    {
        title: "11. Marketing Communications",
        blocks: [
            {
                type: "p",
                text: "If you receive promotional emails or other marketing communications from us, you may unsubscribe using the unsubscribe option provided in the communication or by contacting us directly.",
            },
            {
                type: "p",
                text: "Unsubscribing from marketing communications will not prevent us from sending service-related communications, such as information relating to a reservation or membership.",
            },
        ],
    },
    {
        title: "12. Third-Party Websites",
        blocks: [
            {
                type: "p",
                text: "Our website may contain links to third-party websites, social media platforms, booking services or other external services.",
            },
            {
                type: "p",
                text: "XNO is not responsible for the privacy practices, content or security of third-party websites. We encourage you to review their privacy policies before providing personal information.",
            },
        ],
    },
    {
        title: "13. Children's Privacy",
        blocks: [
            {
                type: "p",
                text: "Our website and services are not intended to knowingly collect personal information from children.",
            },
            {
                type: "p",
                text: "Where age restrictions apply to particular events, services or venue activities, guests are responsible for meeting the applicable age requirements.",
            },
        ],
    },
    {
        title: "14. Changes to This Privacy Policy",
        blocks: [
            {
                type: "p",
                text: "We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements or privacy practices. The updated version will be posted on this website with the revised effective date.",
            },
        ],
    },
    {
        title: "15. Contact Us",
        blocks: [
            {
                type: "p",
                text: "If you have questions, concerns or requests regarding this Privacy Policy or your personal information, please contact us:",
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

export default function PrivacyPolicy() {
    return (
        <main className="pp-page">
            <article className="pp-card">
                <h1 className="pp-title">Privacy Policy</h1>

                <div className="pp-intro">
                    <p className="pp-date">Effective Date: {EFFECTIVE_DATE}</p>
                    <p className="pp-strong">
                        XNO Restaurant &amp; Lounge (&ldquo;XNO&rdquo;, &ldquo;we&rdquo;,
                        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is
                        committed to protecting the personal information you provide when
                        using our website, making a reservation, contacting us, attending
                        our venue, or participating in our membership program.
                    </p>
                    <p className="pp-strong">
                        This Privacy Policy explains how we collect, use, disclose and
                        protect your information.
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