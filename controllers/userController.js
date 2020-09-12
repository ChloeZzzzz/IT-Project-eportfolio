const db = require('../config/database.js');

const getUserLogin = (req, res) => {
    res.render("login.ejs");
}

const getUserSignup = (req, res) => {
    res.render("signup.ejs");
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
    getAllUser,
}