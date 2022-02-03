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

    // -- STEP 3 --
    let array1_LeftHalf = [];
    let array1_RightHalf = [];

    let array2_LeftHalf = [];
    let array2_RightHalf = [];

    let array3_LeftHalf = [];
    let array3_RightHalf = [];

    let array4_LeftHalf = [];
    let array4_RightHalf = [];


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
      }else if (step == 3) {

        array1_LeftHalf = [...leftArray_LeftHalf].splice(0, leftArray_LeftHalf.length/2)
        array1_RightHalf = [...leftArray_LeftHalf].splice(leftArray_LeftHalf.length/2, leftArray_LeftHalf.length);

        array2_LeftHalf = [...leftArray_RightHalf].splice(0, leftArray_RightHalf.length/2);
        array2_RightHalf = [...leftArray_RightHalf].splice(leftArray_RightHalf.length/2, leftArray_RightHalf.length);

        array3_LeftHalf = [...rightArray_LeftHalf].splice(0, rightArray_LeftHalf.length/2);
        array3_RightHalf = [...rightArray_LeftHalf].splice(rightArray_LeftHalf.length/2, rightArray_LeftHalf.length);

        array4_LeftHalf = [...rightArray_RightHalf].splice(0, rightArray_RightHalf.length/2);
        array4_RightHalf = [...rightArray_RightHalf].splice(rightArray_RightHalf.length/2, rightArray_RightHalf.length);

        ReactDOM.render(<table><tbody><tr><td className="steps">{array1_LeftHalf}</td> <td className="steps">{array1_RightHalf}</td><td className="steps">{array2_LeftHalf}</td> <td className="steps">{array2_RightHalf}</td><td className="steps">{array3_LeftHalf}</td> <td className="steps">{array3_RightHalf}</td><td className="steps">{array4_LeftHalf}</td> <td className="steps">{array4_RightHalf}</td></tr></tbody></table>, document.getElementById('stepThree'))
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