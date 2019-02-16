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

router.get('/get/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const found = await Classroom.find({
            where: {
                id
            }
        })
        if (!found) res.status(501).send('Cant find sorry pal');
        res.send(found);
    } catch (err) {
        console.error(err)
    }
})

router.get('/create/:name', async (req, res, next) => {
    const { name } = req.params;
    try {
        const created = await Classroom.create({
            name
        })
        res.status(201).send(created);
    } catch (err) {
        console.error(err)
    }
})

router.get('/upvote/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const found = await Classroom.find({
            where: {
                id
            }
        })
        if (!found) res.status(501).send('Cant find sorry pal');
        else {
            const newUpvote = found.upvote + 1;
            found.update({
                upvote: newUpvote
            })
            res.send(201);
        }
    } catch (err) {
        console.error(err)
    }
})

router.get('/middlevote/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const found = await Classroom.find({
            where: {
                id
            }
        })
        if (!found) res.status(501).send('Cant find sorry pal');
        else {
            const newMiddlevote = found.middlevote + 1;
            found.update({
                middlevote: newMiddlevote
            })
            res.send(201);
        }
    } catch (err) {
        console.error(err)
    }
})


router.get('/downvote/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const found = await Classroom.find({
            where: {
                id
            }
        })
        if (!found) res.status(501).send('Cant find sorry pal');
        else {
            const newDownvote = found.downvote + 1;
            found.update({
                downvote: newDownvote
            })
            res.send(201);
        }
    } catch (err) {
        console.error(err)
    }
})

router.get('/generateQr')