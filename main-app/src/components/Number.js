//function for dragable numbers
function Number(num){
    return(
    <div className="number" draggable>
        <p>
        {
            num
        }
        </p>
    </div>
    )
}

export default Number;