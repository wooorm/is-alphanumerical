'use strict'

var test = require('tape')
var alphanumerical = require('.')

test('alphanumerical(character)', function (t) {
  t.ok(alphanumerical('a'))
  t.ok(alphanumerical('z'))
  t.ok(alphanumerical('A'))
  t.ok(alphanumerical('Z'))
  t.ok(alphanumerical('0'))
  t.ok(alphanumerical('9'))
  t.ok(alphanumerical('a'.charCodeAt(0)))
  t.ok(alphanumerical('9'.charCodeAt(0)))
  t.notOk(alphanumerical('\t'))
  t.notOk(alphanumerical('a'.charCodeAt(0) - 1))
  t.notOk(alphanumerical('z'.charCodeAt(0) + 1))
  t.notOk(alphanumerical('A'.charCodeAt(0) - 1))
  t.notOk(alphanumerical('Z'.charCodeAt(0) + 1))
  t.notOk(alphanumerical('0'.charCodeAt(0) - 1))
  t.notOk(alphanumerical('9'.charCodeAt(0) + 1))
  t.notOk(alphanumerical('💩'))

  t.end()
})
