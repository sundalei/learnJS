
/*
function Student(props) {
    this.name = props.name || 'anonymous';
    this.grade = props.grade || 1;
}

Student.prototype.hello = function() {
    alert('Hello, ' + this.name + '!');
}

function createStudent(props) {
    return new Student(props);
}

var xiaoming = createStudent({name:'xiaoming'});
xiaoming.hello();
alert(xiaoming.grade);
*/

function Cat(name) {
    this.name = name;
}

Cat.prototype.say = function() {
    return 'Hello, ' + this.name + '!';
}

var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    alert('Pass!');
} else {
    alert('Fail!');
}