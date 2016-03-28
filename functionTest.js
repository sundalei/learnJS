var abs = function(x) {
    if(typeof(x) !== 'number') {
        alert('Not a Number');
        throw 'Not a Number';
    }
    if(x >= 0) {
        return x;
    } else {
        return -x;
    }
};

alert(abs(10, 'abcd'));
//alert(abs(-3, 'hello'));
alert(abs());