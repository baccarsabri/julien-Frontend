import { useEffect } from "react";
import "../styles/css/info_float.css";

const InfoFloat = ({ text }) => {
    useEffect(() => {
        const element = document.getElementById("landing_section")

        if(element) {
            element.classList.add("margined")
        }
    }, [])

    return (
        <div id="info_float_wrapper">
            <span id="info_float">
                <p>{ text }</p>
            </span>
        </div>
    );
}

export default InfoFloat;