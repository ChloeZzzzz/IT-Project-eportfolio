const express = require('express');
const pageRouter = express.Router();
const pageController = require('../controllers/pageController');

pageRouter.post('/deletePage', (req, res) => {
    pageController.getEPortfolio(req, res)
});
