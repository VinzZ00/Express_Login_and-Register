const Express = require('express');
const router = require('express').Router();
const {getLogin, postLogin, getRegister, postRegister} = require('./controllers/index');

router.use(Express.urlencoded({
    extended : true,
}));

router.use((req, res, next) => {
    console.log('accessed in ', Date());
    next();
})

router.route('/application/login')
.get(getLogin)
.post(postLogin)

router.route('/application/register')
.get(getRegister)
.post((req, res) => {
    
});

router.get('/application/home', (req, res) =>{
    res.send('this is in the home page, wait gais sabarrr').status(res.status);
})


module.exports = router;