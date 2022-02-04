import Number from "../Number";
import makeArray from "../makeRandomArray";
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
        content.push([]);
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
    // -- STEP 1 --
    let step = 0;

    let temp = {}

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
        divide(tree);
        print(tree, step);
        console.log(content)
        unsortedArray = [];
        for(let i = 0; i<content.length; i++){
            unsortedArray[i] = Number(content[i])
        }
        content = [];
        switch(step){
            case 2:
                ReactDOM.render(<table><tbody><tr>{unsortedArray}</tr></tbody></table>, document.getElementById('stepOne'))
                break;
            case 3:
                ReactDOM.render(<table><tbody><tr>{unsortedArray}</tr></tbody></table>, document.getElementById('stepTwo'))
                break;
            case 4:
                ReactDOM.render(<table><tbody><tr>{unsortedArray}</tr></tbody></table>, document.getElementById('stepThree'))
                break;
            case 5:
                ReactDOM.render(<table><tbody><tr>{unsortedArray}</tr></tbody></table>, document.getElementById('stepFour'))
                break;
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