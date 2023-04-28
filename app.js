//package, dependencies, module are the same

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project5 
// npm i <packageName>

// global dependency - use it in any project8 
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// 1manual approach (create package.json in the root, create properties etc)
// 2npm init (step by step, press enter to skip)
// 3npm init -y (everything default)

//use the module
const _ =require('lodash');

const items=[1,[2,[3,[4]]]];
//method in lodash to get a one level array
const newItems=_.flatMapDeep(items);
console.log(newItems);
