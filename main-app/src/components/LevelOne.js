import Number from "./Number";

function LevelOne(){
    let array = makeArray(10);
    let temp = [];
    for(let i = 0; i<array.length; i++){
        temp.push(Number(array[i]))
    }
    return(
        <div>
        <table><tbody><tr>{temp}</tr></tbody></table>
        </div>
    )
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

export default LevelOne;