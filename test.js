'use strict';

var weasel, assert;

weasel = require('./');
assert = require('assert');

describe('weasel', function () {
    it('should be an `Object`', function () {
        assert(typeof weasel === 'object');
    });
});

describe('weasel.is(word)', function () {
    it('should return true if a word is a weasel', function () {
        assert(weasel.is('vast') === true);
    });

    it('should return false if a word is not a weasel', function () {
        assert(weasel.is('unicorn') === false);
    });
});

describe('weasel.all()', function () {
    var all = weasel.all();

    it('should return an array', function () {
        assert('length' in all);
        assert(typeof all === 'object');
    });

    it('every entry should be lowercase', function () {
        var iterator = -1,
            length = all.length;

        while (++iterator < length) {
            assert(all[iterator].toLowerCase() === all[iterator]);
        }
    });

    it('every entry should only occur once', function () {
        var iterator = -1,
            length = all.length;

        while (++iterator < length) {
            assert(all.indexOf(all[iterator], iterator + 1) === -1);
        }
    });

    it('should be immutable', function () {
        all.push('unicorn');

        assert(weasel.all().indexOf('unicorn') === -1);
    });
});

describe('weasel.add(word) and weasel.remove(word)', function () {
    it('should add and remove a word', function () {
        assert(weasel.is('unicorn') === false);

        weasel.add('unicorn');
        assert(weasel.is('unicorn') === true);

        weasel.remove('unicorn');
        assert(weasel.is('unicorn') === false);
    });

    it('should add and remove multiple words', function () {
        assert(weasel.is('unicorn') === false);
        assert(weasel.is('rainbow') === false);

        weasel.add('unicorn', 'rainbow');
        assert(weasel.is('unicorn') === true);
        assert(weasel.is('rainbow') === true);

        weasel.remove('unicorn', 'rainbow');
        assert(weasel.is('unicorn') === false);
        assert(weasel.is('rainbow') === false);
    });

    it('should fail silently when removing a non-existing word', function () {
        assert(weasel.is('unicorn') === false);
        weasel.remove('unicorn');
        assert(weasel.is('unicorn') === false);
    });
});
