function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
function makeArray(size) {
    const myArray = new Array(size);
    const usedNumbers = new Array(size);
    for (let i = 0; i < myArray.length; i++) {
      let newNumber = getRandomInt(1, 20);
      for (let j = 0; j < usedNumbers.length; j++) {
        while (newNumber == usedNumbers[j]) {
          newNumber = getRandomInt(1, 20);
        }
      }
      myArray[i] = newNumber;
    }
    return myArray;
}

  export default makeArray;