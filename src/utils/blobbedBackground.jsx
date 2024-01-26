const BlobbedBackground = ({ children, id, section_type }) => {
    const TagName = section_type;

    return (
        <TagName id={ id } className="blobed_background">
            <img src="./bg_blob1.svg" className="bg_blob"></img>
            <img src="./bg_blob2.svg" className="bg_blob"></img>
            <img src="./bg_blob3.svg" className="bg_blob"></img>
            <img src="./bg_blob4.svg" className="bg_blob"></img>
            <img src="./bg_blob5.svg" className="bg_blob"></img>

            { children }
        </TagName>
    );
}

export default BlobbedBackground;