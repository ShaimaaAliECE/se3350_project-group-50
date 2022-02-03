import ReactDOM from 'react-dom';
import LevelTwo from "./components/LevelTwo";
import LevelOne from "./components/LevelOne";

let draggedItem = null;

function App() {
  return(
    <div>
      <MergeSortMenu />
    </div>
  )
}

function setDraggedItem(item){
  draggedItem = item;
}

function HomePage(){

}

function MergeSortMenu(){
  return(
    <div>
      Algorithm
      <button onClick= {()=> {ReactDOM.render(<LevelOne/>, document.getElementById('root'))}}>Level One</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<LevelTwo/>, document.getElementById('root'))}}>Level Two</button>
    </div>
  )
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
