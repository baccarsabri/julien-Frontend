import "../styles/css/testimonials.css";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

const testData = [
    {
        "quote": "I love it.",
        "text": "Nurse Wong has been the absolute light in my darkness when it came to solving my butt health. She taught me everything I needed to know to solve my pooping problems while making me feel comfortable about sharing what was going on. Thanks!",
        "name": "Jackie"
    },

    {
        "quote": "Fantastic!",
        "text": "Butt Talks & Nurse Wong are the best! If you want to learn about how to solve your poop health problems. She is the person for you. I would highly recommend.",
        "name": "Lance"
    },

    {
        "quote": "Highly recommended.",
        "text": "Thank You, Thank You, Thank You. I had no one to talk to about my butt problems and was too embarrassed to tell my family. Nurse Wong was able to not only resolve all my health problems. She taught me it was ok and I am not the only one suffering from this. ",
        "name": "Mary"
    },

    {
        "quote": "Fantastic!",
        "text": "Butt Talks & Nurse Wong are the best! If you want to learn about how to solve your poop health problems. She is the person for you. I would highly recommend.",
        "name": "Lance"
    },

    {
        "quote": "I love it.",
        "text": "Nurse Wong has been the absolute light in my darkness when it came to solving my butt health. She taught me everything I needed to know to solve my pooping problems while making me feel comfortable about sharing what was going on. Thanks!",
        "name": "Jackie"
    },

    {
        "quote": "Highly recommended.",
        "text": "Thank You, Thank You, Thank You. I had no one to talk to about my butt problems and was too embarrassed to tell my family. Nurse Wong was able to not only resolve all my health problems. She taught me it was ok and I am not the only one suffering from this. ",
        "name": "Mary"
    },
]

const TestimonialCard = ({ quote, text, name }) => {
    return (
        <div className="item">
            <span id="stars">
                <img src="./star.svg" alt="Star" />
                <img src="./star.svg" alt="Star" />
                <img src="./star.svg" alt="Star" />
                <img src="./star.svg" alt="Star" />
                <img src="./star.svg" alt="Star" />
            </span>

            <h4>"{quote}"</h4>

            <div>
                <p>{text}</p>
                <p>-{name}</p>
            </div>
        </div>
    );
}

const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },

        760: {
            items: 2,
        },

        1130: {
            items: 3,

        }
    },
};

const Testimonials = ({ handleClick, verify }) => {
    const toMembership = () => {
        // Call the function passed as a prop
        handleClick();
    };
    return (
        <section id="testimonials_section">
            <h1>Testimonials</h1>

            <OwlCarousel
                id="caroussel"
                className='owl-theme'
                {...options}
            >
                {
                    testData.map(data =>
                        <TestimonialCard
                            quote={data.quote}
                            text={data.text}
                            name={data.name}
                        />
                    )
                }
            </OwlCarousel>

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

export default Testimonials;