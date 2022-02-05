import Number from "../Number";
import makeArray from "../makeRandomArray";
import LevelTwo from "./LevelTwo";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

let content = new Array();

function divide(node){
    let nodeValue = node.value;
    if(node.left == null && node.right == null){
        node.left = {value: [...nodeValue].splice(0, node.value.length/2), left: null, right: null}
        node.right = {value: [...nodeValue].splice(node.value.length/2, node.value.length), left: null, right: null}
    }
    else if(node.value.length > 1){
        divide(node.left);
        divide(node.right);
    }
}

function print(node, level){
    if (node == null)
        return;
    if (level == 1){
        content.push(node.value);
    }
    else if (level > 1)
    {
        print(node.left, level-1);
        print(node.right, level-1);
    }
}


function LevelOneTest(){
    let array = makeArray(10);
    let unsortedArray = [];
    
    let step = 0;

    for(let i = 0; i<array.length; i++){
        unsortedArray.push(Number(array[i]))
    }

    let tree = {value: array, left:null, right:null};
    console.log(tree)

    function onClick() {
        if(step == 0){
            step += 1;
            divide(tree);
        }
        step += 1;
        if(step < 6){
            divide(tree);
            print(tree, step);
            console.log(content)
            unsortedArray = [];
            for(let i = 0; i<content.length; i++){
                let tempArray = [];
                for(let c of content[i]){
                    tempArray.push(<td style={{paddingRight: "10px"}}>{c}, </td>)
                }
                switch(step){
                    case 2:
                        tempArray.push(<td style={{paddingRight: "150px", paddingTop: "50px"}}></td>)
                        break;
                    case 3: 
                        tempArray.push(<td style={{paddingRight: "100px", paddingTop: "50px"}}></td>)
                        break;
                    case 4:
                        tempArray.push(<td style={{paddingRight: "60px", paddingTop: "50px"}}></td>)
                        break;
                    case 5:
                        tempArray.push(<td style={{paddingRight: "30px", paddingTop: "50px"}}></td>)
                }
                
                unsortedArray[i] = tempArray
            }
            content = [];
            switch(step){
                case 2:
                    ReactDOM.render(<table style={{marginLeft: "25%"}}><tbody><tr>{unsortedArray}</tr></tbody></table>, document.getElementById('stepOne'))
                    break;
                case 3:
                    ReactDOM.render(<table style={{marginLeft: "20%"}}><tbody><tr>{unsortedArray}</tr></tbody></table>, document.getElementById('stepTwo'))
                    break;
                case 4:
                    ReactDOM.render(<table style={{marginLeft: "16%"}}><tbody><tr>{unsortedArray}</tr></tbody></table>, document.getElementById('stepThree'))
                    break;
                case 5:
                    ReactDOM.render(<table style={{marginLeft: "13%"}}><tbody><tr>{unsortedArray}</tr></tbody></table>, document.getElementById('stepFour'))
                    break;
            }
        }
        if(step > 5){
            switch(step){
                case 6:
                    ReactDOM.render(<></>, document.getElementById('stepFour'))
                    
                    break;
                case 7:
                    ReactDOM.render(<></>, document.getElementById('stepThree')) 
                    break;
                case 8:
                    ReactDOM.render(<></>, document.getElementById('stepTwo'))
                    break;
                case 9:
                    ReactDOM.render(<></>, document.getElementById('stepOne')) 
                    break;
                case 10:
                    ReactDOM.render(<LevelTwo />, document.getElementById('root')) 

            }
        }
    }
    
    
    return(
        <div>
        <button onClick = {onClick}>Next Step</button>
        <table><tbody><tr>{unsortedArray}</tr></tbody></table>
        </div>
    )
}

export default LevelOneTest;