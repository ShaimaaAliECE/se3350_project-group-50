function App() {

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

export default App;
