const db = require('../config/database.js');

const getUserLogin = (req, res) => {
    res.render("login.ejs");
}

const getUserSignup = (req, res) => {
    res.render("signup.ejs");
}

const successSignup = (req, res) => {
    res.json(req.session);
    return res.end();
}

const failureSignup = (req, res) => {
    res.json(req.session)
    return res.end();
}

const successLogin = (req, res) => {
    res.json(req.session);
    return res.end();
}

const failureLogin = (req, res) => {
    res.json(req.session);
    return res.end();
}

const getAllUser = (req, res) => {
    db.query("SELECT * FROM Users", (err, result) => {
        console.log(result);
        res.send(result);
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