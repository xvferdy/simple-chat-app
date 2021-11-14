import "./App.css";
import { useState } from "react";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import Chat from "./Chat";

const socket = io.connect("http://localhost:8000");

// socket.io
// .on
// .emit
// .join
// .to

function App() {
	const [username, setUsername] = useState("");
	const [userId, setUserId] = useState("");
	const [room, setRoom] = useState("");
	const [showChat, setShowChat] = useState(false);

	const joinRoom = async (e) => {
		e.preventDefault();
		if (username !== "" && room !== "") {
			//someone want to join (join_room event)
			await socket.emit("join_room", room);
			setUserId(uuidv4());
			setShowChat(true);
		} else {
			alert("Please enter Username and Room ID");
		}
	};
	return (
		<div className="App">
			{showChat ? (
				<Chat socket={socket} username={username} room={room} userId={userId} />
			) : (
				<form>
					<div className="joinChatContainer">
						<h1>Join Chat</h1>
						<input
							type="text"
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							placeholder="Username"
							autoFocus
						/>
						<input
							type="text"
							onChange={(e) => {
								setRoom(e.target.value);
							}}
							placeholder="Room ID"
						/>
						<button onClick={joinRoom}>Enter</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default App;
