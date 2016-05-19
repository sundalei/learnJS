function Student(name) {
  this.name = name;
  this.hello = function() {
    alert('Hello, ' + this.name + '!');
  }
}

var xiaoming = new Student('xiaoming');
xiaoming.name;
xiaoming.hello();

xiaoming.constructor === Student.prototype.constructor;
Student.prototype.constructor === Student;

Object.getPrototypeOf(xiaoming) === Student.prototype;

xiaoming instanceof Student;

var xiaohong = new Student('xiaohong');
xiaoming.hello === xiaohong.hello;   // false

/******************************************************************/

function Student(name) {
    this.name = name;
}

Student.prototype.hello = function() {
    alert('Hello, ' + this.name + '!');
}

var xiaoming = new Student('xiaoming');
var xiaohong = new Student('xiaohong');
xiaohong.hello === xiaoming.hello;

/******************************************************************/
