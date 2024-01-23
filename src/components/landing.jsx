import "../styles/css/landing.css";

const Landing = () => {
    return (
        <section id="landing_section" className="blobed_background">
            <img src="./bg_blob1.svg" className="bg_blob"></img>
            <img src="./bg_blob2.svg" className="bg_blob"></img>
            <img src="./bg_blob3.svg" className="bg_blob"></img>
            <img src="./bg_blob4.svg" className="bg_blob"></img>
            <img src="./bg_blob5.svg" className="bg_blob"></img>

            <h1>Join The Butt Talks Community</h1>
            <h3>Super Charge Your Poop Health</h3>

            <div id="video">
                <img src="./play.png" />
            </div>

            <button className="join_button">Ready to join now</button>
        </section>
    );
}

export default Landing;