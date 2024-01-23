import "../styles/css/testimonials.css";

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
    }
]

const TestimonialCard = ({ quote, text, name }) => {
    return (
        <div className="testimonial_card">
            <span id="stars">
                <img src="./star.svg" alt="Star" />
                <img src="./star.svg" alt="Star" />
                <img src="./star.svg" alt="Star" />
                <img src="./star.svg" alt="Star" />
                <img src="./star.svg" alt="Star" />
            </span>

            <h4>"{ quote }"</h4>

            <div>
                <p>{ text }</p>
                <p>-{ name }</p>
            </div>
        </div>
    );
}

const Testimonials = () => {
    return (
        <section id="testimonials_section">
            <h1>Testimonials</h1>

            <span id="test_wrapper">
                {
                    testData.map(data =>
                        <TestimonialCard
                            quote={ data.quote }
                            text={ data.text }
                            name={ data.name }
                        />
                    )
                }
            </span>

            <button className="join_button">Ready to join now</button>
        </section>
    );
}

export default Testimonials;