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
                db.query('SELECT * FROM Users', function(err, result) {
                    if (err) {
                        console.log("DB ERROR");
                        console.log(err);
                        return;
                    }
                    console.log("---select---");
                    console.log(result);
                });
            }
            catch(err){
                return done(err);
            }
        }
    ));
    
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(async (_id, done) => {
        Users.findById(_id, (err,user) =>{
            done(null, user);
        })
    });
}
