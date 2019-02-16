const db = require("./db");
const Sequelize = require("sequelize");

const Classroom = db.define("classroom", {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    upvote: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    middlevote: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    downvote: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
})

module.exports = Classroom;