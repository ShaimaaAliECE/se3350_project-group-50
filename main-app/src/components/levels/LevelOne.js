import Number from "../Number";
import makeArray from "../makeRandomArray";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { TimeoutError } from "bluebird/js/release/errors";

function LevelOne(){
    let array = makeArray(10);
    let temp = [];
    let leftTemp = [];
    let step = 0

    //const [step, setStep] = useState(1)

    for(let i = 0; i<array.length; i++){
        temp.push(Number(array[i]))
    }


    const onClick = () => {
      // let leftTemp = []

      // for (let i = 0; i < temp.length/2; i++){
      //   leftTemp.push(temp[i])
      // }

      // setStep(step + 1)

      // console.log(step)

      step += 1

      if (step == 1){

      for (let i = 0; i < temp.length/2; i++){
        leftTemp.push(temp[i])
      }


        ReactDOM.render(<table><tbody><tr>{leftTemp}</tr></tbody></table>, document.getElementById('stepOne'))
      }else if (step == 2) {
        ReactDOM.render(<h1>Step 2</h1>, document.getElementById('stepTwo'))
      }
      
      
    }

    return(
        <div>
        <button onClick = {onClick}>Next Step</button>
        <table><tbody><tr>{temp}</tr></tbody></table>
        </div>
    )
}

export default LevelOne;