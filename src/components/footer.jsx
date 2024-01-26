import "../styles/css/footer.css";
import BlobbedBackground from "../utils/blobbedBackground";

const Footer = () => {
    return (
        <BlobbedBackground id="" section_type="footer">
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
        </BlobbedBackground>
    );
}

export default Footer;