import "../styles/css/landing.css";
import BlobbedBackground from "../utils/blobbedBackground";

import { showWindow } from "../utils/functions";

const Landing = () => {
    return (
        <BlobbedBackground id="landing_section" section_type="section">
            <h1>Join The Butt Talks Community</h1>
            <h3>Super Charge Your Poop Health</h3>

            <div id="video">
                <img src="./play.png" />
            </div>

            <button onClick={ showWindow } className="join_button">Ready to join now</button>
        </BlobbedBackground>
    );
}

export default Landing;