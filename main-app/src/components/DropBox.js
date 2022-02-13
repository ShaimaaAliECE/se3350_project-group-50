import { draggedItem } from "../App";
import { useState } from "react";
import $ from "jquery";


//component to drop numbers in 
function DropBox(){
    const [number, setNumber] = useState(-1);

    $('#nextBtn').click(function () {
        console.log(number)
    });

    return(
    <td className="dropBox" onDragOver={(e)=> e.preventDefault()} onDragEnd={(e)=> e.preventDefault()} onDrop={() => setNumber(draggedItem)}>
        {(number == -1)?null:number}
    </td>
    )
}

export default DropBox;