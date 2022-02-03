function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
<<<<<<< HEAD
function makeArray(size) {
=======
  function makeArray(size, min=0, max=20) {
>>>>>>> 37f98836cd868607cc477c7693352adcd1d6d11a
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