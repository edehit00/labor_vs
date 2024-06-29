import "./App.css";

import Data from "./Components/Data";
import Cubes from "./Components/Cubes";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>VS Labor</h1>
        <h2>ToDo List</h2>
        <Data />
      </div>
      <Cubes />
    </div>
  );
}

export default App;
