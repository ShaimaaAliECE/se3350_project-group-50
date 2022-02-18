import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";
import FuilurePageMenu from "../FailurePageMenu";
import ReactDOM from 'react-dom';

function LevelThree(){
    let array = makeArray(10);
    let temp = [];
    for(let i = 0; i<array.length; i++){
        temp.push(Number(array[i]))
    }
    return(
        <div>
        <table><tbody><tr><Numbers array={array}/></tr></tbody></table>
        <table>
            <tbody>
            <tr id="stepOne" style={{marginLeft: "34%"}}>
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
            <tr id="stepTwo">
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
            </tr>
            <tr id="stepThree">
            <DropBox key={"21"} divideVal={array[0]} id="21"/>
            <DropBox key={"22"} divideVal={array[1]} id="22"/>  
            &nbsp;
            <DropBox key={"23"} divideVal={array[2]} id="23"/> 
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
            </tr>
            <tr id="stepFour">
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
            </tr>
            </tbody>
        </table>
        
        </div>
    )
}
        //<button onClick= {()=> {ReactDOM.render(<FuilurePageMenu/>, document.getElementById('root'))}}>Die</button>

export default LevelThree;