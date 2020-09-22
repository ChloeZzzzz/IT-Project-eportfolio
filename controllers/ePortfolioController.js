const db = require('../config/database.js');

const create = async (req, res) => {
    console.log(req.body)
    let {email, layout} = req.body
    try{
        console.log(email);
        console.log(layout);

        await db.query(`INSERT INTO E-portfolios (Email)VALUES (${email})`, async function(err, result) {
            if (err) {
                console.log("---creat EP ERROR---");
                console.log(err);
                return;
            }


        });
        await db.query(`SELECT FolioID, Email FROM E-portfolios WHERE Email = "${email}"`, async function(err, result) {
            if (err) {
                console.log("---verify EP creation ERROR---");
                console.log(err);
                return;
            }
            console.log(result[0].FolioID);
            console.log(result[0].Email);

        });
    }
    catch(err){
        console.log("---creat EP ERROR---");
        console.log(err);
        return;
    }


    return;
}



















module.exports = {
    create
}