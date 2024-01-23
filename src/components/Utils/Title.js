const Title = ({ headerText }) => {
    return (

        <div className="title">
            <div style={{ borderTop: "2px solid #545454 ", marginBottom:"5px"}}></div>
            <h1>
                <strong style={{color:"#545454"}}>{headerText}</strong>
            </h1>
            <div style={{ borderTop: "2px solid #545454 "}}></div>
        </div>
    )
};

export default Title;