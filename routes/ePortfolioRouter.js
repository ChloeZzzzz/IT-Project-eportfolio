const express = require('express');
const ePortfolioRouter = express.Router();
const ePortfolioController = require('../controllers/ePortfolioController');


//create a ePortfolio
ePortfolioRouter.post('/createEPortfolio', ePortfolioController.createEPortfolio);

//get a ePortfolio
ePortfolioRouter.post('/getEPortfolio', (req, res) => {
    ePortfolioController.getEPortfolio()
});

// get all eportfolios of current user
ePortfolioRouter.get('/getEportfolios/:email', ePortfolioController.getEortfolios);

//rename a ePortfolio
ePortfolioRouter.post('/renameEportfolio', (req, res) => {
    ePortfolioController.renameEportfolio()
});

ePortfolioRouter.get('/hackep', ePortfolioController.hackep);

module.exports = ePortfolioRouter;

