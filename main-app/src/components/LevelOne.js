import Number from "./Number";
import makeArray from "./makeRandomArray";

function LevelOne(){
    let array = makeArray(10);
    let temp = [];
    for(let i = 0; i<array.length; i++){
        temp.push(Number(array[i]))
    }
    return(
        <div>
        <table><tbody><tr>{temp}</tr></tbody></table>
        </div>
    )
}

export default LevelOne;