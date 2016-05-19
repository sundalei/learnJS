var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length;

/*********************************************************/

var arr = [1, 2, 3];
arr.length;
arr.length = 6;
arr;   // [1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr;

/*********************************************************/

var arr = ['A', 'B', 'C'];
arr[1] = 99;
arr;

/*********************************************************/

var arr = [1, 2, 3];
arr[5] = 'X';
arr;

/*********************************************************/

var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10);
arr.indexOf(20);
arr.indexOf(30);
arr.indexOf('30');

/*********************************************************/

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3);
arr.slice(3);
var aCopy = arr.slice();
arr === aCopy;

/*********************************************************/

var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
arr.splice(2, 3, "Google", "Facebook");
arr;
arr.splice(2, 2);
arr;
arr.splice(2, 0, 'Google', 'Facebook');
arr;

/*********************************************************/

var arr = ['A', 'B', 'C'];
var added = arr.concat(1, 2, [3, 4, 5], ['Array', 'Bob']);
added;
added.join('-');

/*********************************************************/

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
