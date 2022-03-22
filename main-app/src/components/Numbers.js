import Number from "./Number";


function Numbers(props){
    return(
    <>
        {
            props.array.map((a) => ( 
                <Number key = {a} num={a} id={props.id} /> 
            ))
        }
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
    )
}

export default Numbers;