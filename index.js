'use strict';

/**
 * Dependencies.
 */

var Interface;

Interface = require('datalist-interface');

/**
 * Data.
 */

var words;

words = require('./data/weasels.json');

/**
 * Expose weasels.
 */

module.exports = new Interface(words);
