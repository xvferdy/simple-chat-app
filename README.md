# simple-chat-app

> _This repo was created for learning purposes and one of the [_**#Coming Back To Programming**_](https://github.com/xvferdy/beginner-portfolio "Beginner Portfolio") activities that started on September 24 2021…_

## :round_pushpin:Table of Contents
- [About The Project](#-about-the-project)
    - [Live](#live-simple-chat-app)
    - [Built with](#-built-with)   
- [Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [File Structure Overview](#file-structure-overview)
    - [Installation](#-installation)
    - [Run Locally](#run-locally)

## 🌍 About the Project
Very simple chat app where people with unique ID send messages to each other in the same room. In the frontend we're using [react](https://reactjs.org/ "React js") and deploy it on [netlify](https://www.netlify.com/ "Netlify") and for the server we're gonna host it on the [heroku](https://www.heroku.com/platform "Heroku").

**Overview** 👓
<p align="">
  <img src="./client/src/assets/overview3.png">
</p>

### Live [simple-chat-app](https://simple-chat-app-xvferdy.netlify.app/)

### 👀 Built With
- React
- Node.js
- Express
- [Socket.IO](https://socket.io/) ver ^4.3.2


## 📥 Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Dart Sass](https://sass-lang.com/dart-sass)

### File Structure Overview
```
simple-chat-app
├── client
├── server
├── .gitignore
└── README.md
```

<details>
    <summary><b>Client</b></summary>

###### ./client
```
client
├── node_modules
├── public
├── src
│   ├── assets
│   ├── hooks
│   ├── stylesheets
│   │   ├── css
│   │   └── scss
│   ├── App.js
│   ├── Chat.js
│   └── index.js
├── package-lock.json
├── package.json
```
</details>

<details>
    <summary><b>Server</b></summary>

###### ./server
```
server
├── node_modules
├── index.js
├── package-lock.json
├── package.json
├── Procfile
└── router.js
```
</details>

### 📦 Installation
```
npm install -g sass
```
```
npm install
```
```
npm start
```

### Run Locally
###### client/src/App.js
```javascript
const socket = io.connect("http://localhost:8000");
// const socket = io.connect("https://server-simple-chat-app.herokuapp.com");
```
###### server/index.js
```javascript
origin: "http://localhost:3000",
// origin: "https://simple-chat-app-xvferdy.netlify.app",
```

<h3 align="right">
      <a href="#simple-chat-app">To Top ⤴️</a>
</h3>
