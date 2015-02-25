var helper = require('./helper')();
var assert = require('assert');

var root = __dirname;
var path = require('path');

assert.equal(helper.resolve('abc').toLowerCase(), (root + path.sep + 'abc').toLowerCase());
assert.equal(helper.resolve('./abc').toLowerCase(), (root + path.sep + 'abc').toLowerCase());
// // assert.equal(helper.resolve('../abc').toLowerCase(), (root + path.sep + 'abc').toLowerCase());

console.log('all tests passed!');
