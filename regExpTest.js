/*
var re = /^\d{3}\-\d{3,8}$/;
var test1 = re.test('010-12345');
var test2 = re.test('010-1234x');
var test3 = re.test('010 12345');
alert(test1);
alert(test2);
alert(test3);
*/

/*
alert('a b   c'.split(/\s+/)); 
alert('a,b, c  d'.split(/[\s\,]+/)); 
alert('a,b;; c  d'.split(/[\s\,\;]+/));
*/

/*
var re = /^(\d{3})-(\d{3,8})$/;
alert(re.exec('010-12345'));
*/

/*
var re = /^(\d+?)(0*)$/;
var result = re.exec('102300');
alert(result);
*/

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re = /[a-zA-Z]+Script/g;

var matched = re.exec(s);
while(null !== matched) {
    alert(matched + ":" + re.lastIndex);
    matched = re.exec(s);
}
alert(re.lastIndex);