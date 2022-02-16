import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";
import { useState, useEffect } from "react";
import { mergeSort } from "../../App";
import $ from "jquery";


let score = 0;
function setScore(newScore){
    score = newScore;
}
function getScore(){
    return score;
}

function LevelTwo(){
    const[array, setArray] = useState(makeArray(10))
    
    useEffect(()=>{
        //$("#stepOne").hide()
        
    }, []) 
    
    
    
    return(
        <div>
        <table><tbody><tr><Numbers array={array}/></tr></tbody></table>
        <table>
            <tbody>
            <tr id="stepOne">
            <DropBox key={"1"} divideVal={array[0]} id="1"/>
            <DropBox key={"2"} divideVal={array[1]} id="2"/>
            <DropBox key={"3"} divideVal={array[2]} id="3"/>
            <DropBox key={"4"} divideVal={array[3]} id="4"/>
            <DropBox key={"5"} divideVal={array[4]} id="5"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"6"} divideVal={array[5]} id="6"/>
            <DropBox key={"7"} divideVal={array[6]} id="7"/>
            <DropBox key={"8"} divideVal={array[7]} id="8"/>
            <DropBox key={"9"} divideVal={array[8]} id="9"/>
            <DropBox key={"10"} divideVal={array[9]} id="10"/>
            </tr>
            <tr></tr>
            </tbody>
        </table>
        <button onClick={()=>{document.getElementById("feedback").innerText = ""}}>Clear text</button>

        <p id="feedback"></p>
        </div>
    )
}



export {LevelTwo, setScore, getScore};