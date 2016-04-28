/*
function lazy_sum(arr) {
    var sum = function() {
        return arr.reduce(function(x, y) {
            return x + y;
        });
    }
    return sum;
}
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var result = f1();
alert(result);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
alert(f1 === f2);
*/

/*
function count() {
    var arr = [];
    for(var i = 1; i <= 3; i++) {
       arr.push((function(n) {
           return function() {
               return n*n;
           }
       })(i));
    }
    return arr;
}

var result = count();
var f1 = result[0];
var f2 = result[1];
var f3 = result[2];
alert(f1());
alert(f2());
alert(f3());
*/

/*
'use strict';

function create_counter(initial) {
    var x = initial || 0;
    return {
        inc : function() {
            x += 1;
            return x;
        }
    }
}
var c1 = create_counter();
alert(c1.inc());
alert(c1.inc());
alert(c1.inc());
var c2 = create_counter(10);
alert(c2.inc());
alert(c2.inc());
alert(c2.inc());
*/

function make_pow(n) {
    return function(x) {
        return Math.pow(x, n);
    }
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

alert(pow2(5));
alert(pow3(7));
