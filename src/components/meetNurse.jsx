import "../styles/css/what_is.css";
import InfoStructure from "../utils/infoStructure";

const cellData = [
    {
        "title": "",
        "text": "I have been a nurse for over 40 years. I have over 20 years of experience in pelvic floor problems, helping patients diagnosed with conditions affecting the anus and rectum."
    },

    {
        "title": "",
        "text": "Here at Butt Talks, our goal is to solve the world’s pooping problems by demystifying the taboo through education and open discussion. To learn more, obtain our free Poop Guide. "
    }
]

const MeetNurse = () => {
    return (
        <InfoStructure
            title="Meet Nurse Wong"
            subtitle=""
            img="./nurse_image.png"

            cellData1={ cellData[0] }
            cellData2={ cellData[1] }
        />
    );
}

export default MeetNurse;