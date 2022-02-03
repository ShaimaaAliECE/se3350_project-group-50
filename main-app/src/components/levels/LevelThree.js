import makeArray from "../makeRandomArray";
import Number from "../Number";
import DropBox from "../DropBox";
import FuilurePageMenu from "../FuilurePageMenu";
import ReactDOM from 'react-dom';

function LevelThree(){
    let array = makeArray(10);
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
        <button onClick= {()=> {ReactDOM.render(<FuilurePageMenu/>, document.getElementById('root'))}}>Die</button>
        
        </div>
    )
}

export default LevelThree;