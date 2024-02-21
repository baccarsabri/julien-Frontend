import "../styles/css/what_is.css";
import InfoStructure from "../utils/infoStructure";

const cellData = [
    {
        "title": "Butt Talks",
        "text": "Our goal at Butt Talks is to solve the world's pooping problems by demystifying the taboo through education and open discussion."
    },

    {
        "title": "How",
        "text": "?? Butt Talks provides App, social meet up, monthly zoom meetings, and a ton of helpful video content to help solve all your pooping problems."
    }
]

const WhatIs = () => {
    return (
        <InfoStructure
            title="What is Butt Talks?"
            subtitle="Super Charge Your Poop Health"
            img="./butt-talk-gif.gif"

            cellData1={ cellData[0] }
            cellData2={ cellData[1] }
        />
    );
}

export default WhatIs;