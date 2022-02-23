const Title = ({ headerText }) => {
    return (

        <div className="title">
            <div style={{ borderTop: "2px solid #000000 ", marginBottom:"5px"}}></div>
            <h1>
                <strong>{headerText}</strong>
            </h1>
            <div style={{ borderTop: "2px solid #000000 "}}></div>
        </div>
    )
};

export default Title;