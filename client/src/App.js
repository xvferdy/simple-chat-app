import "./App.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

function App() {
  return (
    <div className="App">
      <h1>Join Chat</h1>
      <input type="text" />
      <input type="text" />
      <button>Join</button>
    </div>
  );
}

export default App;
