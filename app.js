require('dotenv').config();

const express = require('express');
const session = require("express-session");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const connection = require('./config/database');
const flash = require('connect-flash-plus');
const passport = require('passport');
require('./config/passport')(passport);
app.use(flash());
//sessions
app.use(session({secret:"folihub_ichiban",
                resave:true,
                saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

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