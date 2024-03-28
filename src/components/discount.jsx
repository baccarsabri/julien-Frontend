import { useEffect, useState } from "react";
import "../styles/css/discount.css";

const Discount = ({ countDownDate }) => {
    const [timeUntil, setTimeUntil] = useState({
        "days": 0,
        "hours": 0,
        "minutes": 0,
        "seconds": 0
    })

    const [isShown, setIsShown] = useState(false)

    const setTime = (formatted_CountDownDate, x) => {
        const now = new Date().getTime();
        const distance = formatted_CountDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            setIsShown(false)
            if (x) clearInterval(x)

            return
        }

        if (!isShown) setIsShown(true)
        setTimeUntil({ days, hours, minutes, seconds })
    }

    const formatTime = (time) => (time < 10 ? "0" + time : time)

    useEffect(() => {
        const formatted_CountDownDate = new Date(countDownDate).getTime();
        setTime(formatted_CountDownDate);

        let x = setInterval(function () {
            setTime(formatted_CountDownDate, x)
        }, 1000);
    }, [])

    return isShown && (
        <section id="discount_section">
            <h3>Limited one time discount ends in:</h3>

            <span id="timer_wrapper">
                <div className="cell">
                    <div id="num">
                        <h1>{formatTime(timeUntil.days)}</h1>
                    </div>
                    <h3>DAYS</h3>
                </div>

                <div className="cell">
                    <div id="num">
                        <h1>{formatTime(timeUntil.hours)}</h1>
                    </div>
                    <h3>HOURS</h3>
                </div>

                <div className="cell">
                    <div id="num">
                        <h1>{formatTime(timeUntil.minutes)}</h1>
                    </div>
                    <h3>MINUTES</h3>
                </div>

                <div className="cell">
                    <div id="num">
                        <h1>{formatTime(timeUntil.seconds)}</h1>
                    </div>
                    <h3>SECONDS</h3>
                </div>
            </span>
        </section>
    );
}

export default Discount;