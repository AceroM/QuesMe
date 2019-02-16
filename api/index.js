const router = require('express').Router();
module.exports = router;

router.use('/classrooms', require('./Classroom'))
