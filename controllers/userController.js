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
    console.log("===req session===");
    console.log(req.session);
    res.status(200).send({"message": req.session.flash, "email": req.session.email});
    return res.end();
}

const failureSignup = (req, res) => {
    console.log("===req session===");
    console.log(req.session);
    res.status(200).send({"message": req.session.flash});
    return res.end();
}

const successLogin = (req, res) => {
    console.log("===req session===");
    console.log(req.session);
    res.status(200).send({"message": req.session.flash, "email": req.session.email});
    return res.end();
}

const failureLogin = (req, res) => {
    console.log("===req session===");
    console.log(req.session);
    res.status(200).send({"message": req.session.flash});
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