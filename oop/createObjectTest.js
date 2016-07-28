function Student(name) {
  this.name = name;
  this.hello = function() {
    alert('Hello, ' + this.name + '!');
  }
}

var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!

xiaoming.constructor === Student.prototype.constructor; // true
Student.prototype.constructor === Student; // true

Object.getPrototypeOf(xiaoming) === Student.prototype; // true

xiaoming instanceof Student; // true

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
xiaohong.hello === xiaoming.hello; // true

/******************************************************************/

function Student(props) {
  this.name = props.name || '匿名'; // 默认值为'匿名'
  this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function() {
  alert('Hello, ' + this.name + '!');
}

function createStudent(props) {
  return new Student(props || {});
}

var xiaoming = createStudent({
  name: 'xiaoming'
});

xiaoming.grade; // 1
