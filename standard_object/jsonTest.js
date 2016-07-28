var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

JSON.stringify(xiaoming); // '{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}'

JSON.stringify(xiaoming, null, '  ');
/**
 "{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" Middle School",
  "skills": [
    "JavaScript",
    "Java",
    "Python",
    "Lisp"
  ]
}"
 */

JSON.stringify(xiaoming, ['name', 'skills'], 4);
/**
 "{
    "name": "小明",
    "skills": [
        "JavaScript",
        "Java",
        "Python",
        "Lisp"
    ]
}"
 */

function convert(key, value) {
    if(typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

JSON.stringify(xiaoming, convert, '  ');
/**
"{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" MIDDLE SCHOOL",
  "skills": [
    "JAVASCRIPT",
    "JAVA",
    "PYTHON",
    "LISP"
  ]
}"
 */
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
      return { // 只输出name和age，并且改变了key：
        'Name' : this.name,
        'Age' : this.age
      }
    }
};

JSON.stringify(xiaoming); // "{"Name":"小明","Age":14}"

/********************************************************************************/

JSON.parse('[1, 2, 3, true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: "小明", age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45

var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
     // 把number * 2:
    if(key === 'age') {
        return value * 2;
    }
    return value;
}); // Object {name: "小明", age: 28}
