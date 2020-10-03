/*
 * @Author: your name
 * @Date: 2020-10-03 19:53:37
 * @LastEditTime: 2020-10-03 20:11:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IT-Project-eportfolio\controllers\pageController.js
 */
const db = require('../config/database.js');


const addPage = async (req,res) => {
    console.log(req.body);
    let{email, folioId,templateId} = req.body;
    try{
        console.log(email);
        console.log(folioId);
        console.log(templateId);
        await db.query(`INSERT INTO Pages (FolioID, TemplateID) VALUES ("${folioId}", "${templateId}")`,async function(err, result){
            if (err) {
                console.log("---add Page ERROR---");
                console.log(err);
                return;
            }
            res.message('add Page success');

        });



    }
    catch(err){
        console.log("---add Page ERROR---");
        console.log(err);
        return;
    }


    return;
}



const deletePage = async (req,res) => {
    console.log(req.body)
    let {email, folioId,pageId} = req.body
    try{
        console.log(email);
        console.log(folioId);
        console.log(pageId);
        await db.query(`DELETE SourceText, SourceImage, Contents
                        FROM Contents
                        LEFT JOIN SourceText ON Contents.SourceID=SourceText.TextID
                        LEFT JOIN SourceImage ON Contents.SourceID=SourceImage.ImageID
                        WHERE FolioID = "${folioId}" AND PageID = "${pageId}"`,async function(err, result){
            if (err) {
                console.log("---add Page ERROR---");
                console.log(err);
                return;
            }

            res.message('Delete Page success');

            });
    }
    catch(err){
        console.log("---add Page ERROR---");
        console.log(err);
        return;
    }

    return;
}



module.exports = {
    addPage,
    deletePage
}
