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
    </div>
  );
}

export default App;
