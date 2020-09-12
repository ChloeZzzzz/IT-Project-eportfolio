const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const db = require('./database.js');

module.exports = (passport)=>{
    passport.use("cookie-login", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true},
        async (req, email, password, done)=>{
            let session = req.session;
            if (session.passport) {
                console.log("user already logged in");
                await db.query(`SELECT Email, userPassword FROM Users WHERE Email = "${email}"`, (err, result) => {
                    return done(null, result[0], req.flash("signupMessage", "User already logged in"));
                });
            } else {
                try{
                    console.log(email);
                    console.log(password);

                    await db.query(`SELECT Email, userPassword FROM Users WHERE Email = "${email}"`, async function(err, result) {
                        if (err) {
                            console.log("---LOG IN ERROR---");
                            console.log(err);;
                            return;
                        }
                        console.log(result[0].Email);
                        console.log(result[0].userPassword);
    
                        var correctpw = await bcrypt.compare(password, result[0].userPassword);
                        if (!result) {
                            return done(null, false, req.flash("loginMessage", "No user found"));
                        }
                        else if (!correctpw) {
                            console.log("wrong password");
                            return done(null, false, req.flash("loginMessage", "Wrong password"));
                        }
                        else {
                            req.session.email = email;
                            return done(null, result[0], req.flash("loginMessage", "Successful login"));
                        }
                    });
                }
                catch(err){
                    return done(err);
                }
            }
        }
    ));

    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true},
        async  (req, email, password, done)=>{
            let session = req.session;
            if (session.passport) {
                console.log("user already logged in");
                await db.query(`SELECT Email, userPassword FROM Users WHERE Email = "${email}"`, (err, result) => {
                    return done(null, result[0], req.flash("signupMessage", "User already logged in"));
                });
            } else {
                try{
                    await db.query(`SELECT Email, userPassword FROM Users WHERE Email = "${email}"`, async (err, result) => {
                        if (err) {
                            console.log("---SIGN UP ERROR---");
                            console.log(err);
                            return;
                        }
                        if(result[0]){
                            return done(null, false, req.flash("signupMessage", "Email already taken"));
                        }
                        else{
                            var hashed = await bcrypt.hash(password, 10); // encrypt the password
                            db.query(`INSERT INTO Users VALUES("${email}", "${hashed}")`, (err, result) => { {
                                return done(null, {Email: email, userPassword: hashed}, req.flash("signupMessage", "Signup Success"));
                            }})
                            req.session.email = email;
                        }
                    });
                }
                catch(err){
                    console.log("ERROR");
                    console.log(err);
                    return done(err);
                }
            }
        })
    );
    
    passport.serializeUser((user, done) => {
        done(null, user.Email);
    });
    passport.deserializeUser(async (Email, done) => {
        await db.query(`SELECT Email, userPassword FROM Users WHERE Email = "${Email}"`, (err, result) => {
            done(null, result);
        })
    });
}
