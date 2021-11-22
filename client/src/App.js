import { useState } from "react";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import Chat from "./Chat";
import logo from "./assets/logo-min.png";
import "./stylesheets/css/main.css";

// const socket = io.connect("http://localhost:8000");
const socket = io.connect("https://server-simple-chat-app.herokuapp.com");

// socket.io
// .on
// .emit
// .join
// .to

function App() {
	const [userId, setUserId] = useState("");
	const [showChat, setShowChat] = useState(false);
	const [input, setInput] = useState({
		username: "",
		room: "",
	});

	const joinRoom = async (e) => {
		e.preventDefault();
		if (input.username !== "" && input.room !== "") {
			//someone want to join (join_room event)
			await socket.emit("join_room", input.room);
			setUserId(uuidv4());
			setShowChat(true);
		} else {
			alert("Please enter Username and Room ID");
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInput((prevInput) => ({ ...prevInput, [name]: value }));
	};

	return (
		<div className="App">
			{showChat ? (
				<Chat
					socket={socket}
					username={input.username}
					room={input.room}
					userId={userId}
				/>
			) : (
				<>
					<form>
						<div className="joinChatContainer">
							<img
								src={logo}
								alt="myLogo"
								width="100px"
								style={{ margin: "30px auto" }}
							/>
							<h1>Messenger</h1>
							<input
								name="username"
								type="text"
								onChange={handleChange}
								placeholder="Username"
								autoComplete="off"
								autoFocus
							/>
							<input
								name="room"
								type="text"
								onChange={handleChange}
								placeholder="Room ID"
								autoComplete="off"
							/>
							<button onClick={joinRoom}>Enter</button>
						</div>
						<small
							style={{
								display: "grid",
								placeItems: "center",
								padding: "20px",
							}}
						>
							<a
								href="https://github.com/xvferdy"
								style={{ textDecoration: "none", color: "grey" }}
							>
								from Facebook
							</a>
						</small>
					</form>
				</>
			)}
		</div>
	);
}

export default App;
