# weasels

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of *many* English, both British and American, weasel words.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install weasels
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

This package exports the following identifiers: `weasels`.
There is no default export.

### `weasels`

*Reportedly*, **weasels** exposes a list of strings (`Array.<string>`).

## Support

`weasels` supports *several* weasel words and phrases.
For a complete list, see [`data.txt`][data].

Note that the words listed in **weasels** *might* or, in fact, *might* not be
weasels.

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — List of buzzwords
*   [`dale-chall`](https://github.com/words/dale-chall)
    — List of familiar American-English words (1995)
*   [`fillers`](https://github.com/words/fillers)
    — List of filler words
*   [`hedges`](https://github.com/words/hedges)
    — List of hedge words
*   [`profanities`](https://github.com/words/profanities)
    — List of profane words
*   [`spache`](https://github.com/words/spache)
    — List of simple American-English words (1974)

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

[license]: license

[author]: https://wooorm.com

[data]: data.txt
