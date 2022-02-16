import { draggedItem } from "../App";
import { useEffect, useState } from "react";
import { setScore, getScore } from "./levels/LevelTwo";
import $ from "jquery";

let dumb = ["Are you dumb?", "Wow, you really did something here.", "The light is on but nobody's home.", "Has an IQ of 2 and it takes 3 to grunt", "Did you get a nobel prize yet?", "The wheel is spinning but the hamster's dead", "Bruh", "You are just bring silly now.", "Stop monkeying around to see if it works."]

//component to drop numbers in 
function DropBox(props){
    const [number, setNumber] = useState(0);
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
    useEffect(()=>{$(`#${props.id}`).hide()})

    function dropNumber(){
        if(draggedItem === divideVal && !isDone){
            setNumber(draggedItem);
            document.getElementById("feedback").innerText = "Correct";
            setScore(getScore() + 1)
            if(getScore() == 10){
                document.getElementById("feedback").innerText = "Next Step";
                $("#stepTwo").show();
            }
            if(getScore() == 20){
                document.getElementById("feedback").innerText = "Next Step";
            }
            if(getScore() == 30){
                
            } //and so on (each 10 is one step)
           
            //Audio feedback for correct goes here
            var music = new Audio('Correct.mp3');
            music.play();

            setIsDone(true);
        } else if(!isDone){
            //life deduction code goes here
            $(`#${props.id}`).show()
            $(`#${props.id}`).fadeOut(400)

            //Audio feedback for wrong goes here goes here 
            var music=new Audio('Wrong.mp3');
            music.play();

            document.getElementById("feedback").innerText = "Wrong"
            console.log("unmatching")
        } else 
            document.getElementById("feedback").innerText = dumb[Math.floor(Math.random()*dumb.length)]

    }

    return(
    <td className="dropBox" onDragOver={(e)=> e.preventDefault()} onDragEnd={(e)=> e.preventDefault()} onDrop={() => {dropNumber()}}>
        {(number == 0)?null:number}
        <div id={props.id} style={{color:"red"}}>X</div>
    </td>
    )    
}

export default DropBox;