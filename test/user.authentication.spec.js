//Add promise support if this does not exist natively
if (!global.Promise) {
    global.Promise = require('q');
}
var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = chai.expect;
const db = require('../config/database.js');

var userController = require('../controllers/userController');

var app = 'https://folihub-api.herokuapp.com/user';

chai.use(chaiHttp);

describe("POST /login", function (done) {
    it ("should login with correct email and password", function (done) {
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

  //a negative unit test
  it("User should not be able to present SQL injection", function(done) {
    this.timeout(5000);
    //send login data
    let userInfo = {};
    userInfo.email = '""or""=""';
    userInfo.password = '""or""==""';
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

describe("POST /signup", function (done) {
    it ("should signup with email and password", function (done) {
        this.timeout(5000);
        let userInfo = {};
        userInfo.email = "test1@test.test";
        userInfo.password = "test";

        chai.request(app)
            .post('/signup')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(userInfo)
            .end(function(err, response) {
                expect(response).to.has.status(200);
                expect(response["redirects"][0]).to.equal(app+'/successsignup');
                done();
            });
    });

    //a negative unit test case
    it("User should not signup with already exist username", function(done) {
      this.timeout(5000);
      //send login data
      let userInfo = {};
      userInfo.email = 'test@test.test';
      userInfo.password = 'test';
      chai.request(app)
          .post('/signup')
          .set('content-type', 'application/x-www-form-urlencoded')
          .send(userInfo)
          .end(function(err, response) {
            //console.log(response["redirects"]);
            expect(response).to.has.status(200);
            expect(response["redirects"][0]).to.equal(app+'/failuresignup');
            done();
          });
    });
    //a negative unit test
    it("User should not be able to present SQL injection", function(done) {
      this.timeout(5000);
      //send login data
      let userInfo = {};
      userInfo.email = '""or""=""';
      userInfo.password = '""or""==""';
      chai.request(app)
          .post('/signup')
          .set('content-type', 'application/x-www-form-urlencoded')
          .send(userInfo)
          .end(function(err, response) {
            expect(response).to.has.status(200);
            expect(response["redirects"][0]).to.equal(app+'/failuresignup');
            done();
          });
    });
});
