'use strict';

abc = 'hello, world';
alert(abc);

/*
function foo() {
    var y = 'Bob';
    var x = 'Hello, ' + y;
    alert(x);
    //var y = 'Bob';
}

foo();
*/

/*
var course = "Learn Javascript";
alert(course);
alert(window.course);
*/

/*
function foo() {
    alert('foo');
}

foo();
window.foo();
*/

/*
window.alert('调用window.alert()');
var old_alert = window.alert;
window.alert = function() {}
alert('无法用alert()显示了!');
window.alert = old_alert;
alert('又可以用alert()了!');
*/

/*
var MYAPP = {};
MYAPP.name = "myapp";
MYAPP.version = "1.0";

MYAPP.foo = function() {
    return foo;
};
*/

function foo() {
    const PI = 3.14;
    PI = 3;
    alert(PI);
}

foo();
