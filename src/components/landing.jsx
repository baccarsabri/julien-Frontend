import { Link } from "react-router-dom";
import "../styles/css/landing.css";
import BlobbedBackground from "../utils/blobbedBackground";

import { showWindow } from "../utils/functions";

const Landing = () => {
    return (
        <BlobbedBackground id="landing_section" section_type="section">
            <h1>Join The Butt Talks Community</h1>
            <h3>Super Charge Your Poop Health</h3>

            <div id="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XjUvB4mPJI0" frameborder="0" allowfullscreen></iframe>
            </div>

            <Link to="/subscription">
                <button className="join_button">Ready to join now</button>
            </Link>
        </BlobbedBackground>
    );
}

export default Landing;