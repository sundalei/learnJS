var robot = {
  name: 'Robot',
  height: 1.6,
  run: function() {
    console.log(this.name + ' is running...');
  }
};

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
  name: '小明'
};

xiaoming.__proto__ = Student;
xiaoming.name; // 小明
xiaoming.run(); // 小明 is running...

/*******************************************************************************/

var Bird = {
    fly: function() {
        console.log(this.name + ' is flying...');
    }
};

xiaoming.__proto__ = Bird;
xiaoming.fly(); // 小明 is flying...

/*******************************************************************************/

// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
}

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true
