var x = 0;
var i;
for(i = 1; i <= 10000; i++) {
  x = x + i;
}
x;

var x = 1;
var i;
for(i = 1; i <= 10; i++) {
  x = x * i;
}

var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for(i = 0; i < arr.length; i++) {
  x = arr[i];
  console.log(x);
}

var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

for(var key in o) {
  if(o.hasOwnProperty(key)) {
    console.log(key);
  }
}

var a = ['A', 'B', 'C'];
for(var i in a) {
  console.log(i + ', ' + a[i]);
}
