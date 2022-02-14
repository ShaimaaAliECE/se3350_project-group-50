import { draggedItem } from "../App";
import { useEffect, useState } from "react";
import { setScore, getScore } from "./levels/LevelTwo";
import $ from "jquery";

let dumb = ["Are you dumb?", "Wow, you really did something here", "The light is on but nobody's home.", "Has an IQ of 2 and it takes 3 to grunt", "Did you get an Oscar yet?", "The wheel is spinning but the hamster's dead", "Bruh"]

//component to drop numbers in 
function DropBox(props){
    const [number, setNumber] = useState(props.num);
    const [divideVal, setDivideVal] = useState(props.divideVal);
    const [isDone, setIsDone] = useState(false);
   
    // $('#nextBtn').on('click', function () {
    //     console.log(number + " "+ divideVal)
    //     if(divideVal != number){
    //         document.getElementById("feedback").innerText = "Wrong"
    //         console.log("unmatching")
    //     }else
    //         console.log("matching");
    //     }
    // );

    
    function dropNumber(){
        if(draggedItem === divideVal && !isDone){
            setNumber(draggedItem);
            document.getElementById("feedback").innerText = "Correct";
            setScore(getScore() + 1)
            if(getScore() == 10){

                setScore(0)
            }
            setIsDone(true);
        } else if(!isDone){
            //life deduction goes here
            document.getElementById("feedback").innerText = "Wrong"
            console.log("unmatching")
        } else 
            document.getElementById("feedback").innerText = dumb[Math.floor(Math.random()*dumb.length)]

    }

    return(
    <td className="dropBox" onDragOver={(e)=> e.preventDefault()} onDragEnd={(e)=> e.preventDefault()} onDrop={() => {dropNumber()}}>
        {(number == 0)?null:number}
    </td>
    )    
}

export default DropBox;