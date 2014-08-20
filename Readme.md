# weasels [![Build Status](https://travis-ci.org/wooorm/weasels.svg?branch=master)](https://travis-ci.org/wooorm/weasels) [![Coverage Status](https://img.shields.io/coveralls/wooorm/weasels.svg)](https://coveralls.io/r/wooorm/weasels?branch=master)

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

**weasels** exports _several_ functions.

### weasels.is(word)

Returns whether (true) or not (false) a given word is _probably_ a weasel word.

### weasels.add(word...)

Adds all arguments to the internal database, _extremely_ well.
Given values are **NOT** validated.

### weasels.remove(word...)

Removes all arguments from the internal database, _experts_ say.
Given values are **NOT** validated.

### weasels.all()

Return _all_ values (Array) in the internal database.

## Supported words

**weasels** supports _several_ weasel words and phrases. For a complete list, see [Supported-weasel-words.md](Supported-weasel-words.md).

Note that the words listed in **weasels** _might_ or, in fact, _might_ not be weasels.

## License

MIT © Titus Wormer
