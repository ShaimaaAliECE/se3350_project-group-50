import { draggedItem } from "../App";
import { useState } from "react";

//component to drop numbers in 
function DropBox(){
    const [number, setNumber] = useState(null)
    return(
    <div className="dropBox" onDragOver={(e)=> e.preventDefault()} onDragEnd={(e)=> e.preventDefault()} onDrop={() => setNumber(draggedItem)}>
        {number}
    </div>
    )
}

export default DropBox;