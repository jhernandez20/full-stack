const expect = require('chai').expect;
const request = require('request');
const config = require('../config/env.config');

describe('Test hacker news feed.', function () {
    describe('Articles', function () {
        it('Correct request', function (done) {
            request(config.test.host + config.test.path + 'articles', function (error, response, body) {
                console.log(response.statusCode);
                expect(response.statusCode).to.equal(200);
                expect(body.articles).to.be.an('array');
                expect(body.articles[0].author).to.be.a('string');
                done();
            });
        });

        it('Wrong request', function (done) {
            request(config.test.host + config.test.path + 'articlesXXX', function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

});