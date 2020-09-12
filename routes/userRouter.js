const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

userRouter.use(express.urlencoded({extended: false}));

// user log in
userRouter.get('/login', userController.getUserLogin);

userRouter.post('/login',
    passport.authenticate("cookie-login", { successRedirect: './successlogin',
                                            failureRedirect: './failurelogin',
                                            failureFlash:true}
));


module.exports = userRouter;