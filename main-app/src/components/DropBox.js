import { draggedItem, deductLives, resetLives, getLives, resetSteps, setDraggedItem, changeLevel, getLevel } from "../App";
import { useEffect, useState } from "react";
import { setScore, getScore } from "./levels/LevelTwo";
import $ from "jquery";
import ReactDOM from 'react-dom';
import sike from '../Sike.mp3'
import ding from '../Ding.mp3'
import FailurePageMenu from "./FailurePageMenu";


const steps = ["Split the Array as Evenly as Possible by dragging the numbers given in the corresponding empty box", "Split Both the Left and Right Subarrays as evenly as possible","Split All Subarrays again","Split Subarrays that have more than one element", "Merge both Arrays Back Together in the Correct Order", "Merge those Subarrays back together in the Correct Order Again", "Merge the Subarrays Again","Finally, Merge the Remaining Subarrays Back Into the Original Array, Now its Sorted"]
const dumb = ["Don't worry it does work"]
//const dumb = [" You can do this by picking the first row of boxes", " Split the first row of boxes of as evenly as possible", " Split the arrays even further", " Select the other ones and split them", " Split them as evenly as possible", " go to the other selected arrays and split them even further", " Go back to the array and split it", " Once all have been split, merge them back together", " make sure everythimg is in the correct order"]

//component to drop numbers in 
function DropBox(props){
    const [number, setNumber] = useState(0);
    const [divideVal, setDivideVal] = useState(props.divideVal);
    const [isDone, setIsDone] = useState(false);

    useEffect(()=>{$(`#${props.id}`).hide()})

    const scoreMultiplier = (props.scoreMultiplier == null)?1:props.scoreMultiplier;

    function dropNumber(){
        if(draggedItem === divideVal && !isDone){
            setNumber(draggedItem);
            document.getElementById("feedback").innerText = "Correct";
            setScore(getScore() + 1)
            console.log(getScore())
            if(getScore() == 10*scoreMultiplier){
                $("#stepTwo").show();
                document.getElementById("stepsTutorial").innerText = steps[1];
            }
            if(getScore() == 20*scoreMultiplier){
                $("#stepThree").show();
                document.getElementById("stepsTutorial").innerText = steps[2];
            }
            if(getScore() == 30*scoreMultiplier){
                $("#stepFour").show();
                document.getElementById("stepsTutorial").innerText = steps[3];  
            } 
            if(getScore() == 40*scoreMultiplier){
                $("#stepFive").show();
                document.getElementById("stepsTutorial").innerText = steps[4];
            }
            if(getScore() == 50*scoreMultiplier){
                $("#stepSix").show();
                document.getElementById("stepsTutorial").innerText = steps[5];   
            }
            if(getScore() == 60*scoreMultiplier){
                $("#stepSeven").show();
                document.getElementById("stepsTutorial").innerText = steps[6];   
            }
            if(getScore() == 70*scoreMultiplier){
                $("#stepEight").show();
                document.getElementById("stepsTutorial").innerText = steps[7];   
            }
            if(getScore() == 80*scoreMultiplier){
                if(scoreMultiplier == 1){
                    setScore(0)
                    $("#nextBtn").show();
                    document.getElementById("stepsTutorial").innerText = steps[8];  
                }else{
                    $("#stepNine").show();
                }     
            }
            if(getScore() == 90*scoreMultiplier){
                $("#stepTen").show();
            }
            if(getScore() == 100*scoreMultiplier){
                if(scoreMultiplier == 2){
                    setScore(0)
                    $("#nextBtn").show();
                }else{
                    $("#stepEleven").show();
                }     
            }
            if(getScore() == 120*scoreMultiplier){
                $("#stepTwelve").show();
            }
            if(getScore() == 130*scoreMultiplier){
                setScore(0)
                $("#nextBtn").show();
            }
            // //Audio feedback for correct goes here
            // const audio = new Audio(ding)
            // audio.play();

            setIsDone(true);
        } else if(!isDone){
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
    <td draggable onDragStart={() => {if(number != 0)setDraggedItem(number)}} className="dropBox" onDragOver={(e)=> e.preventDefault()} onDragEnd={(e)=> e.preventDefault()} onDrop={() => {dropNumber()}}>
        {(number == 0)?null:number}
        <div id={props.id} style={{color:"red"}}>X</div>
    </td>
    )    
}

export default DropBox;