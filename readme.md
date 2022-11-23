# is-alphanumerical

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if a character is alphanumerical.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`isAlphanumerical(character)`](#isalphanumericalcharacter)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a function that checks if a given character is ASCII alphanumerical:
it matches `[a-zA-Z0-9]`.

## When should I use this?

Not often, as it’s relatively simple to do yourself.
This package exists because it’s needed in several related packages, at which
point it becomes useful to defer to one shared function.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install is-alphanumerical
```

In Deno with [`esm.sh`][esmsh]:

```js
import {isAlphanumerical} from 'https://esm.sh/is-alphanumerical@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {isAlphanumerical} from 'https://esm.sh/is-alphanumerical@2?bundle'
</script>
```

## Use

```js
import {isAlphanumerical} from 'is-alphanumerical'

isAlphanumerical('a') // => true
isAlphanumerical('Z') // => true
isAlphanumerical('0') // => true
isAlphanumerical(' ') // => false
isAlphanumerical('💩') // => false
```

## API

This package exports the identifier `isAlphanumerical`.
There is no default export.

### `isAlphanumerical(character)`

Check if the given code point (`number`), or the code point at the first index
(`string`), is alphanumerical.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/is-alphabetical`](https://github.com/wooorm/is-alphabetical)
*   [`wooorm/is-decimal`](https://github.com/wooorm/is-decimal)
*   [`wooorm/is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
*   [`wooorm/is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)
*   [`wooorm/is-word-character`](https://github.com/wooorm/is-word-character)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/is-alphanumerical/workflows/main/badge.svg

[build]: https://github.com/wooorm/is-alphanumerical/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/is-alphanumerical.svg

[coverage]: https://codecov.io/github/wooorm/is-alphanumerical

[downloads-badge]: https://img.shields.io/npm/dm/is-alphanumerical.svg

[downloads]: https://www.npmjs.com/package/is-alphanumerical

[size-badge]: https://img.shields.io/bundlephobia/minzip/is-alphanumerical.svg

[size]: https://bundlephobia.com/result?p=is-alphanumerical

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
