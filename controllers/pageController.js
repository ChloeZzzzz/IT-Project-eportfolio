const db = require('../config/database.js');
const DATE_FORMATER = require('dateformat');

const deletePage = async(req,res) => {
    console.log(req.body)
    let {pageId, folioId} = req.body
    try{
        console.log(pageId);
        console.log(folioId);

    }

}
module.exports = {}
