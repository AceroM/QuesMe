const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const { db, Classroom } = require("./models");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

app.get('/', (req, res, next) => {
    res.send('hello');
})

app.use('/api', require('./api'));

db.sync().then(() => console.log('connected '));

const PORT = process.env.port || 5000

const server = app.listen(PORT, () => console.log(`listening on ${PORT}`))

var io = require('socket.io')(server);
//Socket
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
    // socket.on('pm', function(msg, name, receiver, matches){    
    //     console.log("A PM HAS BEEN SENT: " + msg + "| from: " + name + "| to: " + receiver)
    //     console.log('with payload: ')
    //     console.log(matches)
    //     io.emit('pm'+receiver, msg, name, matches);
    // });
});