function lazy_sum(arr) {
  var sum = function() {
    return arr.reduce(function(x, y) {
      return x + y;
    });
  }
  return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
f(); // 50
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

/*************************************************/

function create_counter(initial) {
  var x = initial || 0;
  return {
    inc: function() {
      x += 1;
      return x;
    }
  }
}

var c1 = create_counter();
c1.inc();
c1.inc();
c1.inc();

var c2 = create_counter(10);
c2.inc();
c2.inc();
c2.inc();

/***************************************************/

function make_pow(n) {
  return function(x) {
    return Math.pow(x, n);
  }
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

pow2(5);
pow3(7);
