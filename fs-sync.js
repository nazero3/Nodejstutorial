const {readFileSync, writeFileSync, write} = require('fs');

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result.txt','here is the result text :' + first + second)
console.log(first,second)
