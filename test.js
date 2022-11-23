import test from 'tape'
import {isAlphanumerical} from './index.js'

test('isAlphanumerical(character)', function (t) {
  const _0 = 0x30
  const _9 = 0x39
  const A = 0x41
  const Z = 0x5a
  const a = 0x61
  const z = 0x7a

  t.ok(isAlphanumerical('a'))
  t.ok(isAlphanumerical('z'))
  t.ok(isAlphanumerical('A'))
  t.ok(isAlphanumerical('Z'))
  t.ok(isAlphanumerical('0'))
  t.ok(isAlphanumerical('9'))
  t.ok(isAlphanumerical(a))
  t.ok(isAlphanumerical(_9))
  t.notOk(isAlphanumerical('\t'))
  t.notOk(isAlphanumerical(a - 1))
  t.notOk(isAlphanumerical(z + 1))
  t.notOk(isAlphanumerical(A - 1))
  t.notOk(isAlphanumerical(Z + 1))
  t.notOk(isAlphanumerical(_0 - 1))
  t.notOk(isAlphanumerical(_9 + 1))
  t.notOk(isAlphanumerical('💩'))

  t.end()
})
