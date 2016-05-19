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

function inherits(Child, Parent) {
  var F = function() {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

inherits(PrimaryStudent, Student);  // add PrimaryStudent prototype to Student prototype

PrimaryStudent.prototype.getGrade = function() {
    return this.grade;
}

var xiaoming = new PrimaryStudent({
    name: 'xiaoming',
    grade: 1
});

xiaoming.name;
xiaoming.grade;
xiaoming.hello();
xiaoming.getGrade();

xiaoming.__proto__ === PrimaryStudent.prototype; // true
xiaoming.__proto__.__proto__ === Student.prototype; // true


xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; // true
