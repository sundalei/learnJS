var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        alert(this.name + ' is running...');
    }
};

var Bird = {
    fly: function() {
        alert(this.name + ' is flying...');
    }
};

function createStudent(name) {
    var s = Object.create(Student);
    s.name = name;
    return s;
}

var xiaoming = {
    name: 'xiaoming'
};

//xiaoming.__proto__ = Student;
//xiaoming.__proto__ = Bird;
//alert(xiaoming.name);
//xiaoming.fly();

var xiaoming = createStudent('xiaoming');
xiaoming.run();
var result = xiaoming.__proto__ === Student;
alert(result);