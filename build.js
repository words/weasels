import fs from 'fs'
import {toJson} from 'plain-text-data-to-json'

var doc = fs.readFileSync('data.txt', 'utf8')

fs.writeFileSync(
  'index.js',
  'export var weasels =' + JSON.stringify(toJson(doc), null, 2) + '\n'
)
