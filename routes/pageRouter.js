const express = require('express');
const pageRouter = express.Router();
const pageController = require('../controllers/pageController');



//add a page
pageRouter.post('/addPage', pageController.addPage);

//delete a page
pageRouter.post('/deletePage', pageController.deletePage);






module.exports = pageRouter;