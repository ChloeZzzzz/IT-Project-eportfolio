require('dotenv').config();

const express = require('express');
const app = express();

// ==== sessions & passport config ====
const passport = require('passport');
require('./config/passport')(passport);
const flash = require('connect-flash-plus');
app.use(flash());
const session = require("express-session");
app.use(session({
    cookie:{
        secure: false,
        maxAge: 60000
    },
    secret:"folihub_ichiban",
                resave:false,
                saveUninitialized: true
    }));
app.use(passport.initialize());
app.use(passport.session());

// ==== cors ====
const cors = require('cors');
app.use(cors({origin:["http://folihub.herokuapp\.com$/","http://localhost:3000", "http://folihub.herokuapp.com"],
            credentials:true,
            allowedHeaders:['Origin','X-Requested-With','Content-Type','Accept'],
            methods:['GET','PUT','POST','DELETE','OPTIONS'],
            preflightContinue:true}));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs'); // uncomment this line after product done


// ---ROUTER---
const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

const ePortfolioRouter = require('./routes/ePortfolioRouter');
app.use('/ePortfolio', ePortfolioRouter);

app.get('/', (req, res) => {
    res.send('Hello FoliHub!');
});



app.listen(process.env.PORT || 3000, () => {
    console.log('Folihub is listening on port ' + PORT)
});