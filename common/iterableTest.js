var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);

for(var x of a) { // 遍历Array
  console.log(x);
}
for(var x of s) { // 遍历Set
  console.log(x);
}
for(var x of m) { // 遍历Map
  console.log(x[0] + '=' + x[1]);
}

var a = ['A', 'B', 'C'];
a.name = 'Hello';
for(var x in a) {
  console.log(x); // '0', '1', '2', 'name'
}

var a = ['A', 'B', 'C'];
a.forEach(function(element, index, array) {
  // element: 指向当前元素的值
  // index: 指向当前索引
  // array: 指向Array对象本身
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
