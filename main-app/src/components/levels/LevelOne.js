import Number from "../Number";
import { mergeSort } from "../../App";
import Numbers from "../Numbers";
import makeArray from "../makeRandomArray";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import LevelTwo from "./LevelTwo";

function LevelOne(){
  const[array, setArray] = useState(makeArray(10))
  const[step, setStep] = useState(1) 
  const[merging, setMerging] = useState(false)
  const[tree, setTree] = useState({value: array, left:null, right:null})

  let feedback = ["stepone text", "stepTwo text"]

  let unsortedArray = [];

  createTree(tree);
  
  const onClick = () => {
    if(!merging)
      setStep(step+1)
    else
      setStep(step-1)

    if(step != 0){
      unsortedArray = [];
      print(tree, step+1)
      if(merging){
        for(let u in unsortedArray){
          unsortedArray[u] = mergeSort(unsortedArray[u])
        }
      }
    }
      
    switch(step){
      case 1:
        ReactDOM.render(<NumbersRow style={{marginLeft: "34%"}} array={unsortedArray}/>, document.getElementById('stepOne'));
        document.getElementById("feedback").innerText = feedback[0];
        if(merging)
          ReactDOM.render(<></>, document.getElementById('stepTwo'));
        break;
      case 2:
        ReactDOM.render(<NumbersRow style={{marginLeft: "32%"}} array={unsortedArray}/>, document.getElementById('stepTwo'))
        if(merging)
          ReactDOM.render(<></>, document.getElementById('stepThree'));
        break;
      case 3:
        ReactDOM.render(<NumbersRow style={{marginLeft: "30%"}} array={unsortedArray}/>, document.getElementById('stepThree'));
        if(merging)
          ReactDOM.render(<></>, document.getElementById('stepFour'));
        break;
      case 4:
        ReactDOM.render(<NumbersRow style={{marginLeft: "23%"}} array={unsortedArray}/>, document.getElementById('stepFour'));
        setMerging(true)
        setStep(step-1);
        break;
      case 0:
        ReactDOM.render(<></>, document.getElementById('stepOne'));
        document.getElementById('nextBtn').onclick = nextLevel;
        document.getElementById('nextBtn').innerText = "Next Level";
        let tempArray = mergeSort([...array]);
        tree.value = tempArray
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
      node.left = {value: node.value, left: null, right: null}
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

  function nextLevel(){
    //Backend code goes here
    ReactDOM.render(<LevelTwo />, document.getElementById('root'));
  }

  return(
    <div>
      <button onClick = {onClick} id='nextBtn'>Next Step</button>
      <table style={{marginLeft: "35%"}}><tr><Numbers  array={tree.value}/></tr></table>   
      <p id="feedback"></p>    
    </div>
  )
}

function NumbersRow(props){
  return(
    <table style={props.style}><tr>
      {props.array.map(a => (
        <Numbers array={a}/>
      ))}
      </tr></table>
  )
}


export default LevelOne;