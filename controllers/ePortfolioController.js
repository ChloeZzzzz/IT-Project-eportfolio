const db = require('../config/database.js');
const DATE_FORMATER = require('dateformat');



const createEPortfolio = async (req, res) => {
    console.log(req.body)
    let {email, folioName, visibility, layout} = req.body
    try{
        console.log(email);
        console.log(layout);
        var now = DATE_FORMATER(new Date(), "yyyy-mm-dd");
        await db.query(`INSERT INTO Eportfolios (Email, FolioName, Visibility, Layout, LastModified) VALUES ("${email}", "${folioName}", "${visibility}", "${layout}", "${now}")`, async function(err, result) {
            if (err) {
                console.log("---creat EP ERROR---");
                console.log(err);
                return res.status(200).send({"message": 'failed to create EP'});
            }
            console.log("---RESULT---");
            console.log(result);
            res.status(200).send({"message": 'create EP success'});
            return res.end();
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
    let {folioId} = req.body
    try{

        console.log(folioId);

        await db.query(`SELECT *
            FROM Contents
            WHERE FolioID="${folioId}" ORDER BY PageID ASC ;`, async function(err, result) {
            if (err) {
                console.log("---get EP ERROR---");
                console.log(err);
                return;
            }
            var string=JSON.stringify(result);
            var data = JSON.parse(string)
            console.log(data);

            res.send(data);
        });

    }
    catch(err){
        console.log("---get EP ERROR---");
        console.log(err);
        return;
    }


    return;
}
//26/09/2020 Column Name need to add to database and new req variable need to add
const renameEportfolio = async (req,res) => {
    console.log(req.body)
    let{email, folioId, newName} = req.body
    try{
        console.log(email);
        console.log(folioId);
        await db.query(`UPDATE E-portfolios
            SET Name = "${newName}"
            WHERE FolioID="${folioId}" ;`,async function(err, result){
            if (err) {
                console.log("---get EP ERROR---");
                console.log(err);
                return;
            }
        });

        await dp.query(`SELECT FolioID, Name FROM E-portfolios WHERE Name = "${newName}" ;`,async function(err,result){
            if (err) {
                console.log("---verify EP creation ERROR---");
                console.log(err);
                return;
            }
            console.log(result[0].FolioID);

            res.message('rename success');
            res.message("name:",result[0].Name);
        });



    }
    catch(err){
        console.log("---get EP ERROR---");
        console.log(err);
        return;
    }

    return;
}

// back door
const hackep = async (req, res) => {
    await db.query(`SELECT FolioName, Visibility, Layout, LastModified FROM Eportfolios`, (err, result) => {
        if (err) {
            console.log("===err===");
            console.log(err);
        }
        console.log(result);
        res.send(result);
        return res.end();
    })
}

const deleteEPortfolio = async (req,res) => {
    console.log(req.body)
    let {email,folioId} = req.body
    try{
        console.log(email);
        console.log(folioId);
        await db.query(`DELETE Eportfolios,pages,Contents
                        FROM Eportfolios
                        LEFT JOIN Pages on Eportfolios.FolioID = Pages.FolioID
                        LEFT JOIN Contents on Pages.FolioID = Contents.FolioID AND Pages.PageID = Contents.PageID
                        WHERE FolioID = "${folioId}"`,async function(err, result){
                        if (err) {
                            console.log("---Delete EP ERROR---");
                            console.log(err);
                            return;
                        }

        });


    }
    catch(err){
        console.log("---Delete EP ERROR---");
        console.log(err);
        return;
    }
    return;
}

module.exports = {
    createEPortfolio,
    getEPortfolio,
    renameEportfolio,
    deleteEPortfolio,
    hackep,
    deleteEPortfolio,
}
