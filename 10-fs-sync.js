/* alternative
* const fs = require('fs')
* fs.readFileSync
* fs.writeFileSync
*/

const {readFileSync, writeFileSync} = require('fs')
console.log('-start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
  './content/result-sync.txt', 
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } // append flag
)
console.log('-done with with this task')
console.log('-sarting the next one')