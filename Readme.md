# weasels [![Build Status](https://img.shields.io/travis/wooorm/weasels.svg?style=flat)](https://travis-ci.org/wooorm/weasels) [![Coverage Status](https://img.shields.io/coveralls/wooorm/weasels.svg?style=flat)](https://coveralls.io/r/wooorm/weasels?branch=master)

List of _many_ English, both British and American, weasel words.

## Installation

npm:
```sh
$ npm install weasels
```

Component.js:
```sh
$ component install wooorm/weasels
```

## Usage

```js
var weasels = require('weasels');

weasels.is('vast'); // true
weasels.is('weasel'); // false

weasels.add('unicorn');
weasels.is('unicorn'); // true

weasels.remove('unicorn');
weasels.is('unicorn'); // false
```

## API

_Reportedly_, **weasels** exposes functions using [the datalist-interface API](https://github.com/wooorm/datalist-interface#api).

## Supported words

**weasels** supports _several_ weasel words and phrases. For a complete list, see [Support.md](Support.md).

Note that the words listed in **weasels** _might_ or, in fact, _might_ not be weasels.

## Related

- [buzzwords](https://github.com/wooorm/buzzwords) — List of buzzwords;
- [fillers](https://github.com/wooorm/fillers) — List of filler words;
- [profanities](https://github.com/wooorm/profanities) — List of profane words;
- [hedges](https://github.com/wooorm/hedges) — List of hedge words.

## License

MIT © [Titus Wormer](http://wooorm.com)
