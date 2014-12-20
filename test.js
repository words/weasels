'use strict';

/**
 * Dependencies.
 */

var weasels,
    assert;

weasels = require('./');
assert = require('assert');

/**
 * Tests.
 */

describe('weasels', function () {
    it('should be an `Object`', function () {
        assert(typeof weasels === 'object');
    });
});

describe('weasels.is(word)', function () {
    it('should return true if a word is listed', function () {
        assert(weasels.is('vast') === true);
    });

    it('should return false if a word is not listed', function () {
        assert(weasels.is('unicorn') === false);
    });
});

describe('weasels.all()', function () {
    var all;

    all = weasels.all();

    it('should return an array', function () {
        assert('length' in all);
        assert(typeof all === 'object');
    });

    it('every entry should be lowercase', function () {
        all.forEach(function (word) {
            assert(word.toLowerCase() === word);
        });
    });

    it('every entry should only occur once', function () {
        all.forEach(function (word, index) {
            assert(all.indexOf(word, index + 1) === -1);
        });
    });

    it('should be immutable', function () {
        all.push('unicorn');

        assert(weasels.all().indexOf('unicorn') === -1);
    });
});

describe('weasels.add(word) and weasels.remove(word)', function () {
    it('should add and remove a word', function () {
        assert(weasels.is('unicorn') === false);

        weasels.add('unicorn');

        assert(weasels.is('unicorn') === true);

        weasels.remove('unicorn');

        assert(weasels.is('unicorn') === false);
    });

    it('should add and remove multiple words', function () {
        assert(weasels.is('unicorn') === false);
        assert(weasels.is('rainbow') === false);

        weasels.add('unicorn', 'rainbow');

        assert(weasels.is('unicorn') === true);
        assert(weasels.is('rainbow') === true);

        weasels.remove('unicorn', 'rainbow');

        assert(weasels.is('unicorn') === false);
        assert(weasels.is('rainbow') === false);
    });

    it('should fail silently when removing a non-existing word', function () {
        assert(weasels.is('unicorn') === false);

        weasels.remove('unicorn');

        assert(weasels.is('unicorn') === false);
    });
});
