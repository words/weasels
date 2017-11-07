# weasels [![Build Status][travis-badge]][travis]

List of _many_ English, both British and American, weasel words.

## Installation

[npm][npm]:

```bash
npm install weasels
```

## Usage

```js
var weasels = require('weasels');

weasels.length; //=> 116

console.log(weasels.slice(0, 10));
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

_Reportedly_, **weasels** exposes a list of strings (`Array.<string>`).

## Support

`weasels` supports _several_ weasel words and phrases.  For a complete
list, see [`data.txt`][data].

Note that the words listed in **weasels** _might_ or, in fact, _might_
not be weasels.

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

[travis-badge]: https://img.shields.io/travis/words/weasels.svg

[travis]: https://travis-ci.org/words/weasels

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[data]: data.txt
