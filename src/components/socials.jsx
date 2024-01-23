import "../styles/css/socials.css";

const Socials = () => {
    return (
        <section id="socials_section">
            <h1>Socials</h1>

            <span>
                <div className="col">
                    <img src="./zoom_logo.png" alt="Zoom" />
                    <h3>Weekly Zoom meetings</h3>
                </div>

                <div className="col">
                    <img src="./discord_logo.png" alt="Discord" />
                    <h3>Access to Discord</h3>
                </div>

                <div className="col">
                    <img src="./facebook_logo.png" alt="Facebook" />
                    <h3>Facebook community</h3>
                </div>
            </span>
        </section>
    );
}

export default Socials;