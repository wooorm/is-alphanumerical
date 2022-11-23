import {isAlphabetical} from 'is-alphabetical'
import {isDecimal} from 'is-decimal'

/**
 * Check if the given code point, or the code point at the first index, is
 * alphanumerical.
 *
 * @param {string|number} value
 *   Code point or string.
 * @returns {boolean}
 *   Whether `value` is alphanumerical.
 */
export function isAlphanumerical(value) {
  return isAlphabetical(value) || isDecimal(value)
}
