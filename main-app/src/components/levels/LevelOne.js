import Number from "../Number";
import makeArray from "../makeRandomArray";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

function LevelOne(){
    let array = makeArray(10);
    let unsortedArray = [];

    // -- STEP 1 --
    let unsortedArray_LeftHalf = [];
    let unsortedArray_RightHalf = [];

    // -- STEP 2 --
    let leftArray_LeftHalf = [];
    let leftArray_RightHalf = [];

    let rightArray_LeftHalf = [];
    let rightArray_RightHalf = [];

    // --

    let step = 0

    //const [step, setStep] = useState(1)

    for(let i = 0; i<array.length; i++){
        unsortedArray.push(Number(array[i]))
    }


    const onClick = () => {

      step += 1

      if (step == 1){

        unsortedArray_LeftHalf = [...unsortedArray].splice(0, unsortedArray.length/2)
        unsortedArray_RightHalf = [...unsortedArray].splice(unsortedArray.length/2, unsortedArray.length)

        ReactDOM.render(<table><tbody><tr><td className="steps">{unsortedArray_LeftHalf}</td> <td className="steps">{unsortedArray_RightHalf}</td></tr></tbody></table>, document.getElementById('stepOne'))
      
      }else if (step == 2) {

        leftArray_LeftHalf = [...unsortedArray_LeftHalf].splice(0 , unsortedArray_LeftHalf.length/2)
        leftArray_RightHalf = [...unsortedArray_LeftHalf].splice(unsortedArray_LeftHalf.length/2 , unsortedArray_LeftHalf.length)

        rightArray_LeftHalf = [...unsortedArray_RightHalf].splice(0 , unsortedArray_RightHalf.length/2)
        rightArray_RightHalf = [...unsortedArray_RightHalf].splice(unsortedArray_RightHalf.length/2 , unsortedArray_RightHalf.length)

        ReactDOM.render(<table><tbody><tr><td className="steps">{leftArray_LeftHalf}</td> <td className="steps">{leftArray_RightHalf}</td><td className="steps">{rightArray_LeftHalf}</td> <td className="steps">{rightArray_RightHalf}</td></tr></tbody></table>, document.getElementById('stepTwo'))
      }
      
      
    }

    return(
        <div>
        <button onClick = {onClick}>Next Step</button>
        <table><tbody><tr>{unsortedArray}</tr></tbody></table>
        </div>
    )
}

export default LevelOne;