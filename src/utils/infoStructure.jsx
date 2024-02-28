import "../styles/css/infoStructure.css";

const InfoStructure = ({ title, subtitle, cellData1, cellData2, img }) => {
    return (
        <section class="blobed_background info_structure">
            <img alt="blob" src="./bg_blob1.svg" className="bg_blob"></img>
            <img alt="blob" src="./bg_blob2.svg" className="bg_blob"></img>
            <img alt="blob" src="./bg_blob3.svg" className="bg_blob"></img>
            <img alt="blob" src="./bg_blob4.svg" className="bg_blob"></img>
            <img alt="blob" src="./bg_blob5.svg" className="bg_blob"></img>

            <h1>{ title }</h1>
            <h3>{ subtitle }</h3>

            <div id="info_wrapper">
                <span id="col">
                    <div>
                        <h3>{ cellData1.title }</h3>
                        <p>{ cellData1.text }</p>
                    </div>

                    <div>
                        <h3>{ cellData2.title }</h3>
                        <p>{ cellData2.text }</p>    
                    </div>
                </span>

                <span id="img">
                    <img src={ img } alt="Logo" width={(img === "./butt-talk-gif.gif") ? 350 : ""} />
                </span>
            </div>

            <button className="join_button">Ready to join now</button>
        </section>
    );
}

export default InfoStructure;