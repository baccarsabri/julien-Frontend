import "../styles/css/membership_section.css";

const OfferCard = ({ title, cost, bestOffer, benefits }) => {
    return (
        <article className="offer_card">
            <div id="text">
                <h1>{ title }</h1>
                <h2>${ cost }/Month</h2>

                { bestOffer && <h1 id="best_value">Best Value</h1> }

                {
                    benefits.map(data => (
                        <span>
                            <img src="./check.svg" alt="Check" />
                            <p>{ data }</p>
                        </span>
                    ))
                }
            </div>

            <button className="join_button">Ready to join now</button>
        </article>
    );
}

const MembershipSection = () => {
    return (
        <section id="membership_section">
            <OfferCard
                title="Butt Talks Membership"
                cost="99"
                bestOffer={false}

                benefits={[
                    "Membership Access To Over 10+ Hours Of On-Demand Poop Health Training Videos.",
                    "Membership offerings for the membership level offered would be presented.",
                    "Membership offerings for the membership level offered would be presented."
                ]}
            />

            <OfferCard
                title="Butt Talks Membership"
                cost="80"
                bestOffer={true}

                benefits={[
                    "Membership offerings for the membership level offered would be presented.",
                    "Membership offerings for the membership level offered would be presented.",
                    "Membership offerings for the membership level offered would be presented."
                ]}
            />
        </section>
    );
}

export default MembershipSection;