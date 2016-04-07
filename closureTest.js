function lazy_sum(arr) {
    var sum = function() {
        return arr.reduce(function(x, y) {
            return x + y;
        });
    }
    return sum;
}
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var result = f1();
alert(result);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
alert(f1 === f2);