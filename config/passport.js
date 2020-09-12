const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');
const db = require('./database.js');

module.exports = (passport)=>{
    passport.use("cookie-login", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true},
        async (req, email, password, done)=>{
            try{
                console.log(req);
                console.log(email);
                console.log(password);
                /*
                db.query('SELECT * FROM Users', function(err, result) {
                    if (err) {
                        console.log("DB ERROR");
                        console.log(err);
                        return;
                    }
                    console.log("---select---");
                    console.log(result);
                });
                */
                await db.query(`SELECT Email, userPassword FROM Users WHERE Email = "${email}"`, function(err, result) {
                    if (err) {
                        console.log("ERROR:");
                        console.log(err);;
                        return;
                    }
                    console.log(result);
                    console.log(result[0].Email);
                    console.log(result[0].userPassword);
                    
                    if (!result) {
                        return done(null, false, req.flash("loginMessage", "No user found"));
                    }
                    else if (result[0].userPassword !== password) {
                        return done(null, false, req.flash("loginMessage", "Wrong password"));
                    }
                    else {
                        return done(null, result[0], req.flash("loginMessage", "Successful login"));
                    }
                    
                });
            }
            catch(err){
                return done(err);
            }
        }
    ));
    
    passport.serializeUser((user, done) => {
        done(null, user.Email);
    });
    passport.deserializeUser(async (Email, done) => {
        await db.query(`SELECT Email, userPassword FROM Users WHERE Email = "${Email}"`, (err, result) => {
            done(null, result);
        })
    });
}
