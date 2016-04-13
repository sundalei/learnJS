
class Student {
    constructor(name) {
        this.name = name;
    }
    
    hello() {
        alert('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('xiaoming');
xiaoming.hello();