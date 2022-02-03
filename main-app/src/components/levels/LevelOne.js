import Number from "../Number";
import makeArray from "../makeRandomArray";
import { useState, useEffect } from "react";
import { TimeoutError } from "bluebird/js/release/errors";

function LevelOne(){
    let array = makeArray(10);
    let temp = [];

    const [step, setStep] = useState(0)

    for(let i = 0; i<array.length; i++){
        temp.push(Number(array[i]))
    }


    const onClick = () => {
      // let leftTemp = []

      // for (let i = 0; i < temp.length/2; i++){
      //   leftTemp.push(temp[i])
      // }

      setStep(step + 1)

      console.log(step)
    }

    return(
        <div>
        <button onClick = {onClick}>Next Step</button>
        <table><tbody><tr>{temp}</tr></tbody></table>
        </div>
    )
}

export default LevelOne;