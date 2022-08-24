// const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');
const user = require('./user');
const config = require('../config.json').development;
db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.user = user(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// only for testing :)
// db.user.create({
//     userName : "Elvis",
//     userEmail : "Elvis@gmail.com",
//     userPassword : "Elvis123",
// })



module.exports = db;