var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return {
            'Name': this.name,
            'Age': this.age
        }
    }
};

function convert(key, value) {
    if(typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

var result = JSON.stringify(xiaoming);
//alert(result);
var result2 = JSON.stringify(xiaoming, null, '  ');
//alert(result2);
var result3 = JSON.stringify(xiaoming, ['name', 'skills'], '  ');
//alert(result3);
var result4 = JSON.stringify(xiaoming, convert, '  ');
//alert(result4);

//alert(JSON.parse('[1, 2, 3, true]'));
//alert(JSON.parse('{"name":"小明","age":14}'));

var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if(key === 'age') {
        return value * 2;
    }
    return value;
})
alert(obj.name);
alert(obj.age);
