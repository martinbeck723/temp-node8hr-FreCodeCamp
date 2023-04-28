const path = require('path')

const filePath =path.join('/content','subfoler','test.txt');
//get normalized path
console.log(filePath);

//get base name
const base =path.basename(filePath);
console.log(base);

const absolutePath=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolutePath);

