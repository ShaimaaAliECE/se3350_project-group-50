import ReactDOM from 'react-dom';
import LevelTwo from "./components/LevelTwo";
import LevelOne from "./components/LevelOne";
import LevelThree from "./components/LevelThree";
import LevelFour from "./components/LevelFour";
import LevelFive from "./components/LevelFive";

let draggedItem = null;

function App() {
  return(
    <div>
      <HomePage />
    </div>
  )
}

function setDraggedItem(item){
  draggedItem = item;
}

function HomePage(){
  return(
    <div>
      Algorothm Quiz<br />
      <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Choose Algorithm</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<AdminLoginMenu/>, document.getElementById('root'))}}>Admin Login</button>
    </div>
  )
}

function AdminLoginMenu(){
  return(
    <div>
      Login<br/>
      Enter UserName: <input type={"text"}></input><br/>
      Enter Password: <input type={"text"}></input>
    </div>
  )
}

function ChooseAlgoMenu(){
  return(
    <div>
      Choose Algorithm<br />
      <button onClick= {()=> {ReactDOM.render(<MergeSortMenu/>, document.getElementById('root'))}}>Merge Sort</button>

    </div>
  )
}

function MergeSortMenu(){
  return(
    <div>
      Choose Level<br />
      <button onClick= {()=> {ReactDOM.render(<LevelOne/>, document.getElementById('root'))}}>Level One</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<LevelTwo/>, document.getElementById('root'))}}>Level Two</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<LevelThree/>, document.getElementById('root'))}}>Level Three</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<LevelFour/>, document.getElementById('root'))}}>Level Four</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<LevelFive/>, document.getElementById('root'))}}>Level Five</button>
    </div>
  )
}

function FuilurePageMenu(){
  return(
    <div>
      You Lost<br />
      <button onClick= {()=> {ReactDOM.render(<div />, document.getElementById('root'))}}>Replay Level</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<MergeSortMenu/>, document.getElementById('root'))}}>Choose Another Level</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Pick Algorithm</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<HomePage/>, document.getElementById('root'))}}>Quit</button>
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
