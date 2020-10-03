/*
 * @Author: your name
 * @Date: 2020-10-03 19:53:37
 * @LastEditTime: 2020-10-03 19:54:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IT-Project-eportfolio\controllers\pageController.js
 */
const db = require('../config/database.js');

const deletePage = async(req,res) => {
    console.log(req.body)
    let {pageId, folioId} = req.body
    try{
        console.log(pageId);
        console.log(folioId);

    }

}
module.exports = {}
