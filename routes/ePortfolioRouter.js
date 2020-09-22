const express = require('express');
const ePortfolioRouter = express.Router();
const ePortfolioController=require('../controllers/ePortfolioController');


//create a ePortfolio
ePortfolioRouter.post('/create', (req, res) => {
    ePortfolioController.create()
});


module.exports = ePortfolioRouter;