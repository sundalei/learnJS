/*
function add (x, y, f) {
    return f(x) + f(y);
}

var result = add(-5, 6, Math.abs);
alert(result);
*/

/*
function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = arr.map(pow);
alert(result);
*/

/*
var arr = [1, 3, 5, 7, 9];
var result = arr.reduce(function(x, y) {
    return x + y;
});
alert(result);*/

/*
'use strict';

function product(arr) {
    var result = arr.reduce(function(x, y) {
        return x * y;
    });
    return result;
}

// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
    alert('测试通过!');
}
else {
    alert('测试失败!');
}
*/

/*
var arr = [1, 3, 5, 7, 9];
var result = arr.reduce(function(x, y) {
    return 10 * x + y;
});
alert(result);*/


/*
'use strict';

function string2int(s) {
     var arr = s.split('');
     var arr2 = arr.map(function(x) {
         return x * 1;
     });
     var result = arr2.reduce(function(x, y) {
         return 10 * x + y;
     });
     return result;
}
// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        alert('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        alert('请勿使用Number()!');
    } else {
        alert('测试通过!');
    }
}
else {
    alert('测试失败!');
}
*/

/*
'use strict'

function normalize(arr) {
    return arr.map(function(x) {
        return x[0].toUpperCase() + x.substring(1).toLowerCase();
    });
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    alert('测试通过!');
}
else {
    alert('测试失败!');
}
*/

'use strict';

var arr = ['1', '2', '3'];
var r;
r = arr.map(function returnInt(x) {
    return parseInt(x, 10);
});
alert('[' + r[0] + ', ' + r[1] + ', ' + r[2] + ']');