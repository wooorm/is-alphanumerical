import assert from 'node:assert/strict'
import test from 'node:test'
import {isAlphanumerical} from './index.js'

test('isAlphanumerical(character)', function () {
  const _0 = 0x30
  const _9 = 0x39
  const A = 0x41
  const Z = 0x5a
  const a = 0x61
  const z = 0x7a

  assert.ok(isAlphanumerical('a'))
  assert.ok(isAlphanumerical('z'))
  assert.ok(isAlphanumerical('A'))
  assert.ok(isAlphanumerical('Z'))
  assert.ok(isAlphanumerical('0'))
  assert.ok(isAlphanumerical('9'))
  assert.ok(isAlphanumerical(a))
  assert.ok(isAlphanumerical(_9))
  assert.ok(!isAlphanumerical('\t'))
  assert.ok(!isAlphanumerical(a - 1))
  assert.ok(!isAlphanumerical(z + 1))
  assert.ok(!isAlphanumerical(A - 1))
  assert.ok(!isAlphanumerical(Z + 1))
  assert.ok(!isAlphanumerical(_0 - 1))
  assert.ok(!isAlphanumerical(_9 + 1))
  assert.ok(!isAlphanumerical('💩'))
})
