var helper = require('./helper')();
var assert = require('assert');

var root = 'E:\\node_modules\\path-helper';

assert.equal(helper.resolve('abc').toLowerCase(), (root + '\\' + 'abc').toLowerCase());
assert.equal(helper.resolve('./abc').toLowerCase(), (root + '\\' + './abc').toLowerCase());
