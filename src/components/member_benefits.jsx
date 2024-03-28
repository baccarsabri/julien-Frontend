import { Link } from "react-router-dom";
import "../styles/css/benefits.css";

const card_list = [
    "Bimonthly One Hour Live Calls With Nurse Wong",
    "Access To Over 10+ Hours Of On-Demand Poop Health Training Videos",
    "Search Our App Database For All Of Our Pooping Health Tips & Tricks",
    "Full Access To Our App To Better Track Your Overall Health Goals",
    "Prizes & Giveaways to Community Members ONLY",
    "Yearly Nurse Wong Fan Meet Ups",
    "Special Industry Guest Speakers To Help You Heal",
    "Amazing Community Team Support Here To Serve You",
    "Connect With Thousands Of Butt Talks Members Globally"
]

const Card = ({ text }) => {
    return (
        <div className="card">
            <img src="./check.svg" alt="Check" />
            <p>{text}</p>
        </div>
    );
}

const MemberBenefits = () => {
    return (
        <section id="benefits_section">
            <h1>Member Benefits</h1>

            <div id="card_wrapper">
                {
                    card_list.map(data => <Card text={data} />)
                }
            </div>

            <Link to="/subscription">
                <button className="join_button">Ready to join now</button>
            </Link>
        </section>
    );
}

export default MemberBenefits;