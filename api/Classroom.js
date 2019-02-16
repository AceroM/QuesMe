const router = require('express').Router();
const Sequelize = require("sequelize");
const { db, Classroom } = require('../models')

module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const classroom = await Classroom.findAll();
        res.send(classroom);
    } catch (err) {
        console.error(err);
    }
})

router.get('/create/:name', (req, res, next) => {
    const { name } = req.params;
    res.send(name);
    Classroom.create({
        name
    })
        .then(cr => {
            res.sendStatus(201);
        })
})