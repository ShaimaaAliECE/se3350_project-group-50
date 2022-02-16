import ReactDOM from 'react-dom';
import {LevelTwo} from "./components/levels/LevelTwo";
import LevelOne from "./components/levels/LevelOne";
import LevelThree from "./components/levels/LevelThree";
import LevelFour from "./components/levels/LevelFour";
import LevelFive from "./components/levels/LevelFive";
import AdminPage from './components/AdminPage';
import { useImperativeHandle } from 'react';

let draggedItem = null;
//let currentLevel = "Level1"; will not be used till probably sprint 3

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
      Algorithm Quiz<br />
      <button onClick= {()=> {ReactDOM.render(<UserLogin/>, document.getElementById('root'))}}>User Login</button>
      <br />
      <button onClick= {()=> {ReactDOM.render(<AdminLoginMenu/>, document.getElementById('root'))}}>Admin Login</button>
    </div>
  )
}

function UserLogin(){
    function onClick(){
      ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'));
      var emails=[];
      emails.push(document.getElementById("email-field").value);
      console.log(emails);
      }
    
  
return(
  <div>
  <form id="login-form" action='/user-login' method='get'>
<label for="email">Email</label>
<input type="text" placeholder="Enter Email" name="email" id="email-field" class="login-form-field"/>
<br/>
<input type="submit" value="login" id="login-form-submit" onClick= {onClick}/>
</form>
</div>)
}



function UserLoginMenu(){
  return(
  <div>
    <button onClick= {()=> {ReactDOM.render(<ChooseAlgoMenu/>, document.getElementById('root'))}}>Choose Algorithm</button>
  </div>)
}

function AdminLoginMenu(){
  //e.preventDefault()
  function onClick(){
    if(document.getElementsByName("userName")[0].value == "admin" && document.getElementsByName("password")[0].value == "123"){
      ReactDOM.render(<AdminPage/>, document.getElementById('root'))
    }else {
      document.getElementById("incorrect").innerText = "Incorrect User Name or Password"
      
    }
    
  }

  return(
    <div>
      Admin Login Page<br/>
      <form id="login-form" onSubmit={(event)=>{event.preventDefault(); onClick();}}>
        Enter UserName: <input name='userName' type={"text"}></input><br/>
        Enter Password: <input name='password' type={"text"}></input>
        <input type={"submit"}></input>
      </form>
      <p id='incorrect'></p>
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

export {App, draggedItem, setDraggedItem, MergeSortMenu, ChooseAlgoMenu, HomePage, UserLoginMenu, UserLogin, mergeSort}
