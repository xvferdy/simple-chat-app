//APPCONFIG
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");

//MIDDLEWARES
app.use(cors());

//socket.io related
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//socket.io server
io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

//DB CONFIG

//API ENDPOINTS

//LISTENER
server.listen(8000, () => {
  console.log("PORT RUNNING IN 8000");
});
