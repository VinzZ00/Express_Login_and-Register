"use strict";

const { Op } = require('sequelize');
// const user = require('../models/index').user;
const db = require('../models/index');
const user = db.user;
const bcrypt = require('bcrypt');


// async function findalluser() {
//     const usera = await user.findAll().then( res => {return res}).catch( err => {
//         return err;
//     });
//     // console.log(user)
//     // console.log(usera);
//     console.log(usera.every(Users => Users instanceof db.user));
//     // console.log("All users:", JSON.stringify(user, null, 2));
//     usera.every(users => {
//         console.log("user name is " + users.userName);
//     })
// }


// findalluser();




const getLogin = (req, res) => {
    res.render('login', {
        message : 'Member Login'
    });
};

const postLogin = async (req, res) => {
    const {emailUser, passwordUser} = req.body;
    const oneUser = await user.findOne({where : {userEmail : emailUser}}).catch( err => {
        console.log("ERROR ===>" + err); 
    })
    console.log(emailUser);
    console.log(`ini password user ${passwordUser}`);
    if(oneUser) {
        // console.log(oneUser)
        const password = oneUser.userPassword;
        console.log(password);
        await bcrypt.compare(passwordUser, password, (err, resp) => {
             if(resp) {
                // res.send({
                //     'status' : 404,
                //     'message' : 'good this time it is really good'
                // })
                res.redirect('http://localhost:3000/application/home')
                // res.send("Congrats vin you did it");
            } else {
                res.send("It is wrong, now what?")
            }
        })
    } else {
        res.send("your email hasn't been registered");
        res.get('http://localhost:3000/application/register');
    }
};
const postRegister = async (req, res) => {

    const saltRound = 5;
    const {userName, userEmail, userPassword, confirmUserPassword} = req.body;
    
    console.log(`user name -> ${userName}\n
    user Email -> ${userEmail}\n
    user Password -> ${userPassword}
    `);

    await user.create({
        userName : userName,
        userEmail : userEmail,
        userPassword : bcrypt.hashSync(userPassword, saltRound)
    }).catch( err => {
        console.log("ERROR ===>" + err); 
    });
    res.send('good Job Vin you finally did it');    
}

const getRegister = (req, res) => {
    res.render('register', {
        message : 'Register',
        attribute : [['User Name', 'userName', 'fa fa-user-circle', 'Please fill out the user name'], ['User Email','userEmail', 'fa fa-envelope', 'Please fill the email with unique email'], ['User Password','userPassword', 'fa fa-lock','please fill the password'], ['Confirm User Password','confirmUserPassword', 'fa fa-lock','please fill the password Again']],
    });
};

module.exports = {
    getLogin,
    postLogin,
    getRegister,
    postRegister
}