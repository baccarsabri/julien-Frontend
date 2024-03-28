import { Link } from "react-router-dom";
import "../styles/css/zoomMeetings.css";

const ZoomMeetings = ({ handleClick, verify }) => {
    const toMembership = () => {
        // Call the function passed as a prop
        handleClick();
    };
    return (
        <section id="zoom_section">
            <h1>Zoom Meeting</h1>

            <span>
                <div>
                    <h1>Community</h1>
                    <p>Join us to listen to Nurse Wong bimonthly to learn more about your poop health. She will answer all your questions and help come up with an effective plan to help solve all your pooping problem. You are not suffering alone.</p>
                </div>

                <img src="./zoom_meeting.png" alt="Zoom Meeting" />
            </span>


            {verify === true ? (
                <button className="join_button" onClick={toMembership}>Ready to join now</button>
            ) : (
                <Link to="/subscription">
                    <button className="join_button">Ready to join now</button>
                </Link>
            )
            }

        </section>
    );
}

export default ZoomMeetings;