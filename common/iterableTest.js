var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);

for(var x of a) {
  console.log(x);
}
for(var x of s) {
  console.log(x);
}
for(var x of m) {
  console.log(x[0] + '=' + x[1]);
}

var a = ['A', 'B', 'C'];
a.name = 'Hello';
for(var x in a) {
  console.log(x);
}

var a = ['A', 'B', 'C'];
a.forEach(function(element, index, array) {
  alert(element);
});

var s = new Set(['A', 'B', 'C']);
s.forEach(function(element, sameElement, set) {
  alert(element);
});

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    alert(value);
});
