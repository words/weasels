import test from 'tape'
import {weasels} from './index.js'

test('weasels', function (t) {
  t.equal(typeof weasels, 'object', 'should be an array #1')
  t.equal(Array.isArray(weasels), true, 'should be an array #2')
  t.notEqual(weasels.indexOf('several'), -1, 'should contain words')

  t.end()
})
