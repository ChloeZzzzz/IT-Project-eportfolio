const getUserLogin = (req, res) => {
    res.render("login.ejs");
}

const successLogin = (req, res) => {
    res.json(req.session);
    return res.end();
}

const failureLogin = (req, res) => {
    res.json(req.session);
    return res.end();
}

module.exports = {
    getUserLogin,
}