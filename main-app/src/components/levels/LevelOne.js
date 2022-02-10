import Number from "../Number";
import Numbers from "../Numbers";
import makeArray from "../makeRandomArray";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

function LevelOne(){
  const[array, setArray] = useState(makeArray(10))
  const[step, setStep] = useState(1) 
  let tree = {value: array, left:null, right:null};
  
  let unsortedArray = [];

  createTree(tree);
  
  const onClick = () => {
    setStep(step+1)
    unsortedArray = [];
    print(tree, step)
    console.log(unsortedArray)
    switch(step){
      case 2:
        ReactDOM.render(<Temp array={unsortedArray}/>, document.getElementById('stepOne'));
        break;
      case 3:
        ReactDOM.render(<Temp array={unsortedArray}/>, document.getElementById('stepTwo'))
        break;
      case 4:
        ReactDOM.render(<Temp array={unsortedArray}/>, document.getElementById('stepThree'));
        break;
      case 5:
        ReactDOM.render(<Temp array={unsortedArray}/>, document.getElementById('stepFour'));
        break;
      case 6:
        ReactDOM.render(<Temp array={unsortedArray}/>, document.getElementById('stepFive'));
        break;
    }
  }

  function createTree(node){
    let nodeValue = node.value;
    if(nodeValue.length > 1){
      node.left = {value: [...nodeValue].splice(0, nodeValue.length/2), left: null, right: null}
      node.right = {value: [...nodeValue].splice(nodeValue.length/2, nodeValue.length), left: null, right: null}
      createTree(node.left);
      createTree(node.right)
    } else{
      node.left = {value: [], left: null, right: null}
      node.right = {value: [], left: null, right: null}
    }
    
  }

  function print(node, level){
    if (node == null)
        return;
    if (level == 1){
        unsortedArray.push(node.value)
    }
    else if (level > 1)
    {
        print(node.left, level-1);
        print(node.right, level-1);
    }
  }

  

  return(
    <div>
      <button onClick = {onClick}>Next Step</button>
      <table><tr><Numbers array={tree.value}/></tr></table>       
    </div>
  )
}

function Temp(props){
  return(
    <table><tr>
      {props.array.map(a => (
        <Numbers array={a}/>
      ))}
      </tr></table>
  )
}


export default LevelOne;