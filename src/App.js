import "./App.css";

function App() {
  return (
    <div className="App">
      <input
        autofocus="autofocus"
        name="letters"
        type="search"
        placeholder="Your Letters"
        autocomplete="off"
        maxlength="15"
        value=""
      ></input>
    </div>
  );
}

export default App;
