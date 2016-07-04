'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age : function() {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

xiaoming.age; // function xiaoming.age()
xiaoming.age(); // 今年调用是25,明年调用就变成26了

/******************************************************************************/

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
   name: 'xiaoming',
    birth: 1990,
    age : getAge
};

xiaoming.age(); // 25, 正常结果
getAge(); // NaN

var fn = xiaoming.age; // 先拿到xiaoming的age函数
fn(); //NaN

getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空

/******************************************************************************/

'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

var fn = xiaoming.age;
fn(); // Uncaught TypeError: Cannot read property 'birth' of undefined

/******************************************************************************/

var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age : function() {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined

/******************************************************************************/

var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function() {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
count;
