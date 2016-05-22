var test = document.getElementById('test-div');

var trs = document.getElementById('test-div').getElementsByTagName('div');

var reds = document.getElementById('test-div').getElementsByClassName('c-red');

var cs = test.children;

var first = test.firstElementChild;
var last = test.lastElementChild;

/*******************************************************************************/

var q1 = document.querySelector('#test-div');

var ps = q1.querySelectorAll('div.c-red');
