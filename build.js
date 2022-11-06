import fs from 'node:fs'
import {toJson} from 'plain-text-data-to-json'

const doc = fs.readFileSync('data.txt', 'utf8')

fs.writeFileSync(
  'index.js',
  '/**\n * List of *many* English, both British and American, weasel words.\n */\nexport const weasels =' +
    JSON.stringify(toJson(doc), null, 2) +
    '\n'
)
