import "../styles/css/footer.css";

const Footer = () => {
    return (
        <footer className="blobed_background">
            <img src="./bg_blob1.svg" className="bg_blob"></img>
            <img src="./bg_blob2.svg" className="bg_blob"></img>
            <img src="./bg_blob3.svg" className="bg_blob"></img>
            <img src="./bg_blob4.svg" className="bg_blob"></img>
            <img src="./bg_blob5.svg" className="bg_blob"></img>
            
            <h1>Obtain Your Poop Guide</h1>
            <h3>Get your FREE 10 Poop Commandments</h3>

            <p>Sign up below for EXCLUSIVE Butt Talks content and early access. Starting with a FREE copy of the <u>10 Poop Commandments Poster</u> right to your inbox!</p>

            <span>
                <div className="input_wrapper">
                    <label htmlFor="name">Name</label>
                    <input placeholder="Placeholder" name="name" type="text" />
                </div>

                <div className="input_wrapper">
                    <label htmlFor="email">Email address</label>
                    <input placeholder="Placeholder" name="email" type="email" />
                </div>
            </span>

            <button className="join_button">Ready to join now</button>
        </footer>
    );
}

export default Footer;