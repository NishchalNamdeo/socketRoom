const express = require("express");
const app = express();

const socketIo = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketIo(server);


io.on("connection", function (socket) {
    socket.on("joinroom", function (room) {
        socket.join(room)
        console.log(room);
    })

    socket.on("sendmessage", function(message){
        io.to(message.id).emit("message", message.message)
    })


})






app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("chat");
});

server.listen(3000);