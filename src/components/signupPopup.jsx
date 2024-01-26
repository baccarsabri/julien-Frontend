import "../styles/css/signup_popup.css";
import { Link } from "react-router-dom";

const SignUpPopup = () => {
    const hideWindow = () => {
        document.getElementById("signup_popup").style.display = "none"
        document.querySelector("body").style.overflow = "auto"
    }

    return (
        <section id="signup_popup">
            <form onSubmit={ e => e.preventDefault() }>
                <div id="img_wrapper">
                    <img onClick={ hideWindow } src="./cross.svg" alt="Cross" />
                </div>

                <h1>Join the Butt Talks family today.</h1>

                <label htmlFor="name">Name</label>
                <input placeholder="Placeholder" name="name" type="text" />

                <label htmlFor="email">Email</label>
                <input placeholder="Placeholder" name="email" type="email" />

                <label htmlFor="number">Phone Number</label>
                <input placeholder="Placeholder" name="number" type="text" />

                <Link to="/subscription">
                    <button className="join_button">Ready to join now</button>
                </Link>
            </form>
        </section>
    );
}

export default SignUpPopup;