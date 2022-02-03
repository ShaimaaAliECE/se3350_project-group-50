function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
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

let testing = makeArray(10);
console.log(testing[2]);

export default App;
