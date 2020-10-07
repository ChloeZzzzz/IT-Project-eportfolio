const express = require('express');
const ePortfolioRouter = express.Router();
const ePortfolioController = require('../controllers/ePortfolioController');


//create a ePortfolio
ePortfolioRouter.post('/createEPortfolio', ePortfolioController.createEPortfolio);

// save an eportfolio page (img and content)
ePortfolioRouter.post('/savePage', ePortfolioController.savePage);

//get a ePortfolio
ePortfolioRouter.post('/getEportfolio', ePortfolioController.getEportfolio);

// get all eportfolios of current user
ePortfolioRouter.get('/getEportfolios/:email', ePortfolioController.getEportfolios);

//rename a ePortfolio
ePortfolioRouter.post('/renameFolio', ePortfolioController.renameFolio);

ePortfolioRouter.get('/hackep', ePortfolioController.hackep);

module.exports = ePortfolioRouter;

