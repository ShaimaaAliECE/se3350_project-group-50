import Number from "../Number";
import { App, emailEntered } from "../../App";
import Numbers from "../Numbers";
import makeArray from "../makeRandomArray";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import {LevelTwo} from "./LevelTwo";
import axios from "axios";
import { MergeSortMenu } from "../../App";
let Timer = require('../Timer');


function mergeSort(array) {
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

//function for merging on left and right
function merge(left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays 
      if (left[0] < right[0]) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [ ...arr, ...left, ...right ]
}


function LevelOne(){
  
  const[array, setArray] = useState(makeArray(10))
  const[step, setStep] = useState(1) // store which step the player is at
  const[merging, setMerging] = useState(false); // When player reaches merging steps this changes to true
  const[tree, setTree] = useState({value: array, left:null, right:null})
  const currentLevel = 1;
  const [timerStart, setTimerStart] = useState(false);
  
  let feedback = ["Split the Array as Evenly as Possible", "Select Left/Right Subarray", "Split the Selected Array", "Split the Subarray as Evenly as Possible", "Merge Arrays Back Together", "Select the Other Subarray and Merge", "Merge those Subarrays back together", "Finally, Merge the Remaining Subarrays Back Into the Original Array"]

  
  let tempArray = [];

  createTree(tree); // function to build the full tree by dividing the array till array length becomes one
  
  const onClick = () => {
    if(!merging)
      setStep(step+1)
    else
      setStep(step-1) // if in merging steps then go backwards(decrement step)

    if(step != 0){
      tempArray = [];
      print(tree, step+1)
      if(merging){
        for(let u in tempArray){
          tempArray[u] = mergeSort(tempArray[u])
        }
      }
    }
    
    switch(step){
      case 1:
        ReactDOM.render(<NumbersRow array={tempArray}/>, document.getElementById('stepOne'));
        document.getElementById("feedback").innerText = feedback[0];
        if(merging){
          ReactDOM.render(<></>, document.getElementById('stepTwo'));
          document.getElementById("feedback").innerText = feedback[4];
        }
        break;
      case 2:
        ReactDOM.render(<NumbersRow array={tempArray}/>, document.getElementById('stepTwo'))
        document.getElementById("feedback").innerText = feedback[1];
        if(merging){
          ReactDOM.render(<></>, document.getElementById('stepThree'));
          document.getElementById("feedback").innerText = feedback[5];
        }
          break;
      case 3:
        ReactDOM.render(<NumbersRow array={tempArray}/>, document.getElementById('stepThree'));
        document.getElementById("feedback").innerText = feedback[2];
        if(merging){
          ReactDOM.render(<></>, document.getElementById('stepFour'));
          document.getElementById("feedback").innerText = feedback[6];
        }
        break;
      case 4:
        ReactDOM.render(<NumbersRow array={tempArray}/>, document.getElementById('stepFour'));
        document.getElementById("feedback").innerText = feedback[3];
        setMerging(true) //start merging process
        setStep(step-1);
        break;
      case 0: // case 0 is the last step in the level 
        ReactDOM.render(<></>, document.getElementById('stepOne'));
        document.getElementById("feedback").innerText = feedback[7];
        document.getElementById('nextBtn').onclick = nextLevel;
        document.getElementById('nextBtn').innerText = "Next Level";
        tree.value = mergeSort([...array])
        break;        
    }
  }
    

  function createTree(node){
    let nodeValue = node.value;
    if(nodeValue.length > 1){   //if the length of the array in the current node is more than 1 then split the array into left and right nodes and recurse  
      node.left = {value: [...nodeValue].splice(0, nodeValue.length/2), left: null, right: null}
      node.right = {value: [...nodeValue].splice(nodeValue.length/2, nodeValue.length), left: null, right: null}
      createTree(node.left);
      createTree(node.right)
    } else{    // else only copy the node value to the left node (so that the last dividing step still show the arrays that had 1 element from the previous step)
      node.left = {value: node.value, left: null, right: null}
      node.right = {value: [], left: null, right: null}
    }
    
  }

  //function to get the nodes in a specific level of the tree
  function print(node, level){
    if (node == null)
      return;
    if (level == 1){
      tempArray.push(node.value)
    }
    else if (level > 1)
    {
      print(node.left, level-1);
      print(node.right, level-1);
    }
  }

  function nextLevel(){
    //send to Backend code goes here

    axios({
      method: "POST",
      url: "/level-completion",
      data: {
        completedLevel: currentLevel,
        email: emailEntered
      }
    })
  
    ReactDOM.render(<LevelTwo />, document.getElementById('root'));

  }

  //Display timer
  if(timerStart == false){
    Timer.resetTimer();
    Timer.startTimer();
    
    setTimerStart(true);
  }
  

  return(
    <div>
      
      <button onClick = {onClick} id='nextBtn'>Next Step</button>
      <p id="timer" style={{float:"left", padding:"50px"}}></p>
      <p id="feedback">Merge Sort Algorithm</p> 
      <table style={{marginLeft:"32%"}}><tr><Numbers array={tree.value}/></tr></table>
          
    </div>
  )
}




//React component
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