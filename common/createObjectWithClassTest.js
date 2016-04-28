
class Student {
    constructor(name) {
        this.name = name;
    }
    
    hello() {
        alert('Hello, ' + this.name + '!');
    }
}

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
    
    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}

var xiaoming = new Student('xiaoming');
xiaoming.hello();

var xiaohong = new PrimaryStudent('xiaohong', 2);
xiaohong.hello();
xiaohong.myGrade();