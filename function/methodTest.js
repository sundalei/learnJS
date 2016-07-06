'use strict';

/*
var xiaoming = {
    name: '小明',
    birth: 1990,
    age : function() {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

xiaoming.age;
xiaoming.age();
*/

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
   name: 'xiaoming',
    birth: 1990,
    age : getAge
};

xiaoming.age();
getAge.apply(xiaoming, []);

/*
var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age : function() {
        var that = this;
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age();
*/

/*
var count = 0;
var oldParseInt = parseInt;

window.parseInt = function() {
    count += 1;
    return oldParseInt.apply(null, arguments);
};

alert(parseInt('10'));
alert(parseInt('20'));
alert(parseInt('30'));
alert(count);
*/
