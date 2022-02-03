import ReactDOM from 'react-dom';
import { MergeSortMenu, ChooseAlgoMenu, HomePage } from '../App';

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

export default FuilurePageMenu;