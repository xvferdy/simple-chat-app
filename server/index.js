const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
const router = require("./router");

app.use(cors());
app.use(router);

const port = process.env.PORT || 8000;

const io = new Server(server, {
	cors: {
		// origin: "http://localhost:3000",
		origin: "https://simple-chat-app-xvferdy.netlify.app",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log("User Connected:", socket.id);

	// someone want to join
	socket.on("join_room", (data) => {
		socket.join(data);
	});

	// someone chating
	socket.on("send_message", (data) => {
		// emit to frontend
		// data => object of message detail
		socket.to(data.room).emit("receive_message", data);
	});

	// disconnect
	socket.on("disconnect", () => {
		console.log("User Disconnected:", socket.id);
	});
});

server.listen(port, () => {
	console.log("Server is up and running!");
});
