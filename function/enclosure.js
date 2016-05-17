function lazy_sum(arr) {
  var sum = function() {
    return arr.reduce(function(x, y) {
      return x + y;
    });
  }
  return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]);

f();
var f2 = lazy_sum([1, 2, 3, 4, 5]);
f === f2;

/************************************************/

function count() {
  var arr = [];
  for(var i = 1; i <= 3; i++) {
    arr.push(function() {
      return i * i;
    });
  }
  return arr;
}

var result = count();
var f1 = result[0];
var f2 = result[1];
var f3 = result[2];

f1();
f2();
f3();

/*************************************************/

function count() {
  var arr = [];
  for(var i = 1; i <= 3; i++) {
    arr.push((function(n) {
      return function() {
        return n * n;
      }
    })(i));
  }
  return arr;
}

var result = count();
var f1 = result[0];
var f2 = result[1];
var f3 = result[2];

f1();
f2();
f3();
