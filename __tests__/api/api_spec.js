const frisby = require('frisby');
const Joi = require('joi');
const { setup } = require('../../setup/setup');

describe('sum module', () => {
    setup();

    test('should be a teapot status code', function () {
        return frisby
            .get('http://httpbin.org/status/418')
            .expect('status', 418);
    });

    test('check headers and body', function () {
        return frisby
            .get('https://httpbin.org/headers')
            .expect('header', 'Content-Type', 'application/json')
            .expect('json', 'headers', {
                'Accept-Encoding': 'gzip,deflate'
            })
            .expect('jsonTypes', '*', {
                'Host': Joi.string()
            })
    })

    test('JSON inspector', function (done) {
        frisby
            .get('https://httpbin.org/headers')
            .inspectRequestHeaders()
            .inspectJSON()
            .done(done);
    });
});