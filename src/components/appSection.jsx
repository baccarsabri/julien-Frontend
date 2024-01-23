import "../styles/css/appSection.css";
import InfoStructure from "../utils/infoStructure";

const cellData = [
    {
        "title": "Your Poop Is Talks...",
        "text": "Ever wonder what your poop is telling you about your health? Do you have constipation, diarrhea, stomach pain or bloody stools? ​"
    },

    {
        "title": "Time To Listen.",
        "text": "Butt Talk’s App features an A.I. poop & diet tracker, video content to better understand your health, Monthly accountability meetings with Nurse Wong, and a supportive community - Super Charge Your Poop Health"
    }
]

const AppSection = () => {
    return (
        <InfoStructure
            title="Butt Talks App"
            subtitle=""
            img="./app_cap.png"

            cellData1={ cellData[0] }
            cellData2={ cellData[1] }
        />
    );
}

export default AppSection;