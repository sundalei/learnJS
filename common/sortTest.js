/*
var arr = [10, 20, 1, 2];
arr.sort(function(x, y) {
    if(x < y) {
        return 1;
    }
    if(x > y) {
        return -1;
    }
    return 0;
});

alert(arr);
*/

/*
var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if(x1 < x2) {
        return -1;
    } 
    if(x1 > x2) {
        return 1;
    }
    return 0;
});
alert(arr);
*/

var arr1 = ['B', 'A', 'C'];
var arr2 = arr1.sort();
alert(arr1);
alert(arr2);
alert(arr1 === arr2);