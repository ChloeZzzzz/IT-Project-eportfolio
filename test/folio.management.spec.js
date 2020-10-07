//Add promise support if this does not exist natively
if (!global.Promise) {
    global.Promise = require('q');
}
var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = chai.expect;
const db = require('../config/database.js');

var ePortfolioController = require('../controllers/ePortfolioController');

var app = 'https://folihub-api.herokuapp.com/user';

chai.use(chaiHttp);
