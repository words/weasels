'use strict';

var fs = require('fs');
var toJSON = require('plain-text-data-to-json');

var data = JSON.stringify(toJSON(fs.readFileSync('data.txt', 'utf8')), null, 2) + '\n';

fs.writeFileSync('index.json', data);
