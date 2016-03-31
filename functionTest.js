function foo(x) {
    alert(x);
    for(var i = 0; i < arguments.length; i++) {
        alert(arguments[i]);
    }
}

//foo(10, 20, 30);

function foo(a, b) {
    var i, rest = [];
    if(arguments.length > 2) {
        for(i = 2; i < arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(10, 20, 30, 40, 50);