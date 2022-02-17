import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";
import { useState, useEffect } from "react";
import { mergeSort } from "../../App";
import $ from "jquery";
import ReactDOM from 'react-dom';







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
       // $("#stepTwo").hide()
       // $("#stepThree").hide()
        //$("#stepFour").hide()
    }, []) 
    
    
    
    return(
        <div>
        <table><tbody><tr><Numbers array={array}/></tr></tbody></table>
        <table style={{width:"100%"}}><tbody>{ReactDOM.render(
            <tr>
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
        , document.getElementById("stepOne"))}
        {
        ReactDOM.render(<tr>
            &nbsp;
            &nbsp;
            <DropBox key={"11"} divideVal={array[0]} id="11"/>
            <DropBox key={"12"} divideVal={array[1]} id="12"/>
            <DropBox key={"13"} divideVal={array[2]} id="13"/>
            &nbsp;
            <DropBox key={"14"} divideVal={array[3]} id="14"/>
            <DropBox key={"15"} divideVal={array[4]} id="15"/>
            &nbsp;
            &nbsp; 
            &nbsp;
            &nbsp;
            <DropBox key={"16"} divideVal={array[5]} id="16"/>
            <DropBox key={"17"} divideVal={array[6]} id="17"/>
            <DropBox key={"18"} divideVal={array[7]} id="18"/>
            &nbsp;
            <DropBox key={"19"} divideVal={array[8]} id="19"/>
            <DropBox key={"20"} divideVal={array[9]} id="20"/> 
            </tr>, document.getElementById("stepTwo"))
        }
        {
            ReactDOM.render(<tr>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <DropBox key={"21"} divideVal={array[0]} id="21"/>
            <DropBox key={"22"} divideVal={array[1]} id="22"/>  
            &nbsp;
            <DropBox key={"23"} divideVal={array[2]} id="23"/> 
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
           
            <DropBox key={"24"} divideVal={array[3]} id="24"/>
            &nbsp;
            <DropBox key={"25"} divideVal={array[4]} id="25"/>
            &nbsp;
            &nbsp;
            &nbsp;
            <DropBox key={"26"} divideVal={array[5]} id="26"/>
            <DropBox key={"27"} divideVal={array[6]} id="27"/>  
            &nbsp;
            <DropBox key={"28"} divideVal={array[7]} id="28"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"29"} divideVal={array[8]} id="29"/>
            &nbsp;
            <DropBox key={"30"} divideVal={array[9]} id="30"/>
            </tr>, document.getElementById("stepThree"))
        }
        {
            ReactDOM.render(            <tr >
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <DropBox key={"31"} divideVal={array[0]} id="31"/>
            &nbsp;
            <DropBox key={"32"} divideVal={array[1]} id="32"/>
            &nbsp;
            &nbsp;
            <DropBox key={"33"} divideVal={array[2]} id="33"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"34"} divideVal={array[3]} id="34"/>
            &nbsp;
            <DropBox key={"35"} divideVal={array[4]} id="35"/>
            &nbsp;
            &nbsp;
            &nbsp;
            <DropBox key={"36"} divideVal={array[5]} id="36"/>
            &nbsp;
            <DropBox key={"37"} divideVal={array[6]} id="37"/>
            &nbsp;
            &nbsp;
            <DropBox key={"38"} divideVal={array[7]} id="38"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"39"} divideVal={array[8]} id="39"/>
            &nbsp;
            <DropBox key={"40"} divideVal={array[9]} id="40"/>
            </tr>, document.getElementById("stepFour"))
        }
        {
            ReactDOM.render(<tr>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <DropBox key={"41"} divideVal={array[0]} id="41"/>
            <DropBox key={"42"} divideVal={array[1]} id="42"/>  
            &nbsp;
            <DropBox key={"43"} divideVal={array[2]} id="43"/> 
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
           
            <DropBox key={"44"} divideVal={array[3]} id="44"/>
            &nbsp;
            <DropBox key={"45"} divideVal={array[4]} id="45"/>
            &nbsp;
            &nbsp;
            &nbsp;
            <DropBox key={"46"} divideVal={array[5]} id="46"/>
            <DropBox key={"47"} divideVal={array[6]} id="47"/>  
            &nbsp;
            <DropBox key={"48"} divideVal={array[7]} id="48"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"49"} divideVal={array[8]} id="49"/>
            &nbsp;
            <DropBox key={"50"} divideVal={array[9]} id="50"/>
            </tr>, document.getElementById("stepFive"))
        }

{
        ReactDOM.render(<tr>
            &nbsp;
            &nbsp;
            <DropBox key={"51"} divideVal={array[0]} id="51"/>
            <DropBox key={"52"} divideVal={array[1]} id="52"/>
            <DropBox key={"53"} divideVal={array[2]} id="53"/>
            &nbsp;
            <DropBox key={"54"} divideVal={array[3]} id="54"/>
            <DropBox key={"55"} divideVal={array[4]} id="55"/>
            &nbsp;
            &nbsp; 
            &nbsp;
            &nbsp;
            <DropBox key={"56"} divideVal={array[5]} id="56"/>
            <DropBox key={"57"} divideVal={array[6]} id="57"/>
            <DropBox key={"58"} divideVal={array[7]} id="58"/>
            &nbsp;
            <DropBox key={"59"} divideVal={array[8]} id="59"/>
            <DropBox key={"60"} divideVal={array[9]} id="60"/> 
            </tr>, document.getElementById("stepTwo"))
        }
        </tbody>
        </table>
        <button onClick={()=>{document.getElementById("feedback").innerText = ""}}>Clear text</button>

        <p id="feedback"></p>
        </div>
    )
}



export {LevelTwo, setScore, getScore};