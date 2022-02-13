import { draggedItem } from "../App";
import { useEffect, useState } from "react";
import $ from "jquery";


//component to drop numbers in 
function DropBox(props){
    const [number, setNumber] = useState(0);
    const [divideVal, setDivideVal] = useState(props.divideVal)


    // useEffect(()=>{
    //     $('#nextBtn').on('click', function () {
    //         console.log(number + " "+ divideVal)
    //         if(number != divideVal){
    //             console.log("unmatching")
    //         }else
    //         console.log("matching")
    //     });         
    // })
        
      
    return(
    <td className="dropBox" onDragOver={(e)=> e.preventDefault()} onDragEnd={(e)=> e.preventDefault()} onDrop={() => {setNumber(draggedItem); if(draggedItem != divideVal){
        document.getElementById("feedback").innerText = "Wrong"
        console.log("unmatching")
    }else
    console.log("matching")}}>
        {(number == 0)?null:number}
    </td>
    )    
}

export default DropBox;