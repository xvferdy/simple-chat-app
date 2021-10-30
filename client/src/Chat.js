import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room, userId }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]); //array of object of message detail

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        username: username,
        userId: userId,
        room: room,
        message: currentMessage,
        time: `${new Date().getHours()}:${new Date().getHours()}`,
      };

      await socket.emit("send_message", messageData);
      setCurrentMessage("");
      setMessageList((prev) => [...prev, messageData]);
    }
  };

  console.log(messageList);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Room {room}</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((msg, idx) => (
            <div
              className="message"
              id={userId === msg.userId ? "you" : "other"}
              key={idx}
            >
              <div>
                <div className="message-content">
                  <p>{msg.message}</p>
                </div>
                <div className="message-meta">
                  <p id="username">{msg.username}</p>
                  <p>{msg.time}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder={`Chat...`}
          onChange={(e) => setCurrentMessage(e.target.value)}
          value={currentMessage}
          autoFocus
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
