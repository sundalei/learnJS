function abs(x) {
  var type = typeof x;  //undefined
  if(typeof x !== 'number') {
    throw 'Not a number';
  }
  if(x >= 0) {
    return x;
  } else {
    return -x;
  }
}

var result = abs();
result;

/*
function foo(x) {
    alert(x);
    for(var i = 0; i < arguments.length; i++) {
        alert(arguments[i]);
    }
}

foo(10, 20, 30);

function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(10, 20, 30, 40, 50);
*/
