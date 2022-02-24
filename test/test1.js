
'use strict';

const assert = require('assert');
const hello = require('../index');

describe('test suite', function () {
  it('hello test', function (done) {
    assert.strictEqual(hello(), 'hello');
    done();
  });
});
