import Number from "./Number";


function Numbers(props){
    return(
    <div className="numbers">
        {
            props.array.map((t) => ( 
                <Number key = {t} num={t} /> 
            ))
        }
    </div>
    )
}

export default Numbers;