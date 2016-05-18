var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

re1;
re2;

/*******************************************************/
var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345');
re.test('010-1234x');
re.test('010 12345');

/*******************************************************/

'a b   c'.split(' '); //["a", "b", "", "", "c"]
'a b   c'.split(/\s+/); //["a", "b", "c"]
'a,b, c   d'.split(/[\s\,]+/); //["a", "b", "c", "d"]
'a,b;;  c   d'.split(/[\s\,\;]+/); //["a", "b", "c", "d"]

/*******************************************************/

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
