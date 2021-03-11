import test from 'tape'
import {isAlphanumerical} from './index.js'

test('isAlphanumerical(character)', function (t) {
  t.ok(isAlphanumerical('a'))
  t.ok(isAlphanumerical('z'))
  t.ok(isAlphanumerical('A'))
  t.ok(isAlphanumerical('Z'))
  t.ok(isAlphanumerical('0'))
  t.ok(isAlphanumerical('9'))
  t.ok(isAlphanumerical('a'.charCodeAt(0)))
  t.ok(isAlphanumerical('9'.charCodeAt(0)))
  t.notOk(isAlphanumerical('\t'))
  t.notOk(isAlphanumerical('a'.charCodeAt(0) - 1))
  t.notOk(isAlphanumerical('z'.charCodeAt(0) + 1))
  t.notOk(isAlphanumerical('A'.charCodeAt(0) - 1))
  t.notOk(isAlphanumerical('Z'.charCodeAt(0) + 1))
  t.notOk(isAlphanumerical('0'.charCodeAt(0) - 1))
  t.notOk(isAlphanumerical('9'.charCodeAt(0) + 1))
  t.notOk(isAlphanumerical('💩'))

  t.end()
})
