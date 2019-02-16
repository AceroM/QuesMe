var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', function (socket) {

    //Listen for connection, when one happens:
    socket.on('user_connect', function (name) {
        console.log(name + " connected");
        io.emit('user_connect', name);
    });
    //Requires socket.io to be implemented in html

    //When someone disconnects:
    socket.on('disconnect', function () {
        io.emit('disconnect', socket.name);
    });

    //When someone sends a private message:
    socket.on('pm', function (msg, name, matches, receiver) {
        io.emit('pm' + receiver, msg, name, matches);
    });
});

http.listen(8000, function () {//Run the server
    console.log('listening on localhost:8000');
});