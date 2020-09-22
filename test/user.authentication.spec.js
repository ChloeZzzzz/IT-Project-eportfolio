//Add promise support if this does not exist natively
if (!global.Promise) {
    global.Promise = require('q');
}
var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = chai.expect;

var userController = require('../controllers/userController');

var app = 'https://folihub-api.herokuapp.com/user';

chai.use(chaiHttp);

describe("POST /login", function (done) {
    it ("should login with correct email as password", function (done) {
        this.timeout(5000);
        let userInfo = {};
        userInfo.email = "test@test.test";
        userInfo.password = "test";

        chai.request(app)
            .post('/login')
            .send(userInfo)
            .end(function(err, response) {
                console.log(response);
                expect(response).to.has.status(200);
                done();
            });
    });
});