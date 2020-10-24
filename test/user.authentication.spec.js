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
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(userInfo)
            .end(function(err, response) {
                expect(response).to.has.status(200);
                expect(response["redirects"][0]).to.equal(app+'/successlogin');
                done();
            });
    });
    //a negative unit test case
  it("User should not login with wrong password", function(done) {
    this.timeout(5000);
    //send login data
    let userInfo = {};
    userInfo.email = 'test@test.test';
    userInfo.password = 'wrongpsw';
    chai.request(app)
        .post('/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(userInfo)
        .end(function(err, response) {
          //console.log(response["redirects"]);
          expect(response).to.has.status(200);
          expect(response["redirects"][0]).to.equal(app+'/failurelogin');
          done();
        });
  });

  //a negative unit test
  it("User should not login if not sign up", function(done) {
    this.timeout(5000);
    //send login data
    let userInfo = {};
    userInfo.email = 'wrongusername@test.test';
    userInfo.password = 'test';
    chai.request(app)
        .post('/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(userInfo)
        .end(function(err, response) {
          expect(response).to.has.status(200);
          expect(response["redirects"][0]).to.equal(app+'/failurelogin');
          done();
        });
  });

});