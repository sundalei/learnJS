'use strict';

function pow(x) {
  return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow);

function string2int(s) {
  var arr = s.split('').map(function(x) {
    return x - '0';
  });
  var result = arr.reduce(function(x, y) {
    return 10 * x + y;
  });
  return result;
}

function normalize(arr) {
  var result = arr.map(function(x) {
    var str = x[0].toUpperCase() + x.substring(1).toLowerCase();
    return str;
  });
  return result;
}

var arr = ['1', '2', '3'];
var r;
r = arr.map(function(x) {
  return parseInt(x, 10);
});
alert('[' + r[0] + ', ' + r[1] + ', ' + r[2] + ']');
