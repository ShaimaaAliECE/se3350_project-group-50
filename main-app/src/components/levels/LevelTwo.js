import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";

function LevelTwo(){
    let array = makeArray(10);
    
    return(
        <div>
        <table><tbody><tr><Numbers array={array}/></tr></tbody></table>
        <table>
            <tbody>
            <tr>
            <DropBox />
            <DropBox />
            <DropBox />
            <DropBox />
            <DropBox />
            &nbsp;
            &nbsp;    
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


export default LevelTwo;