function* fib(max) {
  var
   t,
   a = 0,
   b = 1,
   n = 1;

  while(n < max) {
    yield a;
    t = a + b;
    a = b;
    b = t;
    n++;
  }

  return a;
}
var f = fib(5);
f.next();
f.next();
f.next();
f.next();
f.next();

for(var x of fib(10)) {
  console.log(x);
}

/*******************************************************************************/

function* next_id() {
    var num = 1;
    while(true) {
        yield num++;
    }
}

var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        alert('failed!');
        break;
    }
}
if (pass) {
    alert('passed!');
}
