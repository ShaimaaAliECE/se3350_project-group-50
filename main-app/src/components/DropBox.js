import { draggedItem, deductLives, resetLives, getLives, resetSteps } from "../App";
import { useEffect, useState } from "react";
import { setScore, getScore } from "./levels/LevelTwo";
import $ from "jquery";
import ReactDOM from 'react-dom';
import sike from '../Sike.mp3'
import ding from '../Ding.mp3'
import FailurePageMenu from "./FailurePageMenu";


const steps = ["Split the Array as Evenly as Possible by dragging the numbers given in the corresponding empty box", "Split Both the Left and Right Subarrays as evenly as possible","Split All Subarrays again","Split Subarrays that have more than one element", "Merge both Arrays Back Together in the Correct Order", "Merge those Subarrays back together in the Correct Order Again", "Merge the Subarrays Again","Finally, Merge the Remaining Subarrays Back Into the Original Array, Now its Sorted"]

const dumb = [" You can do this by picking the first row of boxes", " Wow, you really did something here.", " The light is on but nobody's home.", " Has an IQ of 2 and it takes 3 to grunt", " Did you get a nobel prize yet?", " The wheel is spinning but the hamster's dead", " Bruh", " You are just bring silly now.", " Stop monkeying around to see if it works."]

//component to drop numbers in 
function DropBox(props){
    const [number, setNumber] = useState(0);
    const [divideVal, setDivideVal] = useState(props.divideVal);
    const [isDone, setIsDone] = useState(false);

    useEffect(()=>{$(`#${props.id}`).hide()})

    function dropNumber(){
        if(draggedItem === divideVal && !isDone){
            setNumber(draggedItem);
            document.getElementById("feedback").innerText = "Correct";
            setScore(getScore() + 1)
            if(getScore() == 10){
                $("#stepTwo").show();
                document.getElementById("stepsTutorial").innerText = steps[1];
                document.getElementById('stepsTutorial').innerText += dumb[0];
            }
            if(getScore() == 20){
                $("#stepThree").show();
                document.getElementById("stepsTutorial").innerText = steps[2];
                document.getElementById('stepsTutorial').innerText = dumb[1];
            }
            if(getScore() == 30){
                $("#stepFour").show();
                document.getElementById("stepsTutorial").innerText = steps[3];  
                document.getElementById('stepsTutorial').innerText = dumb[2]; 
            } 
            if(getScore() == 40){
                $("#stepFive").show();
                document.getElementById("stepsTutorial").innerText = steps[4];
                document.getElementById('stepsTutorial').innerText = dumb[3];   
            }
            if(getScore() == 50){
                $("#stepSix").show();
                document.getElementById("stepsTutorial").innerText = steps[5];   
                document.getElementById('stepsTutorial').innerText = dumb[4];
            }
            if(getScore() == 60){
                $("#stepSeven").show();
                document.getElementById("stepsTutorial").innerText = steps[6];   
                document.getElementById('stepsTutorial').innerText = dumb[5];
            }
            if(getScore() == 70){
                $("#stepEight").show();
                document.getElementById("stepsTutorial").innerText = steps[7];   
                document.getElementById('stepsTutorial').innerText = dumb[6];
            }
            if(getScore() == 80){
                setScore(0)
                $("#nextBtn").show();
                document.getElementById("stepsTutorial").innerText = steps[8];  
                document.getElementById('stepsTutorial').innerText = dumb[7]; 
            }
           
            // //Audio feedback for correct goes here
            // const audio = new Audio(ding)
            // audio.play();

            setIsDone(true);
        } else if(!isDone){
            //life deduction code goes here
            $(`#${props.id}`).show()
            $(`#${props.id}`).fadeOut(400)

            // //Audio feedback for wrong goes here goes here 
            // const audio = new Audio(sike)
            // audio.play();

            document.getElementById("feedback").innerText = "Wrong"
            
            if(deductLives() == 0){
                resetLives();
                resetSteps();
                ReactDOM.render(<FailurePageMenu/>, document.getElementById('root'))
            }else{
                document.getElementById("lives").innerText = ("Lives: " + getLives())
            }
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