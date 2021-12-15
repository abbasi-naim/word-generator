import "./App.css";

function App() {
  return (
    <div className="App">
      <input
        autoFocus="autofocus"
        name="letters"
        type="search"
        placeholder="Enter Letters"
        autoComplete="off"
        maxLength="15"
      ></input>
      <div className="Body">search result will show here!</div>
    </div>
  );
}

export default App;
