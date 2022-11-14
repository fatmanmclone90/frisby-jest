const frisby = require('frisby');

exports.setup = function() {
  frisby.globalSetup({
  request: {
    headers: {
      'Content-Type': 'application/json',
      'foo': 'bar'
    }
  }});
};