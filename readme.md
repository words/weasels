# weasels

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of *many* English, both British and American, weasel words.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`weasels`](#weasels-1)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes a list of [weasel words][wiki].

## When should I use this?

Use this when you want to do fun things with natural language.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install weasels
```

In Deno with [`esm.sh`][esmsh]:

```js
import {weasels} from 'https://esm.sh/weasels@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {weasels} from 'https://esm.sh/weasels@2?bundle'
</script>
```

## Use

```js
import {weasels} from 'weasels'

console.log(weasels.length) //=> 116

console.log(weasels.slice(0, 10))
```

Yields:

```js
[ 'a lot',
  'about',
  'acts',
  'again',
  'all',
  'almost',
  'already',
  'also',
  'anyway',
  'appeared' ]
```

## API

This package exports the identifier `weasels`.
There is no default export.

### `weasels`

*Reportedly*, **weasels** exposes a list of strings (`Array<string>`).

## Data

`weasels` supports *several* weasel words and phrases.
For a complete list, see [`data.txt`][data].

> 👉 **Note**: that the words listed in **weasels** *might* or, in fact,
> *might* not be weasels.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — list of buzzwords
*   [`dale-chall`](https://github.com/words/dale-chall)
    — list of familiar American-English words (1995)
*   [`fillers`](https://github.com/words/fillers)
    — list of filler words
*   [`hedges`](https://github.com/words/hedges)
    — list of hedge words
*   [`profanities`](https://github.com/words/profanities)
    — list of profane words
*   [`spache`](https://github.com/words/spache)
    — list of simple American-English words (1974)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/weasels/workflows/main/badge.svg

[build]: https://github.com/words/weasels/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/weasels.svg

[coverage]: https://codecov.io/github/words/weasels

[downloads-badge]: https://img.shields.io/npm/dm/weasels.svg

[downloads]: https://www.npmjs.com/package/weasels

[size-badge]: https://img.shields.io/bundlephobia/minzip/weasels.svg

[size]: https://bundlephobia.com/result?p=weasels

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[data]: data.txt

[wiki]: https://en.wikipedia.org/wiki/Weasel_word
