/*
 * @Author: your name
 * @Date: 2020-10-03 19:34:38
 * @LastEditTime: 2020-10-24 22:52:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IT-Project-eportfolio\routes\ePortfolioRouter.js
 */
const express = require('express');
const ePortfolioRouter = express.Router();
const ePortfolioController = require('../controllers/ePortfolioController');


//create a ePortfolio
ePortfolioRouter.post('/createEPortfolio', ePortfolioController.createEPortfolio);

//get a ePortfolio
ePortfolioRouter.post('/getEPortfolio', (req, res) => {
    ePortfolioController.getEPortfolio(req, res)
});

//rename a ePortfolio
ePortfolioRouter.post('/renameEportfolio', (req, res) => {
    ePortfolioController.renameEportfolio(req, res)
});

//delete ePortfolio
ePortfolioRouter.post('/deleteEportfolio', (req, res) => {
    ePortfolioController.deleteEportfolio(req, res)
});


ePortfolioRouter.get('/hackep', ePortfolioController.hackep);

ePortfolioRouter.post('/deleteEPortfolio', (req, res) => {
    ePortfolioController.deleteEPortfolio()
});

module.exports = ePortfolioRouter;
