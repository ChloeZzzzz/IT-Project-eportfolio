const express = require('express');
const ePortfolioRouter = express.Router();
const ePortfolioController = require('../controllers/ePortfolioController');


//create a ePortfolio
ePortfolioRouter.post('/createEPortfolio', ePortfolioController.createEPortfolio);

// create a new page given an eportfolio id
ePortfolioRouter.post('/createPage', ePortfolioController.createPage);

// save an eportfolio page (img and content)
ePortfolioRouter.post('/savePage', ePortfolioController.savePage);

// get an eportfolio page given the page id
ePortfolioRouter.post('/getPage', ePortfolioController.getPage);

//get a ePortfolio
ePortfolioRouter.post('/getEportfolio', ePortfolioController.getEportfolio);

// get all eportfolios of current user
ePortfolioRouter.get('/getEportfolios/:email', ePortfolioController.getEportfolios);

//rename a ePortfolio
ePortfolioRouter.post('/renameFolio', ePortfolioController.renameFolio);

ePortfolioRouter.get('/hackep', ePortfolioController.hackep);

module.exports = ePortfolioRouter;
