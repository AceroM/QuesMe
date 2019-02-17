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
var numUsers = 0;
io.on('connection', function (socket) {
    var addedUser = false;

    socket.on('new upvote', (data) => {
        socket.broadcast.emit('new upvote', {
            username: socket.username,
            value: data
        })
    })

    socket.on('add user', (username) => {
        if (addedUser) return;

        socket.username = username;
        ++numUsers;
        addedUser = true;

        socket.emit('login', {
            numUsers,
            username
        })

        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers
        })
    });

    socket.on('disconnect', function () {
        if (addedUser) {
            --numUsers;

            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers
            })
        }
    });

    //When someone sends a private message:
    // socket.on('pm', function(msg, name, receiver, matches){    
    //     console.log("A PM HAS BEEN SENT: " + msg + "| from: " + name + "| to: " + receiver)
    //     console.log('with payload: ')
    //     console.log(matches)
    //     io.emit('pm'+receiver, msg, name, matches);
    // });
});