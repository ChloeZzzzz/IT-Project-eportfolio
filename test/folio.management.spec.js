//Add promise support if this does not exist natively
if (!global.Promise) {
    global.Promise = require('q');
}
var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = chai.expect;
const db = require('../config/database.js');

var ePortfolioController = require('../controllers/ePortfolioController');

var app = 'https://folihub-api.herokuapp.com/ePortfolio';

chai.use(chaiHttp);
describe("POST / createEPortfolio", function (done) {
    it ("should successfully send the request to the database", function (done) {
        this.timeout(5000);
        let data = {};
        data.email = "test@test.test";
        data.folioName = "test";
        data.visibility = "public";
        data.layout = "landscape";

        chai.request(app)
            .post('/createEPortfolio')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(data)
            .end(function(err, response) {
                expect(response).to.has.status(200);
                done();
            });
    });
})

describe("POST / ")
