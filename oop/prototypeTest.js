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
  name: 'xiaoming'
};

xiaoming.__proto__ = Student;
xiaoming.name;
xiaoming.run();

/*******************************************************************************/

var Bird = {
    fly: function() {
        alert(this.name + ' is flying...');
    }
};

xiaoming.__proto__ = Bird;
xiaoming.fly();

/*******************************************************************************/

function createStudent(name) {
    var s = Object.create(Student);
    s.name = name;
    return s;
}

var xiaoming = createStudent('xiaoming');
xiaoming.run();
xiaoming.__proto__ === Student;
