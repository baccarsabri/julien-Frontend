import "../styles/css/membership_section.css";
import axios from "axios";
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const OfferCard = ({ title, cost, saveOffer, benefits }) => {
    const toCheckout = async () => {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`);
        console.log(response);
        window.location.href = response.data.url;




    }
    return (
        <article className="offer_card">
            <div id="text">
                <h1>{title}</h1>
                <h2>Only $30 per month</h2>

                {saveOffer && <h1 id="save_offer">Save 40%</h1>}
                <h3>Regular price: $75</h3>

                {
                    benefits.map(data => (
                        <span>
                            <img src="./check.svg" alt="Check" />
                            <p>{data}</p>
                        </span>
                    ))
                }
            </div>

            <button className="join_button" onClick={() => toCheckout()}>Ready to join now</button>
        </article>
    );
}

const MembershipSection = () => {
    return (
        <section id="membership_section" >
            <OfferCard
                title="Butt Talks Membership"
                cost="80"
                saveOffer={true}

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