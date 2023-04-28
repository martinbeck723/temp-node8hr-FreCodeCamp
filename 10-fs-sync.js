//sync, line by line, blocking
const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first =readFileSync('./content/first.txt','utf8');
const second =readFileSync('./content/second.txt','utf8');

//console.log(first, second);
//overwrite or create a new one
writeFileSync('./content/result-sync.text',`here is the result: ${first}, ${second}`);

//append to the file
writeFileSync('./content/result-sync.text', '---this is the content appended',
{ flag: 'a'});
writeFileSync('./content/result-sync.text', '---second appended',
{ flag: 'a'});

console.log('done with this task');
console.log('starting the next one');