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

db.sync().then((m) => console.log(m.models));

const PORT = process.env.port || 5000

app.listen(PORT, () => console.log(`listening on ${PORT}`))