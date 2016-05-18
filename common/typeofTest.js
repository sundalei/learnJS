typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'

/*******************************************************************************/

var n = new Number(123);
var b = new Boolean(true);
var s = new String('str');

typeof new Number(123); // 'object'
new Number(123) === 123; // false

typeof new Boolean(true); // 'object'
new Boolean(true) === true; //false

typeof new String('str'); // 'object'
new String('str') === 'str'; //false

/*******************************************************************************/

var n = Number('123');
typeof n;

var b = Boolean('true');
typeof b;

var b2 = Boolean('false'); //true
var b3 = Boolean('');

var s = String(123.45);
typeof s;
