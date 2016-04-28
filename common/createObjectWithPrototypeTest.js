function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function() {
    alert('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

function F() {
    
}

F.prototype = Student.prototype;

PrimaryStudent.prototype = new F();

PrimaryStudent.prototype.constructor = PrimaryStudent;

PrimaryStudent.prototype.getGrade = function() {
    return this.grade;
}

var xiaoming = new PrimaryStudent({
    name: 'xiaoming',
    grade: 1
});
//alert(xiaoming.name);
//alert(xiaoming.grade);
//xiaoming.hello();
//alert(xiaoming.getGrade());

var result1 = xiaoming.__proto__ === PrimaryStudent.prototype; // true
var result2 = xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
var result3 = xiaoming instanceof PrimaryStudent; // true
var result4 = xiaoming instanceof Student; // true
alert(result1 + ": " + result2 + ": " + result3 + ": " + result4);