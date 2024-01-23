import "../styles/css/zoomMeetings.css";

const ZoomMeetings = () => {
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

            <button className="join_button">Ready to join now</button>
        </section>
    );
}

export default ZoomMeetings;