require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./config/database');
const passport = require('passport');
require('./config/passport')(passport);

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');


const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);


app.get('/', (req, res) => {
    res.send('Hello FoliHub!');
});



app.listen(process.env.PORT || 3000, () => {
    console.log('Folihub is listening on port ' + PORT)
});