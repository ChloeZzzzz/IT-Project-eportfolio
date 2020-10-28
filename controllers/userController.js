const db = require('../config/database.js');

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


const getUserLogin = (req, res) => {
    res.render("login.ejs");
    return res.end();
}

const getUserSignup = (req, res) => {
    res.render("signup.ejs");
    return res.end();
}

const successSignup = (req, res) => {
    console.log("===req session===");
    console.log(req.session);
    const token = jwt.sign({"message": req.session.flash, "email": req.session.email}, 'folihub_ichiban');
    res.status(200);
    res.cookie('jwt', token, {httpOnly: false, sameSite: false});
    return res.json(token);
}

const failureSignup = (req, res) => {
    console.log("===req session===");
    console.log(req.session);
    res.status(200).json({"message": req.session.flash});
    return res.end();
}

const successLogin = (req, res) => {
    console.log("===req session===");
    console.log(req.session);
    const token = jwt.sign({"message": req.session.flash, "email": req.session.email}, 'folihub_ichiban');
    res.status(200);
    res.cookie('jwt', token, {httpOnly: false, sameSite: false});
    return res.end();
}

const failureLogin = (req, res) => {
    console.log("===req session===");
    console.log(req.session);
    const token = jwt.sign({"message": req.session.flash}, 'folihub_ichban');
    res.status(200);
    res.cookie('jwt', token, {httpOnly: false, sameSite: false});
    return res.end();
}

const getAllUser = (req, res) => {
    db.query("SELECT * FROM Users", (err, result) => {
        console.log(result);
        res.send(result);
        return res.end();
    })
}

module.exports = {
    getUserLogin,
    getUserSignup,
    successLogin,
    failureLogin,
    successSignup,
    failureSignup,
    getAllUser,
}