//var arr = [1, 2, 3.14, 'Hello', null, true];
//alert(arr.length);

//var arr = [1, 2, 3];
//alert(arr.length);
//arr.length = 6;
//alert(arr);
//arr.length = 2;
//alert(arr);

//var arr = ['A', 'B', 'C'];
//arr[1] = 99;
//alert(arr);

//var arr = [1, 2, 3];
//arr[5] = 'X';
//alert(arr);

//var arr = [10, 20, '30', 'xyz'];
//alert(arr.indexOf(10));
//alert(arr.indexOf(20));
//alert(arr.indexOf(30));
//alert(arr.indexOf('30'));

//var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
//alert(arr.slice(0, 3));
//alert(arr.slice(3));
//var aCopy = arr.slice();
//alert(arr === aCopy);

//var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
//arr.splice(2, 3, "Google", "Facebook");
//alert(arr);
//arr.splice(2, 2);
//alert(arr);
//arr.splice(2, 0, 'Google', 'Facebook');
//alert(arr);

//var arr = ['A', 'B', 'C'];
//var added = arr.concat(1, 2, [3, 4, 5], ['Array', 'Bob']);
//alert(added);
//alert(added.join('-'));

'use strict';
var arr = ['abc', 'cde', 'hello', 'world'];
arr.sort();
var message = "welcome ";
for(var i = 0; i < arr.length; i++) {
    if(i === arr.length - 1) {
        message = message.concat('and ', arr[i]);
    } else if(i === arr.length - 2) {
        message = message.concat(arr[i], ' ');
    } else {
        message = message.concat(arr[i], ', ');
    }
}
message = message.concat(" boys!");
alert(message);