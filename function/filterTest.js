var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function(x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]

/********************************************************************************/
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function(x) {
    return x && x.trim();   // 注意：IE9以下的版本没有trim()方法
});
r; // ['A', 'B', 'C']

/********************************************************************************/
function get_primes(arr) {
   var r = arr.filter(function(x) {
       if(x === 1) {
           return false;
       }
        for(var i = 2; i < x; i++) {
            if(x % i === 0) {
                return false;
            }
        }
        return true;
    });
    return r;
}

var x, r, arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    alert('测试通过!');
} else {
    alert('测试失败: ' + r.toString());
}
*/
