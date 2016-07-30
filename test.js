/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module weasels
 * @fileoverview Test suite for `weasels`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var weasels = require('./');

/* Tests. */
test('characterEntities', function (t) {
  t.equal(typeof weasels, 'object', 'should be an array #1');
  t.equal(Array.isArray(weasels), true, 'should be an array #2');
  t.notEqual(weasels.indexOf('several'), -1, 'should contain words');

  t.end();
});
