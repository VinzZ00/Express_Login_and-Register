"use strict"
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
    
    class user extends Model {}

    user.init({
        userId : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        userName : {
            type : DataTypes.STRING,
            allowNull : false 
        },
        userEmail : {
            type : DataTypes.STRING,
            allowNull : false
        }, 
        userPassword : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {
    sequelize,
    modelName : "user",
    timestamps : false,
    freezeTableName : true
    }
    )
    
    // user.removeAttribute('id');

    return user };