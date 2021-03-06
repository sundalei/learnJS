var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

re1; // /ABC\-001/
re2; // /ABC\-001/

/*******************************************************/
var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345'); // true
re.test('010-1234x'); // false
re.test('010 12345'); // false

/*******************************************************/

'a b   c'.split(' '); //["a", "b", "", "", "c"]
'a b   c'.split(/\s+/); //["a", "b", "c"]
'a,b, c   d'.split(/[\s\,]+/); //["a", "b", "c", "d"]
'a,b;;  c   d'.split(/[\s\,\;]+/); //["a", "b", "c", "d"]

/*******************************************************/

var re = /^(\d{3})-(\d{3,8})$/;
re.exec('010-12345'); // ["010-12345", "010", "12345"]
re.exec('010 12345'); // null

var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
re.exec('20:16:45'); // ["20:16:45", "20", "16", "45"]

var re = /^(0[1-9]|1[0-2]|[0-9])-(0[1-9]|1[0-9]|2[0-9]|3[0-1]|[0-9])$/;
re.exec('2-30');
re.exec('4-31');

/*******************************************************/

var re = /^(\d+)(0*)$/;
re.exec('102300'); // ["102300", "102300", ""]
var re = /^(\d+?)(0*)$/;
re.exec('102300'); // ["102300", "1023", "00"]

/*******************************************************/

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re = /[a-zA-Z]+Script/g;

re.exec(s); // ["JavaScript"]
re.lastIndex; // 10

re.exec(s); // ["VBScript"]
re.lastIndex; // 20

re.exec(s); // ["JScript"]
re.lastIndex; // 29

re.exec(s); // ["ECMAScript"]
re.lastIndex; // 44

re.exec(s); // null

/*******************************************************/
var re = /^[\w\.]+@[\w]+\.[\w]+$/;

var re = /^<(\w+\s\w+)>\s(\w+@\w+\.\w+)$/;
var re = /^<([\w\.]+)>\s+([\w\.]+@\w+\.[a-zA-Z]+)$/;
var r = re.exec('<Tom Paris> tom@voyager.org');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
    alert('测试失败!');
}
else {
    alert('测试成功!');
}
