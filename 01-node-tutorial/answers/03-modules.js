const names = require('./04-names.js');
const sayHi = require('./05-utils.js');
const data = require('./06-alternative-flavor.js');
require(`./07-mind-grenade.js`);
console.log(names);
console.log(sayHi);


console.log(data);
sayHi('susan');
sayHi(names);
sayHi(names.john);
sayHi(names.peter);