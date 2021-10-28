import "./App.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

function App() {
  return (
    <div className="App">
      <h1>12</h1>
    </div>
  );
}

export default App;
