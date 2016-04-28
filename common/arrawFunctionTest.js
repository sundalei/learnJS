'use strict';

/*
var fn = x => {
    if(x > 0) {
        return x * x;
    } else {
        return -x * x;
    }
}
alert(fn(5));
alert(fn(-5));
*/

/*
var obj = {
    birth : 1990,
    getAge : function() {
        var b = this.birth;
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
};
alert(obj.getAge());
*/

/*
var obj = {
    birth : 1990,
    getAge : function(year) {
        var b = this.birth;
        var fn = (y) => y - this.birth;
        return fn.call({birth: 2000}, year);
    }
};
alert(obj.getAge(2015));
*/