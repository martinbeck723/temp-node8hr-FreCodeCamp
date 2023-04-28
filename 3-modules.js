// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//import the modules I need
const names = require('./4-names');
//name the same, so know sayHi is a function
const sayHi =require('./5-utils');
const data= require('./6-alternative-flavor')

require('./7-mind-grenade');
// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);