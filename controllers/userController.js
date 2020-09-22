const db = require('../config/database.js');

const getUserLogin = (req, res) => {
    res.render("login.ejs");
    return res.end();
}

const getUserSignup = (req, res) => {
    res.render("signup.ejs");
    return res.end();
}

const successSignup = (req, res) => {
    console.log(req.session);
    res.send(req.session);
    console.log(res.data);
    return res.end();
}

const failureSignup = (req, res) => {
    res.json(req.session)
    return res.end();
}

const successLogin = (req, res) => {
    res.status(200).send({"hp": "grl"});
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