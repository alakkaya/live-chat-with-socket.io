const express = require("express");
const cors = require("cors");
const http = require("http");
const Server = require("socket.io");

/* girişte username ve oda numarası girecek oda numaraları aynıysa aynı odaya düşecekler*/
const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    //frontende çalışan url
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
