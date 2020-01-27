# weasels

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of *many* English, both British and American, weasel words.

## Install

[npm][]:

```sh
npm install weasels
```

## Use

```js
var weasels = require('weasels')

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

[build-badge]: https://img.shields.io/travis/words/weasels.svg

[build]: https://travis-ci.org/words/weasels

[downloads-badge]: https://img.shields.io/npm/dm/weasels.svg

[downloads]: https://www.npmjs.com/package/weasels

[size-badge]: https://img.shields.io/bundlephobia/minzip/weasels.svg

[size]: https://bundlephobia.com/result?p=weasels

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[data]: data.txt
