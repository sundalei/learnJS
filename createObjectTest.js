var arr = [1, 2, 3];

function foo() {
    return 0;
}

function Student(name) {
    this.name = name;
    /*
    this.hello = function() {
        alert('Hello, ' + this.name + '!');
    }
    */
}

Student.prototype.hello = function() {
    alert('Hello, ' + this.name + '!');
}

var xiaoming = new Student('xiaoming');
var xiaohong = new Student('xiaohong');
//alert(xiaoming.name);
//xiaoming.hello();
//alert(xiaoming.constructor === Student.prototype.constructor);
//alert(Student.prototype.constructor === Student);
//alert(Object.getPrototypeOf(xiaoming) === Student.prototype);
//alert(xiaoming instanceof Student);
alert(xiaoming.hello === xiaohong.hello);