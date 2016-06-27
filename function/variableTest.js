'use strict';

var abc = 'hello, world';
alert(abc);
alert(window.abc);
/******************************************************************************/

function foo() {
    var x = 'Hello, ' + y;
    alert(x);
    var y = 'Bob';
}

foo();
/******************************************************************************/

var course = "Learn Javascript";
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript'

function foo() {
    alert('foo');
}

foo(); // 直接调用foo()
window.foo(); // 通过window.foo()调用

window.alert('调用window.alert()');
// 把alert保存到另一个变量:
var old_alert = window.alert;
// 给alert赋一个新函数:
window.alert = function() {}
alert('无法用alert()显示了!');
// 恢复alert:
window.alert = old_alert;
alert('又可以用alert()了!');
/******************************************************************************/

var MYAPP = {};
MYAPP.name = "myapp";
MYAPP.version = "1.0";

MYAPP.foo = function() {
    return foo;
};
/******************************************************************************/

const PI = 3.14;
PI = 3;
alert(PI);
