import "./App.css";
import Form from "./components/Form";
import Data from "./components/Data";
import Cubes from "./components/Cubes";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>VS Labor</h1>
        <h2>ToDo List</h2>
        <Form />
        <Data />
      </div>
      <Cubes />
    </div>
  );
}

export default App;
