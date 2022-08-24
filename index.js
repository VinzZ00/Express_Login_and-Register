const router = require('./route');
const Express = require('express');
const app = Express();
const port = 3000;


app.use(Express.static('./public'));

app.set('view engine', 'ejs');

try {
    db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }

app.use('/', router)

app.use('/', (req,res) => {
    res.send('ERROR 404')
})

app.listen(port, () =>{
    console.log(`App is running on http://localhost:${port}/application/login`);
})

