import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";
import { useState, useEffect } from "react";
import { mergeSort } from "../../App";

let score = 0;
function setScore(newScore){
    score = newScore;
}
function getScore(){
    return score;
}

function LevelTwo(){
    const[array, setArray] = useState(makeArray(10))
    
    return(
        <div>
        <table><tbody><tr><Numbers array={array}/></tr></tbody></table>
        <table>
            <tbody>
            <tr>
            <DropBox key={array[0]} divideVal={array[0]} num={0}/>
            <DropBox key={array[1]} divideVal={array[1]} num={0}/>
            <DropBox key={array[2]} divideVal={array[2]} num={0}/>
            <DropBox key={array[3]} divideVal={array[3]} num={0}/>
            <DropBox key={array[4]} divideVal={array[4]} num={0}/>
            &nbsp;
            &nbsp;    
            <DropBox key={array[5]} divideVal={array[5]} num={0}/>
            <DropBox key={array[6]} divideVal={array[6]} num={0}/>
            <DropBox key={array[7]} divideVal={array[7]} num={0}/>
            <DropBox key={array[8]} divideVal={array[8]} num={0}/>
            <DropBox key={array[9]} divideVal={array[9]} num={0}/>
            </tr>
            </tbody>
        </table>
        <button id="nextBtn">Click</button>
        <button onClick={()=>{document.getElementById("feedback").innerText = ""}}>clear</button>

        <p id="feedback"></p>
        </div>
    )
}


export {LevelTwo, setScore, getScore};