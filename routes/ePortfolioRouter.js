const express = require('express');
const ePortfolioRouter = express.Router();
const ePortfolioController=require('../controllers/ePortfolioController');


//create a ePortfolio
ePortfolioRouter.post('/createEPortfolio', (req, res) => {
    ePortfolioController.createEPortfolio()
});

//get a ePortfolio
ePortfolioRouter.post('/getEPortfolio', (req, res) => {
    ePortfolioController.getEPortfolio()
});

<<<<<<< Updated upstream
ePortfolioRouter.post('/renameEportfolio', (req, res) => {
    ePortfolioController.renameEportfolio()
});
module.exports = ePortfolioRouter;
=======
//rename a ePortfolio
ePortfolioRouter.post('/renameEportfolio', (req, res) => {
    ePortfolioController.renameEportfolio()
});

module.exports = ePortfolioRouter;
>>>>>>> Stashed changes
