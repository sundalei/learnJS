var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

JSON.stringify(xiaoming);
JSON.stringify(xiaoming, null, 4);
JSON.stringify(xiaoming, ['name', 'skills'], 4);

function convert(key, value) {
    if(typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

JSON.stringify(xiaoming, convert, '  ');

/********************************************************************************/

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function() {
      return {
        'Name' : this.name,
        'Age' : this.age
      }
    }
};

JSON.stringify(xiaoming, null, 4);

/********************************************************************************/

JSON.parse('[1, 2, 3, true]');
JSON.parse('{"name":"小明","age":14}');
JSON.parse('true');
JSON.parse('123.45');

var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if(key === 'name') {
        return value + '同学';
    }
    return value;
});
