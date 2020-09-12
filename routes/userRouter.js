const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

userRouter.use(express.urlencoded({extended: true}));

// user log in
userRouter.get('/login', userController.getUserLogin);
userRouter.post('/login',
    passport.authenticate("cookie-login", { successRedirect: './successlogin',
                                            failureRedirect: './failurelogin',
                                            failureFlash:true}
));
userRouter.get('/successlogin', userController.successLogin);
userRouter.get('/failurelogin', userController.failureLogin);


// user sign up
userRouter.get('/signup', userController.getUserSignup);
userRouter.post('/signup',
    passport.authenticate("local-signup", { successRedirect: './successsignup',
                                            failureRedirect: './failuresignup',
                                            failureFlash:true}
));
userRouter.get('/successsignup', userController.successSignup);
userRouter.get('/failuresignup', userController.failureSignup);


// my secret router for getting all the user db, uncomment it before publish
userRouter.get('/hackUser', userController.getAllUser);


module.exports = userRouter;