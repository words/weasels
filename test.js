import assert from 'node:assert'
import test from 'node:test'
import {weasels} from './index.js'

test('weasels', function () {
  assert.equal(typeof weasels, 'object', 'should be an array #1')
  assert.equal(Array.isArray(weasels), true, 'should be an array #2')
  assert.notEqual(weasels.indexOf('several'), -1, 'should contain words')
})
