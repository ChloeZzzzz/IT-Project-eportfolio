require('dotenv').config();

const express = require('express');
const session = require("express-session");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./config/database');
const flash = require('connect-flash-plus');
const passport = require('passport');
const cors = require('cors');
require('./config/passport')(passport);
app.use(flash());
//sessions
app.use(session({secret:"folihub_ichiban",
                resave:true,
                saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
//cors
app.use(cors({origin:["http://folihub.herokuapp\.com$/","http://localhost:3000", "http://folihub.herokuapp.com"],
            credentials:true,
            allowedHeaders:['Origin','X-Requested-With','Content-Type','Accept'],
            methods:['GET','PUT','POST','DELETE','OPTIONS'],
            preflightContinue:true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs'); // uncomment this line after product done


// ---ROUTER---
const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Hello FoliHub!');
});



app.listen(process.env.PORT || 3000, () => {
    console.log('Folihub is listening on port ' + PORT)
});