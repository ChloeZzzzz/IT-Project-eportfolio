const express = require('express');
const ePortfolioRouter = express.Router();
const ePortfolioController = require('../controllers/ePortfolioController');


//create a ePortfolio
ePortfolioRouter.post('/createEPortfolio', ePortfolioController.createEPortfolio);

//get a ePortfolio
ePortfolioRouter.post('/getEPortfolio', (req, res) => {
    ePortfolioController.getEPortfolio()
});

//rename a ePortfolio
ePortfolioRouter.post('/renameEportfolio', (req, res) => {
    ePortfolioController.renameEportfolio()
});

ePortfolioRouter.get('/hackep', ePortfolioController.hackep);

ePortfolioRouter.post('/deleteEPortfolio', (req, res) => {
    ePortfolioController.deleteEPortfolio()
});

module.exports = ePortfolioRouter;
