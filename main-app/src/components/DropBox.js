import { draggedItem } from "../App";
import { useState } from "react";

//component to drop numbers in 
function DropBox(){
    const [number, setNumber] = useState(null)
    return(
    <td className="dropBox" onDragOver={(e)=> e.preventDefault()} onDragEnd={(e)=> e.preventDefault()} onDrop={() => setNumber(draggedItem)}>
        {number}
    </td>
    )
}

export default DropBox;