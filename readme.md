# weasels [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

List of _many_ English, both British and American, weasel words.

## Installation

[npm][npm-install]:

```bash
npm install weasels
```

**weasels** is also available for [duo][duo-install], and as an
AMD, CommonJS, and globals module, [uncompressed and compressed][releases].

## Usage

```js
var weasels = require('weasels');

weasels.length; // 116

console.log(weasels.slice(0, 10));
```

Yields:

```json
[
  "a lot",
  "about",
  "acts",
  "again",
  "all",
  "almost",
  "already",
  "also",
  "anyway",
  "appeared"
]
```

## API

### `weasels`

**Type**: `Array.<string>` — _Reportedly_, **weasels** exposes a list
of strings.

## Support

**weasels** supports _several_ weasel words and phrases. For a complete
list, see [support.md][support].

Note that the words listed in **weasels** _might_ or, in fact, _might_
not be weasels.

## Related

*   [buzzwords](https://github.com/wooorm/buzzwords)
    — List of buzzwords;

*   [dale-chall](https://github.com/wooorm/dale-chall)
    — List of familiar American-English words (1995);

*   [fillers](https://github.com/wooorm/fillers)
    — List of filler words.

*   [hedges](https://github.com/wooorm/hedges)
    — List of hedge words;

*   [profanities](https://github.com/wooorm/profanities)
    — List of profane words;

*   [spache](https://github.com/wooorm/spache)
    — List of simple American-English words (1974);

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/weasels.svg

[travis]: https://travis-ci.org/wooorm/weasels

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/weasels.svg

[codecov]: https://codecov.io/github/wooorm/weasels

[npm-install]: https://docs.npmjs.com/cli/install

[duo-install]: http://duojs.org/#getting-started

[releases]: https://github.com/wooorm/weasels/releases

[license]: LICENSE

[support]: support.md

[author]: http://wooorm.com
