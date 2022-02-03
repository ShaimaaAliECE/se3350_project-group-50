import makeArray from "../makeRandomArray";
import Number from "../Number";
import DropBox from "../DropBox";

function LevelFour(){
    let array = makeArray(20);
    let temp = [];
    for(let i = 0; i<array.length; i++){
        temp.push(Number(array[i]))
    }
    return(
        <div>
        <table><tbody><tr>{temp}</tr></tbody></table>
        <table>
            <tbody>
            <tr>
            <DropBox />
            <DropBox />
            <DropBox />
            <DropBox />
            <DropBox />
            </tr>
            </tbody>
        </table>
        
        </div>
    )
}

export default LevelFour;