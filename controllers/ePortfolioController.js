const db = require('../config/database.js');

const createEPortfolio = async (req, res) => {
    console.log(req.body)
    let {email, layout} = req.body
    try{
        console.log(email);
        console.log(layout);

        await db.query(`INSERT INTO E-portfolios (Email)VALUES ("${email}")`, async function(err, result) {
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
            res.message('create EP success');

        });


    }
    catch(err){
        console.log("---creat EP ERROR---");
        console.log(err);
        return;
    }


    return;
}


const getEPortfolio = async (req, res) => {
    console.log(req.body)
    let {email, folioId} = req.body
    try{
        console.log(email);
        console.log(folioId);

        await db.query(`SELECT *
            FROM Contents
            LEFT JOIN SourceText ON Contents.SourceID=SourceText.TextID
            LEFT JOIN SourceImage ON Contents.SourceID=SourceImage.ImageID
            WHERE FolioID="${folioId}" ORDER BY PageID ASC;`, async function(err, result) {
            if (err) {
                console.log("---get EP ERROR---");
                console.log(err);
                return;
            }
            console.log(result);
        });

    }
    catch(err){
        console.log("---get EP ERROR---");
        console.log(err);
        return;
    }


    return;
}

const renameEportfolio = async (req,res) => {
    return;
}




const renameEportfolio = async (req, res) => {
    console.log(req.body)
    let {email, folioId,newName} = req.body
    try{
        console.log(email);
        console.log(folioId);
        console.log(newName);
        await db.query(`UPDATE Eportfolios SET Name ="${newName}" where FolioID ="${folioId}";`, async function(err, result) {
            if (err) {
                console.log("---EP name change ERROR---");
                console.log(err);
                return;
            }

        });
        await db.query(`SELECT FolioID, Name FROM E-portfolios WHERE FolioID="${folioId}"`, async function(err, result) {
            if (err) {
                console.log("---EP name change ERROR---");
                console.log(err);
                return;
            }
            console.log(result[0].FolioID);
            console.log(result[0].Name);
            res.message('rename success');
            res.message("name:",result[0].Name);

        });
    }
    catch(err){
        console.log("---EP name change ERROR---");
        console.log(err);
        return;
    }
    return;
}











module.exports = {
    createEPortfolio,

    getEPortfolio,
    
    renameEportfolio
}

