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


ePortfolioRouter.post('/deleteEportfolio', ePortfolioController.deleteEportfolio);

// delete the last page of a given eportfolio
ePortfolioRouter.post('/deleteLastPage', ePortfolioController.deleteLastPage);

module.exports = ePortfolioRouter;

