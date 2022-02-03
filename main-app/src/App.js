import Number from "./components/Number";
import DropBox from "./components/DropBox";

let draggedItem = null;

function App() {
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
      
    </div>
  )
}

function setDraggedItem(item){
  draggedItem = item;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function makeArray(size) {
  const myArray = new Array(size);
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = getRandomInt(1, 20);
  }
  return myArray;
}


function mergeSort(array) {
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

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

export {App, draggedItem, setDraggedItem}
