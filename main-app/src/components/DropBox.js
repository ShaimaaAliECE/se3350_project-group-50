import { draggedItem } from "../App";
import { useEffect, useState } from "react";
import { setScore, getScore } from "./levels/LevelTwo";
import $ from "jquery";
import sike from '../Sike.mp3'
import ding from '../Ding.mp3'


const dumb = ["Are you dumb?", "Wow, you really did something here.", "The light is on but nobody's home.", "Has an IQ of 2 and it takes 3 to grunt", "Did you get a nobel prize yet?", "The wheel is spinning but the hamster's dead", "Bruh", "You are just bring silly now.", "Stop monkeying around to see if it works."]

const steps = ["Split the Array as Evenly as Possible", "Select Left/Right Subarray", "Split the Selected Array", "Split the Subarray as Evenly as Possible", "Merge Arrays Back Together", "Select the Other Subarray and Merge", "Merge those Subarrays back together", "Finally, Merge the Remaining Subarrays Back Into the Original Array"]

//component to drop numbers in 
function DropBox(props){
    const [number, setNumber] = useState(0);
    const [divideVal, setDivideVal] = useState(props.divideVal);
    const [isDone, setIsDone] = useState(false);
    const [withSteps, setWithSteps] = useState(props.withSteps)

    useEffect(()=>{$(`#${props.id}`).hide()})

    function dropNumber(){
        if(draggedItem === divideVal && !isDone){
            setNumber(draggedItem);
            document.getElementById("feedback").innerText = "Correct";
            setScore(getScore() + 1)
            if(getScore() == 10){
                $("#stepTwo").show();
                if(withSteps)
                    document.getElementById("stepsTutorial").innerText = steps[1];
            }
            if(getScore() == 20){
                $("#stepThree").show();
                if(withSteps)
                    document.getElementById("stepsTutorial").innerText = steps[2];
            }
            if(getScore() == 30){
                $("#stepFour").show();
                if(withSteps)
                    document.getElementById("stepsTutorial").innerText = steps[3];   
            } 
            if(getScore() == 40){
                $("#stepFour").show();
                if(withSteps)
                    document.getElementById("stepsTutorial").innerText = steps[4];   
            }
            if(getScore() == 50){
                $("#stepFour").show();
                if(withSteps)
                    document.getElementById("stepsTutorial").innerText = steps[5];   
            }
            if(getScore() == 60){
                $("#stepFour").show();
                if(withSteps)
                    document.getElementById("stepsTutorial").innerText = steps[6];   
            }
            if(getScore() == 70){
                $("#stepFour").show();
                if(withSteps)
                    document.getElementById("stepsTutorial").innerText = steps[7];   
            }
            if(getScore() == 80){
                $("#stepFour").show();
                if(withSteps)
                    document.getElementById("stepsTutorial").innerText = steps[8];   
            }
           
            //Audio feedback for correct goes here
            const audio = new Audio(ding)
            audio.play();
            console.log(audio)

            setIsDone(true);
        } else if(!isDone){
            //life deduction code goes here
            $(`#${props.id}`).show()
            $(`#${props.id}`).fadeOut(400)

            //Audio feedback for wrong goes here goes here 
            const audio = new Audio(sike)
            audio.play();

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