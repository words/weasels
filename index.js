'use strict';

var words, Interface;

words = require('./data/weasels.json');
Interface = require('datalist-interface');

module.exports = new Interface(words);
